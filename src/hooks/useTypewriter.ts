import { useEffect, useState } from 'react';

interface TypewriterOptions {
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseAfterType?: number;
  pauseAfterDelete?: number;
}

export function useTypewriter(words: string[], options: TypewriterOptions = {}) {
  const { typeSpeed = 70, deleteSpeed = 40, pauseAfterType = 1800, pauseAfterDelete = 400 } = options;
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let delay = deleting ? deleteSpeed : typeSpeed;

    if (!deleting && text === current) {
      delay = pauseAfterType;
    } else if (deleting && text === '') {
      delay = pauseAfterDelete;
    }

    const timer = window.setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === '') {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      } else {
        const next = deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1);
        setText(next);
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pauseAfterType, pauseAfterDelete]);

  return text;
}
