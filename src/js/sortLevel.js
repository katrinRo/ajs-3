export default function sortUser(user) {
  return user.sort((a, b) => b.health - a.health);
}
