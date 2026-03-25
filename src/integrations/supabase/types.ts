/**
 * Supabase Database type definitions.
 *
 * This is a placeholder that will be replaced with auto-generated types
 * once tables are created. To regenerate, run:
 *   npx supabase gen types typescript --project-id <project-id> > src/integrations/supabase/types.ts
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: Record<string, never>;
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}
