import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function UserDetails() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>User Details</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

export default UserDetails;
