import Character from '../app';

test('Урон', () => {
  const example = new Character('Peter', 'Undead');
  example.damage(10);
  expect(example.health).toBe(94);
});

test('Нулевой Ущерб', () => {
  const example = new Character('Peter', 'Undead');
  example.damage(0);
  expect(example.health).toBe(100);
});

test('Смерть без отрицательного здоровья', () => {
  const example = new Character('Peter', 'Undead');
  example.damage(200);
  expect(example.health).toBe(0);
});
