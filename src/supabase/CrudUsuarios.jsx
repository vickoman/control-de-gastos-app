import Swal from 'sweetalert2';
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
        // alert(error.error_description || error.message + "MostrarUsuarios");
    }
}

export async function EditarTemaMonedaUser(p) {
    try {
        const {error } = await supabase.from("usuarios").update(p).eq('id', p.id);
        Swal.fire({
            icon: 'success',
            title: "Las preferencias se han guardado!",
            showConfirmButton: false,
            timer: 1000
        })
    } catch(err) {
        // alert(error.error_description || error.message + "EditarTemaMonedaUser");
    }
}