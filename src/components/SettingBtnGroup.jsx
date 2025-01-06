import SettingButton from "./SettingButton";
import { FaCalendarDay } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { FaCog } from "react-icons/fa";

function SettingBtnGroup() {
  return (
    <div className=" d-flex gap-3 flex-wrap xs-setting-btn-group">
      <SettingButton>
        <FaCalendarDay />
        This Week
      </SettingButton>
      <SettingButton>
        <FaFilter />
        Filter
      </SettingButton>
      <SettingButton>
        <FaCog />
        Settings
      </SettingButton>
    </div>
  );
}

export default SettingBtnGroup;
