import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";

describe('Pruebas en el componente 08-imp-exp',() => {
    test('getHeroeByID debe de retornar  unheroe por ID',() => {

        const id = 1;
        const hero = getHeroeById( id );
        console.log( hero );

        expect( hero ). toEqual ( { id: 1, name: 'Batman', owner: 'DC' });
    });

    test('getHeroeByID debe de retornar undefined si no existe ID ',() => {

        const id = 6;
        const hero = getHeroeById( id );
        console.log( hero );

        // expect(typeof hero ). toBe ( 'undefined' );
        expect ( hero ).toBeFalsy();
    });

    test('getHeroesByOwner debe retornar un areglo con heroes de DC',() => {
        const heroes = getHeroesByOwner('DC');
        console.log(heroes);
        expect( heroes.length ).toBe ( 3 );
        expect( heroes ).toEqual (
            [
                { id: 1, name: 'Batman', owner: 'DC' },
                { id: 3, name: 'Superman', owner: 'DC' },
                { id: 4, name: 'Flash', owner: 'DC' }
              ]
        )
    
    });

    test('getHeroesByOwner debe retornar un areglo con heroes de Marvel',() => {
        const heroes = getHeroesByOwner('Marvel');
        console.log(heroes);
        expect( heroes.length ).toBe ( 2 );
        expect( heroes ).toEqual(
            [
                { id: 2, name: 'Spiderman', owner: 'Marvel' },
                { id: 5, name: 'Wolverine', owner: 'Marvel' }
              ]
        );
    });

});