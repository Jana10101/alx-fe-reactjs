
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

export default UserProfile;
