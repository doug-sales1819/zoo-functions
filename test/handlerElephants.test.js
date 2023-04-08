const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('passado nenhum parâmetro deve retornar undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('passado o argumento count deve retornar a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toEqual(4);
  });

  it('passado o argumento name deve retornar um array com os nomes dos elefantes', () => {
    const names = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(handlerElephants('names')).toStrictEqual(names);
  });

  it('passado o argumento averageAge deve retornar a média da idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });

  it('passado um argumento do tipo number de retornar a message "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants(5)).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('passado um argumento availability deve retornar  um array com a relação de dias em que é possível visitar os elefantes', () => {
    const availability = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(handlerElephants('availability')).toStrictEqual(availability);
  });

  it('passado um argumento popularity deve retornar a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toEqual(5);
    expect(handlerElephants('popularity')).not.toEqual(10);
    expect(handlerElephants('popularity')).not.toEqual(7);
  });

  it('passado um argumento location deve retornar a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
    expect(handlerElephants('location')).not.toBe('W');
    expect(handlerElephants('location')).not.toBe('NS');
  });

  it('passado um argumento que não existe deve retorna null', () => {
    expect(handlerElephants('locatio')).toBe(null);
    expect(handlerElephants('xablau')).toBe(null);
    expect(handlerElephants('teste')).toBe(null);
    expect(handlerElephants('perneta')).toBe(null);
  });
});
