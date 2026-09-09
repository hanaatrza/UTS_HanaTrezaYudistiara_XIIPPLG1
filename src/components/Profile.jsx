import Container from 'react-bootstrap/Container';

function Profile() {
  return (
    <section id="home" className="profile-section">
      <Container>

        <div className="profile-wrapper">

          <div className="profile-photo-wrapper">
            <img
              src="/foto-profile.jpg"
              alt="Foto Profile"
              className="profile-photo"
            />
          </div>

          <div className="profile-content">

            <h1>
              Hana Treza Yudistiara
            </h1>

            <span className="job-badge">
              Web Developer
            </span>

            <p className="profile-description">
              Saya seorang pelajar SMK yang sedang menekuni dunia
              pengembangan web. Senang belajar hal baru, mencoba
              hal-hal yang menantang, dan membuat sesuatu dari ide
              sederhana menjadi lebih nyata.
            </p>

          </div>

        </div>

      </Container>
    </section>
  );
}

export default Profile;