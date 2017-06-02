const getMonthAndDate = (timestamp) => {
  const dateObject = new Date(timestamp * 1000);
  const month = dateObject.getMonth() + 1;
  const date = dateObject.getDate();
  return `${month}/${date}`;
};

export default getMonthAndDate;
