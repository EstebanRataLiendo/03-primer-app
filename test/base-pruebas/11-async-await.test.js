import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await', () => {
    test('getImagen debe retorunar un url del gif ', async() => {
        const url = await getImagen();
        console.log(url)
        
        expect(typeof url).toBe('string')
    })
    
})



// export const getImagen = async() => {
//     try {
//         const apiKey = 'C1khQe3Z7R1W2lfTO9myKeuShdqFYSGC';
//         const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
//         const { data } = await resp.json(); 
//         const { url } = data.images.original;
//         return url;
//     } catch (error) {
//         // manejo del error
//         console.error(error)
//     }
// };

