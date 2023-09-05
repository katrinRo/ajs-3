export default function getStatusPlayer(user) {
  let status = '';
  if (user.health < 15) {
    status = 'critical';
  } if (user.health > 50) {
    status = 'healthy';
  } if (user.health <= 50 && user.health >= 15) {
    status = 'wounded';
  }
  return status;
}
