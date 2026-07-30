
export const getInitials = (name: string) => {
  const splittedName = name.split(" ");
  return `${splittedName[0].split("")[0]}${splittedName[1].split("")[0]}`;
};