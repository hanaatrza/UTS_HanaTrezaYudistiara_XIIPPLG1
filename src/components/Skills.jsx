import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase
} from 'react-icons/fa';

function Skills() {

  const skills = [
    {
      name: 'HTML',
      icon: <FaHtml5 size={45} />,
      description: 'Menyusun isi halaman agar terarah dan mudah dipahami.'
    },
    {
      name: 'CSS',
      icon: <FaCss3Alt size={45} />,
      description: 'Mengubah halaman sederhana menjadi tampilan yang lebih nyaman dilihat.'
    },
    {
      name: 'JavaScript',
      icon: <FaJs size={45} />,
      description: 'Membuat halaman bisa merespons tindakan dan input dari pengguna.'
    },
    {
      name: 'SQL',
      icon: <FaDatabase size={45} />,
      description: 'Menyimpan dan mengatur data supaya lebih rapi dan mudah digunakan.'
    }
  ];

  return (
    <section id="skills" className="skills-section">

      <Container>

        <div className="skills-title">
          <span>────</span>
          <h2>My Skills</h2>
          <span>────</span>
        </div>

        <p className="skills-intro">
          Tools dan teknologi yang saya gunakan untuk belajar,
          membuat, dan mengembangkan sebuah website.
        </p>

        <Row className="justify-content-center">

          {skills.map((skill, index) => (

            <Col
              xs={12}
              sm={6}
              lg={3}
              key={index}
              className="mb-4"
            >

              <Card className="skill-card">

                <Card.Body>

                  <div className="skill-icon">
                    {skill.icon}
                  </div>

                  <Card.Title>
                    {skill.name}
                  </Card.Title>

                  <Card.Text>
                    {skill.description}
                  </Card.Text>

                </Card.Body>

              </Card>

            </Col>

          ))}

        </Row>

      </Container>

    </section>
  );
}

export default Skills;