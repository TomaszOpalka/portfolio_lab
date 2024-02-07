
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nzmsyspqwhgzmledxfqf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56bXN5c3Bxd2hnem1sZWR4ZnFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1NTE5OTAsImV4cCI6MjAyMjEyNzk5MH0.eQ71peFTK0UKNtn0of5d0FUDnNSeJO65rP-7fK8caj4'
export const supabase = createClient(supabaseUrl, supabaseKey)