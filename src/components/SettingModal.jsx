import { useState } from "react";
import CustomModal from "./CustomModal";

function SettingModal({ modalid, onToggleSetting, Modalheader, updateProfile, profile }) {
  const [editProfile, setEditProfile] = useState({
    profileName: profile.profileName,
    quote: profile.quote,
    profileImage: profile.profileImage,
  });

  const editProfileDetails = (e) => {
    setEditProfile({ ...editProfile, [e.target.name]: e.target.value });
  };

  function handleForm(e) {
    e.preventDefault();
    updateProfile(editProfile);
  }

  return (
    <CustomModal Modalheader={Modalheader} modalid={modalid} onClose={onToggleSetting}>
      <form onSubmit={handleForm} id={modalid}>
        <div className="mb-3">
          <label htmlFor="profile-name" className="form-label fw-semibold">
            Profile Name
          </label>
          <input
            type="text"
            className="form-control"
            id="profile-name"
            placeholder="Add Your Profile Name..."
            name="profileName"
            maxLength={15}
            value={editProfile.profileName}
            onChange={editProfileDetails}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="quote" className="form-label fw-semibold">
            Quote
          </label>
          <input
            id="quote"
            type="text"
            className="form-control"
            name="quote"
            placeholder="Add Your Favorite Quote..."
            maxLength={50}
            value={editProfile.quote}
            onChange={editProfileDetails}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="image-url" className="form-label fw-semibold">
            Image URL
          </label>
          <input
            id="image-url"
            type="text"
            className="form-control"
            name="profileImage"
            placeholder="Add Your Pic URL..."
            value={editProfile.profileImage}
            onChange={editProfileDetails}
          />
        </div>

        <div className="d-flex justify-content-end align-content-center p-3 border-top gap-2">
          <hr />
          <button type="button" className="btn btn-secondary" onClick={onToggleSetting}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary " onClick={handleForm}>
            Save
          </button>
        </div>
      </form>
    </CustomModal>
  );
}

export default SettingModal;
