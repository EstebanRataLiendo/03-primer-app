import { retornaArreglo, usState } from "../../src/base-pruebas/07-deses-arr";


describe('Pruebas en 07-deses-arr',()=>{
    test('retornaArreglo debe retornar un string y un number', ()=>{
        const [stringss, numberss] = retornaArreglo();
        expect(typeof stringss).toBe('string');
        expect(typeof numberss).toBe('number')
    });

    test('usState debe retornar un array', ()=>{

        const [stringss, functionss] = usState('Goku');
        expect(typeof stringss).toBe('string');
        expect(typeof functionss).toBe('function')

        expect(stringss).toEqual(expect.any(String));
    });
});




