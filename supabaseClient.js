import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hdxpoavxfhcurkisohnf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkeHBvYXZ4ZmhjdXJraXNvaG5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5OTMzOTksImV4cCI6MjA4OTU2OTM5OX0.fobnuuS6BDR2yUfZqJh9yYx8UVVKBfOTJlsTK-PHBtE'

export const supabase = createClient(supabaseUrl, supabaseKey)