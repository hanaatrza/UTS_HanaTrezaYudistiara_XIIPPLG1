import { useState } from 'react';

import MyNavbar from './components/Navbar';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Footer from './components/Footer';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { FaHeart } from 'react-icons/fa';

import './App.css';

function App() {
  const [likes, setLikes] = useState(0);

  return (
    <>
      <MyNavbar />

      <Profile />

      <section className="like-section">
        <Container className="text-center">

          <h3>Suka dengan portfolio saya?</h3>

          <Button
            variant="dark"
            onClick={() => setLikes(likes + 1)}
          >
            <FaHeart /> Like
          </Button>

          <p className="like-count">
            Jumlah Like: {likes}
          </p>

        </Container>
      </section>

      <Skills />

      <Footer />
    </>
  );
}

export default App;