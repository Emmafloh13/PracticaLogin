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
        createMensaje('Verifica tus campos', 'danger');
        return;
    }

    if(localStorage.getItem('usuario')){
        let objeto = JSON.parse(localStorage.getItem('usuario'));

        if(usuaruioVal == objeto.user && passwordVal == objeto.pass){
            createMensaje('Loging Correcto', 'success');
            localStorage.setItem('sesion', 'sctiva')
            setTimeout(function(){
                window.open('./inicio.html', '_self');
            },2000);
        }else{
           createMensaje('Usuario o Contraseña incorrecta', 'danger');
        }
    } else {
        createMensaje('No se encontro registro', 'danger');

    }
    
     


    
    
}

