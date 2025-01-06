import SummaryComponent from "../components/SummaryComponent";
import { RiProgress5Line } from "react-icons/ri";
import { MdOutlineTimer } from "react-icons/md";
import { MdCheckCircleOutline } from "react-icons/md";

function Summary() {
  return (
    <div style={{ backgroundColor: "#D5CBCB" }}>
      <div className="d-md-flex flex-wrap justify-content-md-center p-2 gap-md-4 d-sm-grid summary-grid-layout ">
        <SummaryComponent name="Today" noOfTask={24} color="#4487E6" accentColor="#000000" logo={<RiProgress5Line />} />
        <SummaryComponent name="All" noOfTask={24} color="#59C6E1" accentColor="#00191f" logo={<MdOutlineTimer />} />
        <SummaryComponent
          name="Completed"
          noOfTask={24}
          color="#FFB300"
          accentColor="#3a2901"
          logo={<MdCheckCircleOutline />}
        />
      </div>
    </div>
  );
}

export default Summary;
