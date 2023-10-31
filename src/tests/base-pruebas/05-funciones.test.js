import { getUser,getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('pruebas en 05-funciones', () => {
    test('getuser  debe de retornar un objeto', () => {
        const testuser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        
        const user = getUser();

        expect( testuser ) .toEqual ( user);
    });

    test('getUserioActivo debe de retornar un objeto', () => {
        const name = 'Fernando';

        const user = getUsuarioActivo( name );

        expect ( user ). toStrictEqual({
            uid: 'ABC567',
            username: name
        });

    });

});