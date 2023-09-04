import sortUser from "../sortLevel";

let user = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
];

test('sortUser', () => {
  let res = sortUser(user);
  expect(res[0]).toEqual({ name: 'маг', health: 100 });
})
