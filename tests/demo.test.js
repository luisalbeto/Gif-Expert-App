test('Esta Prueba no debe de fallar', () => {

    if( 1 === 0) {
        throw new Error('No se puede dividir entre cero')
    }

})