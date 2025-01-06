import SummaryComponent from "../components/SummaryComponent";
import { RiProgress5Line } from "react-icons/ri";
import { MdOutlineTimer } from "react-icons/md";
import { MdCheckCircleOutline } from "react-icons/md";
import { format } from "date-fns";

function Summary({ tasks }) {
  const today = format(new Date(), "dd-MM-yyyy");

  const taskStats = {
    total: tasks.length,
    completed: tasks.filter((task) => task.completed).length,
    today: tasks.filter((task) => task.date === today).length,
  };

  return (
    <div style={{ backgroundColor: "#D5CBCB" }}>
      <div className="d-md-flex flex-wrap justify-content-md-center p-2 gap-md-4 d-sm-grid summary-grid-layout ">
        <SummaryComponent
          name="Today"
          noOfTask={taskStats.today}
          color="#4487E6"
          accentColor="#000000"
          logo={<RiProgress5Line />}
        />
        <SummaryComponent
          name="All"
          noOfTask={taskStats.total}
          color="#59C6E1"
          accentColor="#00191f"
          logo={<MdOutlineTimer />}
        />
        <SummaryComponent
          name="Completed"
          noOfTask={taskStats.completed}
          color="#FFB300"
          accentColor="#3a2901"
          logo={<MdCheckCircleOutline />}
        />
      </div>
    </div>
  );
}

export default Summary;
