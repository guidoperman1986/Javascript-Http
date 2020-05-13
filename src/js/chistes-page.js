import { obtenerChiste } from "./http-provider";

const body = document.body;

let btnOtroChiste, olList;
let number=1;

const crearChistesHtml = () =>{
    const html = `
        <div id="chistesDiv" class="mx-5">
            <h1 class="mt-5">Chistes de Chuk Norris (api.chucknorris.io)</h1>
            <hr>

            <button id="btnOtro" class="btn btn-primary">Otro chiste</button>

            <ol class="mt-2 list-group">
            </ol>
        </div>
    `;

    const divChistes = document.createElement('div');
    divChistes.style.display = 'none';
    divChistes.innerHTML = html;
    body.append(divChistes);
}

const eventos = () => {
        btnOtroChiste = document.querySelector('#btnOtro');        
        olList = document.querySelector('ol');
    
        btnOtroChiste.addEventListener('click', async ()=>{
            btnOtroChiste.disabled = true;
            dibujarChiste(await obtenerChiste());
            btnOtroChiste.disabled = false;
        });
}

const dibujarChiste = (chiste) =>{
    const olItem = document.createElement('li');
    olItem.innerHTML = `${number++} <b>${chiste.id}:</b> ${chiste.value}`;
    olItem.classList.add('list-group-item');
    olItem.classList.add('mb-1');
    olList.append(olItem);
}

export const initChistes = () =>{
    crearChistesHtml();
    eventos();
}