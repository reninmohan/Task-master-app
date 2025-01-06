function DateDisplay() {
  const year = 2024;
  const startDate = "Jan 01";
  const endDate = "Jan 07";
  return (
    <div className="d-flex align-items-center">
      <p className="fw-bold m-0" style={{ fontSize: "1.5rem" }}>
        {startDate} - {endDate} <span style={{ fontSize: "1rem" }}>{year}</span>
      </p>
    </div>
  );
}

export default DateDisplay;
