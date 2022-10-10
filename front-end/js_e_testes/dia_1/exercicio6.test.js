const  getPokemonDetails  = require('./getPokemonDetails');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokémon que não existe no banco de dados', () => {
    const expectedError = 'Não temos esse pokémon para você :(';

    expect(getPokemonDetails('pikachu',(error, message))).toBe(expectedError);
  });

  it('retorna um pokémon que existe no banco de dados', () => {
    // Escreva aqui seu código
  });
});