import getStatusPlayer from "../status";

test('getStatusHealthy', () => {
  let user = {name: 'Bob', health: 90};
  const res = getStatusPlayer(user);
  expect(res).toBe('healthy');
});

test('getStatusWounded', () => {
  let user = {name: 'Alex', health: 50};
  const res = getStatusPlayer(user);
  expect(res).toBe('wounded');
});

test('getStatusCritical', () => {
  let user = {name: 'Sara', health: 14};
  const res = getStatusPlayer(user);
  expect(res).toBe('critical');
});
