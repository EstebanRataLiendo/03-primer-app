
import {getHeroeById} from '../../src/base-pruebas/08-imp-exp';
import {getHeroesByOwner} from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes'


describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe de retornar heroes por ID', () =>{
        const id =1;
        const hero = getHeroeById(id);
        console.log(hero)
        expect( hero ).toEqual( {id: 1, name: 'Batman', owner: 'DC' 
});
    })
    test('getHeroeById debe de retornar undefined si no existe', () =>{
        const id =100;
        const hero = getHeroeById(id);
        console.log(hero)
        expect( hero ).toBeFalsy( );
    })
    test('getHeroesByOwner debe de retornar heroes por DC', () =>{
        const owner='DC'
        const hero = getHeroesByOwner(owner)
        console.log(hero)
        //expect( hero ).toHaveLength( 3 );
        expect(hero).toEqual(heroes.filter((heroe)=>heroe.owner=== owner))//permite coincidir el length en caso que se agregue algo en un futuro
    });
    test('getHeroesByOwner debe de retornar heroes por Marvel', () =>{
        const owner='Marvel'
        const hero = getHeroesByOwner(owner)
        const length =getHeroesByOwner(owner).length
        console.log(hero)
        console.log(length)
        expect( hero ).toHaveLength( length );
    });
});


//export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );


//export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );




