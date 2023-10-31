import { string } from "prop-types";
import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr',() => {
    test('Esto debe retornar un string y un numero', () => {

        const [letters, numbers] =  retornaArreglo();

        expect (letters). toEqual ( expect.any(String) );
        expect (numbers). toBe ( 123 );

        expect (typeof letters).toBe( 'string' );

    });
});