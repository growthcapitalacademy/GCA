import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Remplacez par vos propres clés Supabase (disponibles dans votre tableau de bord Supabase > Project Settings > API)
const SUPABASE_URL = 'https://btgvcexchurmogttwnhx.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_4AfV6LA-36Be7d98RgTYmw_NPpp66lZ';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
