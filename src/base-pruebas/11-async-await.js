
export const getImagen = async() => {
    try {
        const apiKey = '';//nzMu7Q0Um3drKtfjtHZUMwMqdGaA9IHm
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 
        const { url } = data.images.original;
        return url;
    } catch (error) {
        // manejo del error
        //console.error(error)
        return 'No se encontro la imagen'
    }
};

