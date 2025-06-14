// js/supabase.js
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://ksuprieqofjkazsxqkjm.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzdXByaWVxb2Zqa2F6c3hxa2ptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5MTU4NjgsImV4cCI6MjA2NTQ5MTg2OH0.tUfluy9LK7GYiqUhODeCZIutWkB2Hn-9vaILnc26Q2U";

export const supabaseClient = createClient(supabaseUrl, supabaseKey);