export const formatValue = (value: string, mask: string) => {
  let result = "";
  let index = 0;

  for (let i = 0; i < mask.length && index < value.length; i++) {
    if (mask[i] === "#") {
      result += value[index];
      index++;
    } else {
      result += mask[i];
    }
  }
  return result;
};
