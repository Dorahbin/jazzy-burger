import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import navLogo from '../assets/logo.svg';
import locationLogo from '../assets/nav-location.svg';
import allProductLogo from '../assets/all-products-nav.svg';
import guestLogo from '../assets/guess-nav.svg';
import cartLogo from '../assets/cart-bag.svg';
import { useState } from 'react';
import AuthDropDown from '../components/AuthDropDown';
import { GoChevronDown } from 'react-icons/go';
import { GoChevronUp } from 'react-icons/go';
import Bag from '../components/Bag';
const NavBar = ({cartItem}) => {
  const [authShow, setAuthShow] = useState(false);
  const [bagShow, setBagShow] = useState(false);
  return (
    <>
      <main>
        <nav className='container d-flex justify-content-between align-items-center'>
          {/* section-1 */}
          <section className='d-flex justify-content-between gap-3 align-items-center'>
            {/* div-1 */}
            <div>
              <Link to='/'>
                <img src={navLogo} alt='' className='img-fluid p-3' />
              </Link>
            </div>

            {/* div-2 */}
            <div>
              <img
                src={locationLogo}
                alt='location-logo'
                className='d-none d-lg-block'
              />
            </div>
            <h5 className='text-danger d-none d-lg-block '>Lagos, Nigeria</h5>
          </section>

          {/* section-2 */}
          <section className='d-flex justify-content-between gap-4 align-items-center'>
            <img
              src={allProductLogo}
              alt='all-product-logo'
              className='img-fluid '
            />
            <h5 className='text-danger d-none d-lg-block mt-3'>All Products</h5>

            {/* div-1 */}
            <div
              className='d-flex justify-content-between position-relative gap-3 align-items-center'
              role='button'
              onClick={() =>
                !authShow ? setAuthShow(true) : setAuthShow(false)
              }
            >
              <img src={guestLogo} alt='guest-logo' />
              <h5 className='d-none d-lg-block mt-3 text-secondary'>
                Hi, guess
              </h5>

              {!authShow ? (
                <div className='d-none d-lg-block mt-3'>
                  <GoChevronDown />
                </div>
              ) : (
                <div className='d-none d-lg-block mt-3'>
                  <GoChevronUp />
                </div>
              )}
              <div className='position-absolute top-100  mt-3'>
                {authShow && <AuthDropDown />}
              </div>
            </div>
            {/* cart img */}
            <div className='position-relative'>
            <img
              src={cartLogo}
              alt='cart-img'
              role='button'
              onClick={() => (!bagShow ? setBagShow(true) : setBagShow(false))}
            />

            <p  className='position-absolute cart-num bg-danger text-light text-center rounded-circle w-75 h-75 fw-bold'>{cartItem.length}</p>

            <div className='position-absolute top-100 end-0 mt-3'>
              {bagShow && <Bag />}
            </div>
           </div>
          </section>
        </nav>
        <Outlet />
      </main>
    </>
  );
};

export default NavBar;
