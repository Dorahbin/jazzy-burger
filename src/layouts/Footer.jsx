import supportImg from '../assets/support-img.svg';
import paymentImg from '../assets/payment-img.svg';
import faceBookImg from '../assets/facebook-img.svg';
import instaImg from '../assets/insta-img.svg';
import youTubeImg from '../assets/youtube-img.svg';
import twitterImg from '../assets/twitter-img.svg';
import appStoreImg from '../assets/appstore-img.svg';
import googleStoreImg from '../assets/google-store-img.svg';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <div className='bg-dark'>
        <div className='container center'>
          <main className='  pt-5 justify-content-between  '>
            {/* first section */}
            <section className='d-lg-flex justify-content-between  align-items-center'>
              {/* img-div */}
              <div className='d-flex img-flex  gap-4 '>
                <img src={supportImg} alt='' className='support-img ' />
                <img src={paymentImg} alt='' className='support-img  ' />
              </div>

              {/* img-div */}
              <div className='d-flex img-flex gap-3 '>
                <img src={appStoreImg} alt='' className='app-img' />
                <img src={googleStoreImg} alt='' className='google-img' />
              </div>
            </section>

            {/* contact-div */}
            <div className='mt-lg-5 contact-box '>
              <h4 className='fw-bolder text-light'>Need Help </h4>
              <div className='text-light margin-equal fw-lighter justify-contents-sm-center socials d-flex align-items-center gap-2'>
                <h5 className='text-decoration-underline '>
                  +234 907 466 6655
                </h5>
                <span className='pb-2'>or</span>
              </div>
              <h5 className='text-decoration-underline text-light margin-equal fw-lighter'>
                help@jazzyburger.com
              </h5>
            </div>

            {/* socials div */}
            <div className='text-light py-lg-5 margin-follow'>
              <h3 className='fw-bolder'>FOLLOW US</h3>
              <div className='d-flex socials gap-3 margin-socials'>
                <Link>
                  <img src={faceBookImg} alt='' />
                </Link>
                <Link>
                  <img src={twitterImg} alt='' />
                </Link>
                <Link>
                  <img src={instaImg} alt='' />
                </Link>
                <Link>
                  <img src={youTubeImg} alt='' />
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Footer;
