import Swal from 'sweetalert2';
import { supabase } from '../index';

export async function InsertarCategoria(p) {
    try {
        // Logic Here
        const { data, error } = await supabase
            .from('categorias')
            .insert(p)
            .select();
        if (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Ya existe un registro con ${p.descipcion}`,
                footer: '<a href="/">Agregue nueva descripcion</a>',
            });
        }
        if (data) {
            Swal.fire({
                icon: 'success',
                title: 'Datos Guardados!',
                showConfirmButton: false,
                timer: 1000,
            });
        }
    } catch (err) {
        alert(error.error_description || error.message + 'InsertarCategoria');
    }
}

export async function MostratCategoria(p) {
    try {
        const { data } = await supabase
            .from('categorias')
            .select()
            .eq('user_id', p.user_id)
            .eq('tipo', p.tipo)
            .order('id', { ascending: false });
        return data;
    } catch (error) {
        console.error(error.error_description || error.message + 'MostratCategoria');
    }
}
// Eliminar Cagegorias
export async function EliminarCategoria(p) {
    try {
        const { error } = await supabase
            .from('categorias')
            .delete()
            .eq('user_id', p.user_id)
            .qa('id', p.id);
        if (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Error al eliminar ${p.descipcion}`,
                timer: 1000
            });
        }
    } catch (err) {
        alert(error.error_description || error.message + 'EliminarCategoria');
    }
}

export async function EditarCategoria(p) {
    try {
        const { error } = await supabase
            .from('cagegorias')
            .update(p)
            .eq('user_id', p.user_id)
            .eq('id', p.id)
        if (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Error al eliminar ${p.descipcion}`,
                timer: 1000
            });
        }
    } catch(err) {
        alert(error.error_description || error.message + "EditarCategoria");
    }
}
