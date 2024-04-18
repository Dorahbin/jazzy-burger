import heroImg from '../assets/hero-img.jpg';
import '../styles/Hero.css'
const Hero = () => {
  return (
    <>
      <main className='my-3 container'>
        <img src={heroImg} alt='hero-img' className='img-fluid hero-img w-100' />
      </main>
    </>
  );
};

export default Hero;
