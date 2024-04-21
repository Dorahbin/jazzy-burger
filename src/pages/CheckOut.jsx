import { useEffect } from 'react';
import Footer from '../layouts/Footer';
import deleteBtn from '../assets/delete-img.svg';
import { Link } from 'react-router-dom';
import addImg from '../assets/red-add-img.svg';
import minImg from '../assets/red-minus-img.svg';
import '../styles/CheckOut.css';
import Recipient from '../components/Recipient';
import Address from '../components/Address';

const CheckOut = () => {
  useEffect(() => {
    document.title = 'check out | page';
  });
  return (
    <>
      <div className='container'>
        {/* checkout pages */}
        <main className=' row checkout-container align-items-start justify-content-between'>
          {/* section 1 */}
          <section className=' col-lg-6 my-5 border border-2 rounded-1 checkout-sections shadow-sm'>
            {/* review and order */}
            <div className='d-flex flex-column justify-content-between'>
              <h3 className='fw-bolder pt-3'>Review and place order</h3>
              <p>
                Review / Add address and fulfill payments to complete your
                purchase
              </p>
            </div>
            <hr />

            {/* recipient info */}
            <div className='d-flex flex-column justify-content-between'>
              <h5 className='fw-bolder'>Recipient information</h5>

              {/* < to='#' className='btn btn-lg bg-dark text-light'>
                {' '}
                Add Recipient
              </Link> */}
              <Recipient />
            </div>
            <hr />

            {/* delivery address */}
            <div className='d-flex flex-column justify-content-between'>
              <h5 className='fw-bolder'>Delivery address</h5>
              {/* <Link to='#' className='btn btn-lg bg-dark text-light'>
                {' '}
                Add Delivery Address
              </Link> */}
              <Address />
            </div>
            <hr />

            {/* order btn */}
            <div>
              <Link
                to='#'
                className='btn w-100 btn-lg bg-success text-light mb-3'
              >
                Place Your Order
              </Link>
            </div>
          </section>

          {/* section 2 */}
          <section className='col-lg-5 section-2 border mt-lg-5 checkout-sections  border-2 rounded-1 shadow-sm'>
            {/*  1st */}
            <div className=''>
              <h5 className='fw-bolder pt-3'>Your order from</h5>
            </div>
            <hr />

            {/* 2nd */}
            <div className='d-flex justify-content-between '>
              {/* double grill */}
              <div>
                <h5 className='fw-bolder text-danger'>
                  Double Grilled{' '}
                  <span className='d-none d-lg-block'>Chiken Burger</span>
                </h5>
                <span className='d-flex gap-3 add-span rounded p-2'>
                  <img src={addImg} alt='' role='btn' />1{' '}
                  <img src={minImg} role='btn' alt='' />
                </span>
              </div>

              {/* price and delete*/}
              <div className=''>
                <div className='d-flex gap-3 align-items-center'>
                  <img src={deleteBtn} alt='' />
                  <span className='fw-lighter'>N 12000</span>
                </div>
              </div>
            </div>
            <hr />

            {/* 3rd */}
            <div className=''>
              {/* total */}
              <div className='d-flex justify-content-between align-items-center'>
                <span className='fw-lighter'>items total:</span>
                <span className='fw-lighter'>N12000.0</span>
              </div>
              {/* discount */}
              <div className='d-flex justify-content-between align-items-center'>
                <span className='fw-lighter'>Discount:</span>
                <span className='fw-lighter'>N0</span>
              </div>
              {/* delivery  */}
              <div className='d-flex justify-content-between align-items-center'>
                <span className='fw-lighter'>Delivery Charge:</span>
                <span className='fw-lighter'>0.0</span>
              </div>
            </div>
            <hr />

            {/* 4th */}
            <div className='d-flex justify-content between align-items-center pb-5'>
              <span className='fw-bolder'>Total:</span>
              <span className='fw-bolder'>N12000</span>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default CheckOut;

// import Footer from '../layouts/Footer'
// import '../styles/'
// const CheckOut = () => {
//   return (
//     <>
//     <Footer/>
//     </>
//   )
// }

// export default CheckOut
