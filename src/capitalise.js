const capitalise = (text) => {
  if (text === "") return "";
  const firstLetter = text[0].toUpperCase();
  const restLetters = text.slice(1);
  const newText = firstLetter + restLetters;
  return newText;
};
export default capitalise;
