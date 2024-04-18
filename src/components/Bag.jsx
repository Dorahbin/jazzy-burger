import { useState } from 'react';
import deleteImg from '../assets/delete-img.svg';
// import { Link } from 'react-router-dom'
const Bag = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <main className='bag bg-light p-2 shadow-lg'>
        {showCart ? (
          <>
          
          </>
        ) : (
          <section>
            <h4 className='text-dark'>Your Order</h4>
            <hr />
            <div className='d-flex justify-content-between align-items-center'>
              <h5 className='text-secondary '>
                1 <span className='text-danger'>Double Beef Burger</span>
              </h5>
              <div className='d-flex align-items-center gap-2 text-primary'>
                <img src={deleteImg} alt='delete-img' />
                10500
              </div>
            </div>
            <hr />

            <div className='d-flex justify-content-between align-items-center gap-3'>
              <h5 className='text-secondary '>items SubTotal</h5>
              <h5 className='text-secondary '>N Subtotal</h5>
            </div>

            <hr />

            <button className='btn btn-lg btn-success w-100 text-light rounded-1 '>
              Proceed to Checkout
            </button>
          </section>
        )}
      </main>
    </>
  );
};

export default Bag;
