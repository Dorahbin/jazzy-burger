import { useState } from 'react';
import { Link } from 'react-router-dom';
import loginLogo from '../assets/login-arrow.svg';
import signUpLogo from '../assets/sign-up-img.svg';

const AuthDropDown = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <main className='container shadow-lg border p-2 rounded bg-light'>
        <div className='d-flex flex-column gap-3 m-3'>
          {isLoggedIn ? (
            <>
              <Link className='btn btn-primary text-light f-5'>Logout</Link>
              <Link className='btn btn-primary text-light f-5'>Order</Link>
            </>
          ) : (
            <>
              {/* login div */}
              <div className='d-flex bg-primary border rounded p-2 pap-3'>
                <img src={loginLogo} alt='log-in-logo' />
                <Link className='btn btn-primary text-light f-5' to='/SignIn'>
                  Login
                </Link>
              </div>

              {/* sign up div */}
              <div className='d-flex bg-primary border rounded p-2 gap-3'>
                <img src={signUpLogo} alt='sign-up-img' />
                <Link
                  className='btn btn-primary text-lig f-5 fw-bolder '
                  to='/SignUp'
                >
                  SignUp
                </Link>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default AuthDropDown;
