import {subirImagen} from './http-provider';

const body = document.body;
let inputFile,imgFoto;

const crearInputFile = ()=>{
    const html = `
        <div id="archivosDiv" class="mx-5 mt-5">
            <h1>Images Upload (api.cloudinary.com)</h1>
            <hr>

            <label>Selecciona una fotografia</h1>
            <br><br>
            <input type='file' accept="image/png, image/jpeg">

            <br>
            <img id="foto" src="" class="img-thumbnail">
        </div>
    `;

    const div = document.createElement('div');
    div.style.display = 'none';
    div.innerHTML = html;
    body.append(div);

    inputFile = document.querySelector('input');
    imgFoto   = document.querySelector('#foto');
}

const eventos = () =>{
    inputFile.addEventListener('change', (event)=>{
        const file = event.target.files[0];
        subirImagen(file).then(url=>imgFoto.src = url);

    });
};



export const initArchivos = () =>{
    crearInputFile();
    eventos();
}