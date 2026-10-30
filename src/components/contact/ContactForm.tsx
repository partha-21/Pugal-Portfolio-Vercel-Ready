import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;
type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

const emptyValues: FormValues = { name: '', email: '', subject: '', message: '' };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  else if (values.name.trim().length > 100) errors.name = 'Name must be 100 characters or fewer.';

  if (!values.email.trim()) errors.email = 'Please enter your email address.';
  else if (!emailPattern.test(values.email.trim()) || values.email.trim().length > 255) errors.email = 'Enter a valid email address.';

  if (!values.subject.trim()) errors.subject = 'Please add a subject.';
  else if (values.subject.trim().length > 150) errors.subject = 'Subject must be 150 characters or fewer.';

  if (!values.message.trim()) errors.message = 'Please write a message.';
  else if (values.message.trim().length > 2000) errors.message = 'Message must be 2000 characters or fewer.';

  return errors;
}

const fieldClass = (hasError: boolean) => `field ${hasError ? '!border-rose-400/60 focus:!border-rose-400/70 focus:!ring-rose-400/10' : ''}`;

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name as keyof FormValues]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus('sending');
    const { error } = await supabase.from('contact_messages').insert({
      name: values.name.trim(),
      email: values.email.trim(),
      subject: values.subject.trim(),
      message: values.message.trim(),
    });

    if (error) {
      setStatus('error');
      return;
    }
    setValues(emptyValues);
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div className="glass-strong flex h-full min-h-[420px] flex-col items-center justify-center gap-5 rounded-3xl p-10 text-center animate-fade-up">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-400">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold text-ink-100">Message sent</h3>
          <p className="max-w-sm text-sm leading-relaxed text-ink-300">
            Thanks for reaching out. Your message has been received and Pugazhenthi will get back to you soon.
          </p>
        </div>
        <button type="button" onClick={() => setStatus('idle')} className="btn-ghost">
          Send another message
        </button>
      </div>
    );
  }

  const sending = status === 'sending';

  return (
    <form onSubmit={handleSubmit} noValidate className="glass-strong flex flex-col gap-5 rounded-3xl p-6 sm:p-8" aria-label="Contact form">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-ink-200">
          Name
          <input name="name" value={values.name} onChange={handleChange} placeholder="Your name" autoComplete="name" maxLength={100} className={fieldClass(Boolean(errors.name))} aria-invalid={Boolean(errors.name)} />
          {errors.name && <FieldError message={errors.name} />}
        </label>
        <label className="flex flex-col gap-2 text-sm text-ink-200">
          Email
          <input name="email" type="email" value={values.email} onChange={handleChange} placeholder="you@company.com" autoComplete="email" maxLength={255} className={fieldClass(Boolean(errors.email))} aria-invalid={Boolean(errors.email)} />
          {errors.email && <FieldError message={errors.email} />}
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm text-ink-200">
        Subject
        <input name="subject" value={values.subject} onChange={handleChange} placeholder="What would you like to discuss?" maxLength={150} className={fieldClass(Boolean(errors.subject))} aria-invalid={Boolean(errors.subject)} />
        {errors.subject && <FieldError message={errors.subject} />}
      </label>

      <label className="flex flex-col gap-2 text-sm text-ink-200">
        Message
        <textarea name="message" rows={5} value={values.message} onChange={handleChange} placeholder="Tell me about the role, project, or idea." maxLength={2000} className={`${fieldClass(Boolean(errors.message))} resize-none`} aria-invalid={Boolean(errors.message)} />
        {errors.message && <FieldError message={errors.message} />}
      </label>

      {status === 'error' && (
        <div role="alert" className="flex items-start gap-3 rounded-xl border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-400">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          Your message could not be sent right now. Please try again in a moment.
        </div>
      )}

      <button type="submit" disabled={sending} className="btn-primary mt-2 w-full disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0">
        {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        {sending ? 'Sending...' : 'Send message'}
      </button>
    </form>
  );
}

function FieldError({ message }: { message: string }) {
  return <span className="text-xs text-rose-400">{message}</span>;
}
