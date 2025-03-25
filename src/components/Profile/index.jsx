function Profile({ picture, name }) {
  return (
    <div className="profile">
      <p>{name}</p>
      <img src={picture} alt={`Photo de profile de ${picture}`} />
    </div>
  );
}

export default Profile;
