import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rdotyjwkuvdgurtzmfoi.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkb3R5andrdXZkZ3VydHptZm9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc4NzY0OTAsImV4cCI6MjAzMzQ1MjQ5MH0.piNfik7QiKCTbk9D9lAwF8WNnNznKAB-KMAEj5fwdm0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
