 function Profile() {
  return (
    <div className="container_profile">
      <h3>Account Settings</h3>

      <div className="profileBox">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="profile"
        />

        <div>
          <h4>Marry Doe</h4>
          <p>MarryDoe@gmail.com</p>
        </div>
      </div>

      <p className="desc">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
        Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat.
      </p>
    </div>
  );
}
export default Profile;