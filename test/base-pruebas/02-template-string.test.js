import{getSaludo} from '../../src/base-pruebas/02-template-string'



describe('Pruebas en 02-template-string', () => {
    test('getSaludo debe de retornar "Hola Fernando"', () => {
        const name   = 'Fernando';
        const message = getSaludo (name);
        expect( message ).toBe(`Hola ${ name }`)
    });
})
// const apellido = 'Herrera';


// // const nombreCompleto = nombre + ' ' + apellido;
// const nombreCompleto = `${ nombre } ${ apellido }`;

// console.log( nombreCompleto );


// function getSaludo(nombre) {
//     return 'Hola ' + nombre;
// }

// console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );