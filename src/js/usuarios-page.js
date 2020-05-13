import { obtenerUsuarios } from "./http-provider";



const body  = document.body;
let tbody;

const crearHtml = () => {
    
    const html = `

    <div id="usuariosDiv" class="mx-5">
        <h1 class="mt-5">Usuarios (reqres.in)</h1>

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">email</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Avatar</th>
                </tr>
            </thead>
            <tbody id='cuerpo'>
            </tbody>
        </table>
    </div>
    `;

    const div = document.createElement('div');
    div.style.display = 'none';
    div.innerHTML = html;
    body.appendChild( div );

    // Crear una referencia al TBODY
    // ya que los TRs van dentro del tbody
    
    // Crear una variable para mantener la referencia?
    tbody = document.querySelector('tbody');
}


// La función crearFilaUsuario debería de recibir un UNICO usuario
// con la siguiente estructura
    // {
    //     "id": 7,
    //     "email": "michael.lawson@reqres.in",
    //     "first_name": "Michael",
    //     "last_name": "Lawson",
    //     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
    // }
const crearFilaUsuario = ( usuario ) => {

    // En la tabla deben de colocar un correlativo empezando en 1
    // También deben de colocar el avatar

    const html = `
        <td scope="col"> ${usuario.id}. </td>
        <td scope="col"> ${usuario.email} </td>
        <td scope="col"> ${usuario.first_name} ${usuario.last_name} </td>
        <td scope="col">
            <img class="img-thumbnail" src="${usuario.avatar}">
        </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;

    // Añadir el table row (tr) dentro del TBody creado anteriormente
    tbody.append(tr);
}


export const initUsuarios = async() => {

    crearHtml();
    (await obtenerUsuarios()).forEach(crearFilaUsuario);

    // Obtener la lista de usuarios usando el servicio creado
    // Por cada usuario, llamar la función crearFila (for, forEach)
    // Colocar el init en el index.js, para que se ejecute la creación

}

