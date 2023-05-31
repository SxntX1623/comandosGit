let nombre, correo, mensaje;
let Formulario = document.getElementById('form')

Formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    LeerDatos()
    
})

function LeerDatos() {
    nombre = document.getElementById('nombre').value
    correo = document.getElementById('correo').value
    mensaje = document.getElementById('textarea').value
    ValidarData(nombre, correo, mensaje)
    GuardarLocalStorage(nombre, correo, mensaje)
}

function ValidarData(nombre, correo, mensaje) {
    if(nombre.length==0 || correo.length==0 || mensaje.length==0){

        Swal.fire({
            title: 'Error!!!',
            Text:'Do you want to continue',
            icon:'error',
            confirmButtonText:'Cool',
            iconColor:'purple'
        })
    }
}

function GuardarLocalStorage(nombre, correo, mensaje) {
    localStorage.setItem('NOMBRE',nombre)
    localStorage.setItem('CORREO',correo)
    localStorage.setItem('MENSAJE',mensaje)
    ListarData()
}

function ListarData() {
    let nombreUsu = localStorage.getItem('Nombre')
    let  correoUsu = localStorage.getItem('Correo')
    let  mensajeUsu = localStorage.getItem('Mensaje')
}
