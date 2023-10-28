import { create } from "zustand";
import { supabase } from "../index";
export const useAuthStore = create((set) => ({
    isAuth: false,

    signInWithGoogle: async() => {
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
            });

            if (error) throw new Error("Ha ocurrido un error en la authenticacion")

            set({ isAuth: true })
            return data
        }catch(err) {}
    },

    signOut: async() => {
        const { error } = await supabase.auth.signOut()
        if (error) throw new Error("Ha ocurrido un error en el cierre de session")
        set({ isAuth: false })
    }
}));