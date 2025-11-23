import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zqdpoucipophkylksvya.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxZHBvdWNpcG9waGt5bGtzdnlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM3OTI1NDgsImV4cCI6MjA3OTM2ODU0OH0.SwgwgV_-Ju8CnRZ2q7fHJ-zecN6wzZCcwULlElERP8s'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)