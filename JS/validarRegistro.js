// Script que valida si las contraseñas ingresadas en el registro son iguales.

function validarRegistro() {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('password2').value;
    
    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return false; // Evita que se envíe el formulario si las contraseñas no coinciden
    } else {
        alert("Registro Correcto");
        return true; // Envía el formulario si las contraseñas coinciden
    }
}
