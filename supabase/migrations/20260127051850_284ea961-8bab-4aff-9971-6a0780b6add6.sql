-- Create waitlist table for storing lead information
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  brand_name TEXT NOT NULL,
  website_or_instagram TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public waitlist signup)
CREATE POLICY "Anyone can join waitlist" 
ON public.waitlist 
FOR INSERT 
WITH CHECK (true);

-- Only allow reading via backend (protect PII)
CREATE POLICY "No direct read access to waitlist" 
ON public.waitlist 
FOR SELECT 
USING (false);