export const getCurrentDate = () => {
  const date = new Date();
  const currentMonth =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  return `${date.getDate()}.${currentMonth}.${date.getFullYear()}`;
};

export const getColor = (color, index) => {
  let newColor;

  for (let i = 0; i < color.length; i += 1) {
    if (index < color.length) {
      newColor = color[index];
    }
    if (index >= color.length) {
      newColor = color[index - color.length];
    }
  }

  return newColor;
};

export const getIndex = (day, arrayDate) => {
  if (getCurrentDate() === day && arrayDate.includes(getCurrentDate())) {
    const index = arrayDate.reduce((acc, date, idx) => {
      if (date === getCurrentDate()) {
        acc = idx;
      }
      return acc;
    }, '');
    return index;
  }
};
