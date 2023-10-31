import { supabase, ObtenerIdAuthSupabase } from '../index';

export const MostrarUsuarios =  async() => {
    const idAuthSupabase = await ObtenerIdAuthSupabase();
    try {
        const {data, error} = await supabase.from("usuarios").select().eq('id', idAuthSupabase);
        if (error) throw error;
        if(data){
            return data[0];
        }
    }catch(err) {
        alert(error.error_description || error.message + "MostrarUsuarios");
    }
}