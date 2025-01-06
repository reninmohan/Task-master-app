function SummaryComponent({ name, noOfTask, color, accentColor, logo }) {
  return (
    <div className="rounded-3 d-flex align-items-center" style={{ backgroundColor: color, width: "10rem", height: "3.5rem" }}>
      <div style={{ color: "white", fontSize: "1.8rem", width: "40%" }} className="position-relative  mb-1">
        <div
          className="position-absolute rounded-circle "
          style={{ backgroundColor: accentColor, left: "12px", bottom: "-5.6px", height: "2.5rem", width: "2.5rem", opacity: "0.1" }}
        ></div>
        <div className="d-flex justify-content-center align-items-center">{logo}</div>
      </div>
      <div className="d-flex flex-column" style={{ width: "60%" }}>
        <p className="m-0 fw-bolder">{name}</p>
        <p className="m-0 fw-medium " style={{ fontSize: "0.8rem", color: "#2d2222" }}>
          {noOfTask} Tasks
        </p>
      </div>
    </div>
  );
}

export default SummaryComponent;

//  left: "12px", top: "1px", height: "2.5rem", width: "2.5rem", opacity: "0.1"
