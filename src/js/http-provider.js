const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=1';

//Cloudinary
const cloudPreset = 'sxrg0vpn';
const cloudUrl    = 'https://api.cloudinary.com/v1_1/dxbknuflh/upload';


const obtenerChiste = async() => {    
    try{
        const resp = await fetch(jokeUrl);
        if (!resp.ok) throw 'No se puedo realizar la peticion';

        const {icon_url, id, value} = await resp.json();
    
        return {icon_url, id, value};
    }catch(err){
        throw err;
    }
}

//ArchivoSubir
const subirImagen = async(archivosSubir) => {
    const formData = new FormData();
    formData.append('upload_preset',cloudPreset);
    formData.append('file',archivosSubir);

    try{
        const resp = await fetch(cloudUrl,{
            method:'POST',
            body: formData
        });

        if (resp.ok){
            const cloudRespuesta = await resp.json();
            return cloudRespuesta.secure_url;
        }else{
            throw await resp.json();
        }

    }catch(error){
        throw error;
    }

}

const obtenerUsuarios = async() =>{
    const resp = await fetch(urlUsuarios);
    const {data:usuarios} = await(resp.json());

    return usuarios;
}

export {
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
}