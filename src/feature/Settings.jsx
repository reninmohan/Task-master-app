import { useState } from "react";
import DateDisplay from "../components/DateDisplay";
import SettingBtn from "../components/SettingBtn";
import SettingModal from "../components/SettingModal";

function Settings({ sortedDates, updateProfile, profile }) {
  const [toggleSetting, setToggleSetting] = useState(false);

  const handleToggleSetting = () => {
    setToggleSetting((is) => !is);
  };

  return (
    <div style={{ backgroundColor: "#958B8B" }}>
      <div className="d-flex justify-content-between  mx-auto p-3 " style={{ maxWidth: "85rem" }}>
        <DateDisplay sortedDates={sortedDates} />
        <SettingBtn onToggleSetting={handleToggleSetting} />
      </div>
      {toggleSetting && (
        <SettingModal
          Modalheader="Update Profile"
          modalid="modal-edit-task"
          onToggleSetting={handleToggleSetting}
          updateProfile={updateProfile}
          profile={profile}
        />
      )}
    </div>
  );
}

export default Settings;
