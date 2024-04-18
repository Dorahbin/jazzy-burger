import { useEffect } from 'react';
import Hero from '../components/Hero';
import Footer from '../layouts/Footer';
import Products from '../components/Products';
const Home = () => {
  useEffect(() => {
    document.title = 'Home | page';
  });
  return (
    <>
      <main className=''>
        <Hero />
        <Products/>
        <Footer />
      </main>
    </>
  );
};

export default Home;
