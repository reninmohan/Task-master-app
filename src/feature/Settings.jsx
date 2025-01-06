import DateDisplay from "../components/DateDisplay";
import SettingBtnGroup from "../components/SettingBtnGroup";

function Settings({ sortedDates }) {
  return (
    <div style={{ backgroundColor: "#958B8B" }}>
      <div
        className="d-md-flex justify-content-md-between  mx-auto p-3 d-sm-grid justify-content-start gap-sm-2"
        style={{ maxWidth: "85rem" }}
      >
        <DateDisplay sortedDates={sortedDates} />
        <SettingBtnGroup />
      </div>
    </div>
  );
}

export default Settings;
//className="d-md-flex justify-content-between  mx-auto p-3 d-sm-grid"
