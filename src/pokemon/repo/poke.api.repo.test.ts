import { PokemonApiRepo } from './poke.api.repo';

describe('Given the api-services', () => {
  describe('When it will be executed ', () => {
    // Mock global fetch
    global.fetch = jest.fn().mockResolvedValue({
      json: () =>
        Promise.resolve({
          results: [{ test: 'Test 1' }, { test: 'Test 1' }],
        }),
    });

    const mockURL = '';
    let repo: PokemonApiRepo;
    beforeEach(() => {
      repo = new PokemonApiRepo();
    });
    test('Then it should be created', () => {
      expect(repo).toBeDefined();
    });
    test('Its functions should be used', () => {
      repo.getAllPokemons(mockURL);
      expect(global.fetch).toHaveBeenCalled();
      repo.getPokemonDetails(mockURL);
      expect(global.fetch).toHaveBeenCalled();
    });
  });
});
