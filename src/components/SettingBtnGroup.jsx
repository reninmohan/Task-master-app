import SettingButton from "./SettingButton";
import { FaCog } from "react-icons/fa";

function SettingBtnGroup() {
  return (
    <div className=" d-flex gap-3 flex-wrap xs-setting-btn-group">
      <SettingButton>
        <FaCog />
        Settings
      </SettingButton>
    </div>
  );
}

export default SettingBtnGroup;
