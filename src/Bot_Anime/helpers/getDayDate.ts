const getDayDate = async (date: Date) => {
  const finalDay = date.toLocaleString('en-us', {weekday: 'long'});
  return finalDay;
};

export default getDayDate;
