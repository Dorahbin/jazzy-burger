import supportImg from '../assets/247-img.svg';
import paymentImg from '../assets/100-img.svg';
import faceBookImg from '../assets/facebook-img.svg';
import instaImg from '../assets/insta-img.svg';
import youTubeImg from '../assets/youtube-img.svg';
import twitterImg from '../assets/twitter-img.svg';
import appStoreImg from '../assets/appstore-img.svg';
import googleStoreImg from '../assets/google-store-img.svg';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import copyImg from '../assets/copy-img.svg';
import { LuDot } from 'react-icons/lu';
const Footer = () => {
  return (
    <>
      <div className='bg-dark'>
        <div className='container center'>
          <main className=' pt-5  '>
            {/* first section */}
            <section className='d-lg-flex justify-content-between  align-items-center'>
              {/* img-div */}
              <div className='d-flex img-flex  gap-4 '>
                {/* support div */}
                <div className='d-flex support-flex-container text-light'>
                  <img src={supportImg} alt='' className='support-img' />
                  <div className='d-flex  flex-lg-column support '>
                    <span className='fw-bolder fs-4 mt-lg-1'>247</span>
                    <span className='fw-bolder fs-12'>support</span>
                  </div>
                </div>

                {/* payment div */}
                <div className='d-flex support-flex-container payment-container text-light'>
                  <img src={paymentImg} alt='' className='support-img' />
                  <div className='d-flex  flex-column payment w-100'>
                    <span className='fw-bolder fs-4'>100%</span>
                    <span className='fw-bolder fs-12'>Payment Secured</span>
                  </div>
                </div>
                {/* <img src={paymentImg} alt='' className='support-img' /> */}
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
      <div className='container text-center'>
        <span>
          &copy; JJB Concepts <LuDot /> Developed by our Digital LLC
        </span>
      </div>
    </>
  );
};

export default Footer;
