//RECIBO DE PRIMERAS LOS INPUT SIN SUS VALORES
const form = document.getElementById("formRegistro");
const inputId = document.getElementById("id_usuario");
const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const inputGenero = document.getElementById("genero");
const logId = document.getElementById("logId");
const logN = document.getElementById("logNombre");
const logA = document.getElementById("logApellido");
const logG = document.getElementById("logGenero");
const boton = document.getElementById("btn-registrar");
const listaUsuarios = document.getElementById("lista-usuarios")

form.addEventListener("submit", function(e) 
{
    e.preventDefault();
    procesarDatos();
});

function procesarDatos()
{
    let id = inputId.value;
    let nombre = inputNombre.value;
    let apellido = inputApellido.value;
    let genero = inputGenero.value;
    let datos = [id, nombre, apellido, genero];
    console.log(`datos ${datos}`);
    if(validarIngreso(datos))
        mostrarDatos(datos);
    else
        console.log("datos incorrectos");
}

function validarIngreso(datos)
{
    //let boolId, boolN, boolA, boolG;
    //validando que exista un id
    // if(datos[0] == "")
    // {
    //     boolId = false;
    //     logId.innerHTML = "El id es obligatorio";
    //     logId.style.color = "red";
    //     logId.style.fontSize = "15px";
    // }
    // else
    // {
    //     logId.innerHTML = "";
    //     boolId = true;
    // }

    // //validando que exista un nombre
    // if(datos[1] == "")
    // {
    //     boolN = false;
    //     logNombre.innerHTML = "El nombre es obligatorio";
    //     logNombre.style.color = "red";
    //     logNombre.style.fontSize = "15px";
    // }
    // else
    // {
    //     logNombre.innerHTML = "";
    //     boolN = true;
    // }
    
    // //validando que exista un apellido
    // if(datos[2] == "")
    // {
    //     boolA = false;
    //     logApellido.innerHTML = "El apellido es obligatorio";
    //     logApellido.style.color = "red";
    //     logApellido.style.fontSize = "15px";
    // }
    // else
    // {
    //     logApellido.innerHTML = "";
    //     boolA = true;
    // }

    // if(datos[3] == "")
    // {
    //     boolG = false;
    //     logGenero.innerHTML = "El género es obligatorio";
    //     logGenero.style.color = "red";
    //     logGenero.style.fontSize = "15px";
    // }
    // else
    // {
    //     logGenero.innerHTML = "";
    //     boolG = true;
    // }

    let verificarId = verificarArreglo(datos[0], logId, "id");
    let verificarNombre = verificarArreglo(datos[1], logN, "nombre");
    let verificarApellido = verificarArreglo(datos[2], logA, "apellido");
    let verificarGenero = verificarArreglo(datos[3], logG, "genero");

    //return ((boolId && boolN) && (boolA && boolG));
    return ((verificarId && verificarNombre) && (verificarApellido && verificarGenero));
}

function verificarArreglo(dato, log, tipo)
{
    if(dato == "")
    {
        boolG = false;
        log.innerHTML = `El ${tipo} es obligatorio`;
        log.style.color = "red";
        log.style.fontSize = "15px";
        return false;
    }
    else
    {
        log.innerHTML = "";
        return true;
    }
    return 0;
}

function mostrarDatos(datos)
{
    let genero = "";
    if(datos[3] == "M")
        genero = "Masculino";
    else if(datos[3] == "F")
        genero = "Femenino";
    else
        genero = "Otro";
    listaUsuarios.innerHTML += `<br>Registro exitoso: ${datos[1]} ${datos[2]}, (ID: ${datos[0]}) - Género: ${genero}<br>`;
    //en lista
    // listaUsuarios.innerHTML += `<br> Datos Ingresados:`;
    // listaUsuarios.innerHTML += `<br> Id: ${datos[0]}`;
    // listaUsuarios.innerHTML += `<br> Nombre: ${datos[1]}`;
    // listaUsuarios.innerHTML += `<br> Apellido: ${datos[2]}`;
    // listaUsuarios.innerHTML += `<br> Genero: ${genero} <br>`;
    //listaUsuarios.innerHTML += `<br><br> ${datos}`;
    console.log(datos);
}