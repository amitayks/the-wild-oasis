import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://tvgfuvybatpoonhnwnqy.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2Z2Z1dnliYXRwb29uaG53bnF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1NjE1MjksImV4cCI6MjA1MzEzNzUyOX0.G5ubgLmpSRfz55pfQ3l8BwI1UVAsXgzzNjYEo2NMtok";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
