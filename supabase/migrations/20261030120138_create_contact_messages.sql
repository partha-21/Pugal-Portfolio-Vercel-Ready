/*
# Create contact_messages table

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, required, up to 100 characters)
  - `email` (text, required, up to 255 characters)
  - `subject` (text, required, up to 150 characters)
  - `message` (text, required, up to 2000 characters)
  - `created_at` (timestamptz, defaults to now)

2. Security
- Row level security is enabled on `contact_messages`.
- Visitors (anon and signed-in roles) may only INSERT new messages. They cannot read, update, or delete any message, so submissions stay private to the site owner.
- Length and non-empty checks are enforced at the database level.
- The site owner reads messages through the Supabase dashboard.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(btrim(name)) BETWEEN 1 AND 100),
  email text NOT NULL CHECK (char_length(btrim(email)) BETWEEN 3 AND 255),
  subject text NOT NULL CHECK (char_length(btrim(subject)) BETWEEN 1 AND 150),
  message text NOT NULL CHECK (char_length(btrim(message)) BETWEEN 1 AND 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_messages TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
