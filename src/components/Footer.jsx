import Container from 'react-bootstrap/Container';

import {
  FaInstagram,
  FaGithub
} from 'react-icons/fa';

function Footer() {
  return (
    <footer id="contact" className="footer">
      <Container className="text-center">

        <p>
          © 2026 Hana Treza Yudistiara. All Rights Reserved.
        </p>

        <div className="social-icons">

          <a
            href="https://www.instagram.com/hanatryd/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={25} />
          </a>

          <a
            href="https://github.com/hanaatrza"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={25} />
          </a>

        </div>

      </Container>
    </footer>
  );
}

export default Footer;