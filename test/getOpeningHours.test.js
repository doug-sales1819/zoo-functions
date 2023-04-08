const { getOpeningHours, fix12 } = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Passado os argumentos "day" e "dataHour" deve retornar uma string com a informação se o zoológico está aberto ou fechado no determinado dia e horário)', () => {
    const OPEN = 'The zoo is open';
    const CLOSED = 'The zoo is closed';

    const daysAndHors = [
      ['Friday', '07:20-PM', OPEN],
      ['Wednesday', '5:00-PM', OPEN],
      ['Wednesday', '11:00-PM', CLOSED],
      ['Monday', '08:00-AM', CLOSED],
      ['Monday', '12:00-AM', CLOSED],
      ['Sunday', '09:30-PM', CLOSED],
      ['Sunday', '04:30-PM', OPEN],
      ['Saturday', '10:30-AM', OPEN],
      ['Thursday', '06:00-AM', CLOSED],
      ['Thursday', '04:00-PM', OPEN],
    ];
    daysAndHors.forEach(([day, dataHour, output]) => {
      expect(getOpeningHours(day, dataHour)).toBe(output);
    });
  });

  it('Se não passado nenhum argumento, deve retornar um objeto com os horários de funcionamento do zoológico', () => {
    const expectedObject = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toStrictEqual(expectedObject);
  });

  it('Deve lançar um erro se uma hora não numérica for passada', () => {
    expect(() => getOpeningHours('Monday', '10')).toThrow(Error('The minutes should represent a number'));
    expect(() => getOpeningHours('Monday', '00')).toThrow(Error('The minutes should represent a number'));
  });

  it('Deve lançar um erro se uma hora inválida for passada', () => {
    expect(() => getOpeningHours('Monday', '13:00-PM')).toThrow(Error('The hour must be between 0 and 12'));
    expect(() => getOpeningHours('Monday', '15:00-PM')).toThrow(Error('The hour must be between 0 and 12'));
  });

  it('Deve lançar um erro se um minuto inválido for passado', () => {
    expect(() => getOpeningHours('Wednesday', '09:70-AM')).toThrow(Error('The minutes must be between 0 and 59'));
  });

  it('Deve lançar um erro se um dia inválido for passado', () => {
    expect(() => getOpeningHours('Funday', '12:60-PM')).toThrow(Error('The day must be valid. Example: Monday'));
    expect(() => getOpeningHours('Segunda-feira', '09:70-AM')).toThrow(Error('The day must be valid. Example: Monday'));
  });

  it('Deve lançar um erro se uma abreviatura inválida for passada', () => {
    expect(() => getOpeningHours('Tuesday', '12:60-XL')).toThrow(Error('The abbreviation must be \'AM\' or \'PM\''));
  });
});

describe('Testes da função fix12', () => {
  it('Deve fixar 12 a 0 para hora, abrir e fechar', () => {
    const result = fix12(12, 12, 12);
    expect(result.h).toBe(0);
    expect(result.o).toBe(0);
    expect(result.c).toBe(0);
  });

  it('Não deve modificar valores diferentes de 12 para hora, abrir e fechar', () => {
    const result = fix12(9, 8, 16);
    expect(result.h).toBe(9);
    expect(result.o).toBe(8);
    expect(result.c).toBe(16);
  });
});
