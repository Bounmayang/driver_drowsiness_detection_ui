import Swal from 'sweetalert2'
export const successSwal = (item) => {
    Swal.fire({
        icon: 'success',
        title: item,
        showConfirmButton: false,
        timer: 1800
    })
}
export const errorSwal = (err) => {
    Swal.fire({
        icon: 'error',
        text: err,
        showConfirmButton: false,
        timer: 3000
    })
}