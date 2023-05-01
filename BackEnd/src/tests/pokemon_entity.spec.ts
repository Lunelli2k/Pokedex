import { Pokemon, pokemonProps } from "../entities/pokemon_entity";

describe('Pokemon register', () => {

  test('constructor', () => {

    let newPokemon: pokemonProps = {
      nationalDex: 1,
      nome: 'Bulbassaur',
      gen: 1,
      tipoPrimario: 'Grass',
      sprite: 'https://static.wikia.nocookie.net/pokesprites/images/4/41/Bulbasaur_BW.gif/revision/latest?cb=20140212121809'
    };

    let bulbassaur = new Pokemon(newPokemon);

    expect(bulbassaur.props).toStrictEqual({
      ...newPokemon,  tipoSecundario: '', shinySprite: ''
    });
  });
});