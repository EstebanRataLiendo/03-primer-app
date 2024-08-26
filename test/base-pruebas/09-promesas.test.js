import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas'

describe('Pruebas en 09-promesa', () => {
    test('getHeroeByIdAsync debe de retornar heroes', (done) =>{
        const id = 1;
        getHeroeByIdAsync(id)
        .then(hero =>{
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            })
            done();//para que de la respuesta cuando termine
        })
    });
    test('getHeroeByIdAsync debe de retornar error si heroe no existe', (done) =>{
        const id = 100;
        getHeroeByIdAsync(id)
        // .then(hero =>{
        //     expect(hero).toBeFalsy()
        //     done();//para que de la respuesta cuando termine
        // })
        .catch(error =>{
            expect(error).toBe(`No se pudo encontrar el héroe ${id}`)
            console.log(error)
            done();//para que de la respuesta cuando termine
        })
    });
})





// export const getHeroeByIdAsync = ( id ) => {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () =>  {
//             // Tarea
//             // importen el 
//             const p1 = getHeroeById( id );
//             if ( p1 ) {
//                 resolve( p1 );
//             } else {
//                 reject( 'No se pudo encontrar el héroe' );
//             }
//         }, 2000 )    
//     });
// }
