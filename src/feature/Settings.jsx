import DateDisplay from "../components/DateDisplay";
import SettingBtnGroup from "../components/SettingBtnGroup";

function Settings({ sortedDates }) {
  return (
    <div style={{ backgroundColor: "#958B8B" }}>
      <div className="d-flex justify-content-between  mx-auto p-3 " style={{ maxWidth: "85rem" }}>
        <DateDisplay sortedDates={sortedDates} />
        <SettingBtnGroup />
      </div>
    </div>
  );
}

export default Settings;
//className="d-md-flex justify-content-between  mx-auto p-3 d-sm-grid"
