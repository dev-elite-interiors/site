import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://hkuhblliovbqrfbzfspw.supabase.co";

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "sb_publishable_zv9uFEXlHqTq3sxIYSxEog_AAZiXBjr";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
