function formatDate(dateString) {
  const [day, month, year] = dateString.split("-");

  const date = new Date(year, month - 1, day);

  const options = { year: "numeric", month: "short", day: "2-digit" };
  return date.toLocaleDateString("en-US", options);
}

export default formatDate;
