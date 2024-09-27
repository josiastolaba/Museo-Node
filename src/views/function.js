const departamento = document.getElementById('departmentId');
const clave = document.getElementById('keyword');
const ubicacion = document.getElementById('location');
const formulari = document.getElementById('form');
const er = document.getElementById('erro');

form.addEventListener("submit", e => {
    let erro = '';
    let validacion = /^[a-zA-Z\s]+$/;

    let claveVacia = clave.value.trim() === "";
    let ubicacionVacia = ubicacion.value.trim() === "";
    let departamentoVacio = departamento.value === "";

    if (claveVacia && ubicacionVacia && departamentoVacio) {
        e.preventDefault();
        erro += "Debe ingresar al menos un valor en Clave, Ubicación o seleccionar un Departamento <br>";
    } else {

        if (!claveVacia && !validacion.test(clave.value.trim())) {
            e.preventDefault();
            erro += "Clave inválida, solo se permiten letras y espacios <br>";
        }

        if (!ubicacionVacia && !validacion.test(ubicacion.value.trim())) {
            e.preventDefault();
            erro += "Ubicación inválida, solo se permiten letras y espacios <br>";
        }
    }

    departamento.addEventListener("focus",()=>{
        er.innerHTML = ''
        clave.value=""
        ubicacion.value=""
    })
    clave.addEventListener("focus",()=>{
        er.innerHTML = ''
        clave.value=""
        ubicacion.value=""
    })

    ubicacion.addEventListener("focus",()=>{
        er.innerHTML = ''
        clave.value=""
        ubicacion.value=""
    })


    if (erro) {
        er.innerHTML = erro;
    } else {
        form.submit();
    }

    
});