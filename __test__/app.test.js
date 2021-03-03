const suma = require('../suma');

test('Probar que la suma de 1 + 2 sea igual a 3', () => {
  const expected = 3;
  const resultado = suma(1, 2);
  expect(resultado).toBe(expected);  
});