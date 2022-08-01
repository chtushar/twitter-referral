import { supabaseClient as supabase } from '@supabase/auth-helpers-nextjs';

export const API = {
  auth: {
    signInWithTwitter: async () => {
      const { user, session, error } = await supabase.auth.signIn(
        {
          provider: 'twitter',
        },
        {
          redirectTo: '/profile',
        },
      );

      return { user, session, error };
    },
  },
};
