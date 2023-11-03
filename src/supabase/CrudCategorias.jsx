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
            .eq('id', p.id);
        if (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Error al eliminar ${p.descipcion}`,
                timer: 1000
            });
        }
    } catch (error) {
        alert(error.error_description || error.message + 'EliminarCategoria');
    }
}

export async function EditarCategoria(p) {
    try {
        const {icono, descripcion, color, user_id, id } = p;
        const { error } = await supabase
            .from('categorias')
            .update({
                icono,
                descripcion,
                color
            })
            .eq('user_id', user_id)
            .eq('id', id);
        if (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${error}}`,
                timer: 2000
            });
        }
    } catch(error) {
        alert(error.error_description || error.message + "EditarCategoria");
    }
}

export async function DeleteCategoriasAll(p) {
    try {
        const { error } = await supabase
            .from('categorias')
            .delete()
            .eq('user_id', p.user_id)
        if (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Error al eliminar ${p.descipcion}`,
                timer: 1000
            });
        }
        Swal.fire({
            icon: 'success',
            title: 'Datos Reseteados',
            showConfirmButton: false,
            timer: 1000
        });
    } catch (error) {
        alert(error.error_description || error.message + 'DeleteCategoriasAll');
    }
}
