
const UserProfile = (props) => {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      borderRadius: '10px', 
      padding: '20px', 
      width: '300px', 
      margin: '20px auto',
      textAlign: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <h2>{props.name}</h2>
      <p><strong>Age:</strong> {props.age}</p>
      <p><strong>Bio:</strong> {props.bio}</p> {/* ✅ This line fixed */}
    </div>
  );
};


function UserProfile(props) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: 'blue', fontSize: '24px', marginBottom: '5px' }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p>Bio: <span style={{ fontStyle: 'italic' }}>{props.bio}</span></p>
    </div>
  );
}
import { useContext } from 'react';
import UserContext from './UserContext';

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div style={{ border: '1px solid gray', padding: '20px', margin: '20px' }}>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;