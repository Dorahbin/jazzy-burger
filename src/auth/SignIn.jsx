import { Link } from 'react-router-dom';
import jazzyLogo from '../assets/logo.svg';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
const SignIn = () => {
  const [isReveal, setReveal] = useState(false);

  function handleToggle() {
    !isReveal ? setReveal(true) : setReveal(false);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    document.title = 'Login | page';
  });
  return (
    <>
      <main className='container vh-50 d-flex flex-column my-3'>
        <div>
          <div className='text-center'>
            <Link>
              <img src={jazzyLogo} alt='' />
            </Link>
          </div>

          <h2 className='fs-3 fw-bold my-4 text-center w-75 m-auto'>
            SIGN IN TO YOUR ACCOUNT
          </h2>

          {/* form */}
          <Form className='w-75 m-auto' onSubmit={handleSubmit(onSubmit)}>
            {/* input for email */}
            <Form.Label className='fs-6 text-secondary'>Email</Form.Label>
            <FloatingLabel
              controlId='floatingInput'
              label='example@mail.com'
              className='mb-3'
            >
              <Form.Control
                type='email'
                placeholder='name@example.com'
                className='border border-3 rounded-3'
                {...register('email', { required: true })}
              />
              {errors.email && (
                <span className='text-danger fw-bold'>
                  Email is required
                </span>
              )}
            </FloatingLabel>

            {/* input for password */}
            <Form.Label className='fs-6 text-secondary'>Password</Form.Label>
            <FloatingLabel controlId='floatingPassword' label='Password'>
              <Form.Control
                type={isReveal ? 'text' : 'password'}
                placeholder='Password'
                className='border border-3 rounded-3 position-relative'
                {...register('password', { required: true })}
              />
              {errors.password && (
                <span className='text-danger fw-bold'>
                  Password is required
                </span>
              )}

              <p
                className='position-absolute end-0 top-0 mt-3 me-2'
                role='button'
                onClick={handleToggle}
              >
                {isReveal ? 'hide' : 'show'}
              </p>
            </FloatingLabel>

            {/* checkbox */}
            <div className='d-flex justify-content-between mt-3'>
              {['checkbox'].map((type) => (
                <div key={`default-${type}`} className='mb-3'>
                  <Form.Check // prettier-ignore
                    type={type}
                    id={`default-${type}`}
                    label={'Keep me signed in'}
                    className='fs-6 fw-bold'
                  />
                </div>
              ))}
              <Link className='text-decoration-none' to='#'>
                Reset Password
              </Link>
            </div>
            <button className='btn btn-danger w-100 fs-3 text-white'>
              Sign In
            </button>
            <p className='text-center fw-bold d-flex gap-2 mt-3 justify-content-center'>
              Don't have an account? <Link to='/SignUp'>Create one</Link>
            </p>
          </Form>
        </div>
      </main>
    </>
  );
};

export default SignIn;
