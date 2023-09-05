import sortUser from '../sortLevel';

const user = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

test('sortUser', () => {
  const res = sortUser(user);
  expect(res[0]).toEqual({ name: 'маг', health: 100 });
});
