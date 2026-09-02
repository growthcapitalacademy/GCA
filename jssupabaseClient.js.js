import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Remplacez par vos propres clés Supabase (disponibles dans votre tableau de bord Supabase > Project Settings > API)
const SUPABASE_URL = 'VOTRE_URL_SUPABASE_ICI';
const SUPABASE_ANON_KEY = 'VOTRE_CLE_ANON_SUPABASE_ICI';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);