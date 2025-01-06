import formatDate from "../utils/formatDate";
function DateDisplay({ sortedDates }) {
  if (sortedDates.length === 0) {
    return <p></p>;
  }
  const dateLength = sortedDates.length;
  const formattedStartDate = formatDate(sortedDates[0]);
  const formattedEndDate = formatDate(sortedDates[dateLength - 1]);

  const [startDate] = formattedStartDate?.split(",") ?? [];
  const [endDate, year] = formattedEndDate?.split(",") ?? [];
  return (
    <div className="d-flex align-items-center">
      <p className="fw-bold m-0" style={{ fontSize: "1.5rem" }}>
        {startDate === endDate ? (
          <>
            {startDate} <span style={{ fontSize: "1rem" }}>{year}</span>
          </>
        ) : (
          <>
            {startDate} - {endDate} <span style={{ fontSize: "1rem" }}>{year}</span>
          </>
        )}
      </p>
    </div>
  );
}

export default DateDisplay;
