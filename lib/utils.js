
export function getNameInitials(name) {
  const nameArray = name.split(' ');
  return nameArray.length > 1 ? `${nameArray[0].charAt(0)} ${nameArray[1].charAt(0)}`:`${nameArray[0].charAt(0)}`;
}