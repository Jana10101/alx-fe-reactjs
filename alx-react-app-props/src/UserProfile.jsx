const UserProfile = ({ name, age, bio }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Bio: {bio}</p>
    </div>
  );
};
// src/UserProfile.jsx
import { useContext } from "react";
import UserContext from "./UserContext";

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData?.name}</p>
      <p>Email: {userData?.email}</p>
    </div>
  );
}

export default UserProfile;
