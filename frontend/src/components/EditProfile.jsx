import { useState, useEffect, useContext } from "react";
import { updateProfile } from "../api/profileApi";
import { UniversalContext } from '../context/UniversalContext';

const EditProfile = () => {
  const { setValue } = useContext(UniversalContext);
  const [profile, setProfile] = useState({
    id: null,
    userId: null,
    firstName: "",
    lastName: "",
    phoneNumber: "",
    profilePicture: "",
    bio: "",
  });
  const [user, setUser] = useState("");

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem("profile"));
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedProfile) {
      setProfile(storedProfile);
    }
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleUpdate = async () => {
    try {
      const response = await updateProfile(
        profile.id,
        user.id,
        profile.firstName,
        profile.lastName,
        profile.phoneNumber,
        profile.profilePicture,
        profile.bio
      );
      if (response.ok) {
        localStorage.setItem("profile", JSON.stringify(profile));
        setValue("profile", profile);
        setValue("AlertType", "primary");
        setValue("AlertMessage", "Profile updated successfully");
        setValue("AlertVisibility", true);
      } else {
        setValue("AlertType", "danger");
        setValue("AlertMessage", response.message);
        setValue("AlertVisibility", true);
      }
    } catch (error) {
      setValue("AlertType", "danger");
      setValue("AlertMessage", "Error updating profile");
      setValue("AlertVisibility", true);
    }
  };

  const handleFirstNameChange = (event) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      firstName: event.target.value,
    }));
  };

  const handleLastNameChange = (event) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      lastName: event.target.value,
    }));
  };

  const handlePhoneNumberChange = (event) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      phoneNumber: event.target.value,
    }));
  };

  const handleBioChange = (event) => {
    setProfile((prevProfile) => ({ ...prevProfile, bio: event.target.value }));
  };

  return (
    <div className="container mt-4" style={{ backgroundColor: "#462e05" }}>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card border-light shadow-sm" style={{ backgroundColor: "#462e05" }}>
            <div className="card-body p-4">
              <h2 className="mb-4">Edit Profile</h2>
              <div className="mb-3">
                <label className="form-label" htmlFor="FirstName">First Name</label>
                <input
                  type="text"
                  value={profile.firstName}
                  onChange={handleFirstNameChange}
                  id="FirstName"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="LastName">Last Name</label>
                <input
                  type="text"
                  value={profile.lastName}
                  onChange={handleLastNameChange}
                  id="LastName"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="PhoneNumber">Phone Number</label>
                <input
                  type="text"
                  value={profile.phoneNumber}
                  onChange={handlePhoneNumberChange}
                  id="PhoneNumber"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="Bio">Bio</label>
                <textarea
                  id="Bio"
                  value={profile.bio}
                  onChange={handleBioChange}
                  className="form-control"
                  style={{ height: '100px' }}
                />
              </div>
              <button className="btn btn-primary" onClick={handleUpdate}>
                <i className="ri-save-line me-2" />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
