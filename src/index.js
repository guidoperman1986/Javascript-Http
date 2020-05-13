/* import { obtenerChiste } from "./js/http-provider"; */
//obtenerChiste().then(console.log);

//ejemplo
//fetch(jokeUrl).then(resp=> resp.json())
//              .then(({id,value})=>console.log(id,value))

import * as CRUD from "./js/crud-provider";

//Referencias
const body = document.body;
let btnArchivos,btnChistes,btnUsuarios,btnCRUD,btnNASA;
let parentActual;

/* import { obtenerUsuarios } from "./js/http-provider"; */

import { initChistes } from './js/chistes-page';
import { initUsuarios } from "./js/usuarios-page";
import { initArchivos } from "./js/archivos-page";

/* CRUD.getUsuario(1).then(console.log);
CRUD.crearUsuario({
    name: 'Fernando',
    job: 'Pato'
}).then(console.log);

CRUD.actualizarUsuario(1,{
    name: 'Fernando',
    job: 'Pato'
}).then(console.log);

CRUD.borrarUsuario(1).then(console.log); */



const navbar = ()=>{
    const html = `
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">        
            <a class="navbar-brand" href="#">HTTP</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav" style="cursor:pointer">
                    <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" id="chistes" >Chistes</a>
                    <a class="nav-item nav-link" id="usuarios">Usuarios</a>                    
                    <a class="nav-item nav-link" id="archivos">Archivos</a>                    
                    <a class="nav-item nav-link" id="crud">CRUD</a>                    
                    <a class="nav-item nav-link" id="nasa">NASA</a>                    
                  </div>º
                </div>
            </nav>
        </div>
    `;    
    
    const div = document.createElement('div');
    div.innerHTML = html;
    body.append(div);

    btnChistes  = document.querySelector('#chistes');
    btnUsuarios = document.querySelector('#usuarios');
    btnArchivos = document.querySelector('#archivos');
    btnCRUD     = document.querySelector('#crud');
    btnNASA     = document.querySelector('#nasa');
}



const eventos = () =>{
    btnChistes.addEventListener('click',(event)=>{
        let div = document.querySelector('#chistesDiv');        
        if (parentActual != undefined){
            parentActual.style.display = 'none';
        }
        let parent = div.parentNode;
        parent.style.display = 'inline';
        parentActual = parent;
    });

    btnUsuarios.addEventListener('click',(event)=>{
        let div = document.querySelector('#usuariosDiv');
        if (parentActual != undefined){
            parentActual.style.display = 'none';
        }
        let parent = div.parentNode;
        parent.style.display = 'inline';
        parentActual = parent;
    });

    btnArchivos.addEventListener('click',(event)=>{        
        let div = document.querySelector('#archivosDiv');
        if (parentActual != undefined){
            parentActual.style.display = 'none';
        }
        let parent = div.parentNode;
        parent.style.display = 'inline';
        parentActual = parent;
    });
}

navbar();
initChistes();
initArchivos();
initUsuarios();
eventos();