//Declarar varibles para vincular los objetos del formlario

const usuaruio = document.getElementById('user');
const password = document.getElementById('pass');
const formulario = document.getElementById('formlogin');

//generando eventos
formulario.addEventListener('submit', login);

//funciones a ejecutar
function login(e){
    e.preventDefault();
    
    let usuaruioVal = usuaruio.value;
    let passwordVal = password.value;

    if(usuaruioVal == '' || passwordVal == ''){
        return;
    }



    console.log('el valor para user es:' + usuaruioVal);
    console.log('el valor para pass e:' + passwordVal);

    
    
}

