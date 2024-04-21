import { Link } from 'react-router-dom';
import jazzyLogo from '../assets/logo.svg';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiEye } from 'react-icons/fi';
import { FiEyeOff } from 'react-icons/fi';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email('invalid email').required('Email is required'),

  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.[a-zA-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%*?&]/,
      'Password must contain at least one letter, one number, and one special character'
    ),
});
const SignIn = () => {
  const [isReveal, setReveal] = useState(false);

  function handleToggle() {
    !isReveal ? setReveal(true) : setReveal(false);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    document.title = 'Login | page';
  });
  return (
    <>
      <main className='container vh-50 d-flex flex-column my-3'>
        <div>
          <div className='text-center'>
            <Link to='/'>
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
                className='border border-2 rounded-3'
                {...register('email')}
              />
              {errors.email && (
                <span className='text-danger fw-bold'>
                  {errors.email.message}
                </span>
              )}
            </FloatingLabel>

            {/* input for password */}
            <Form.Label className='fs-6 text-secondary'>Password</Form.Label>
            <FloatingLabel controlId='floatingPassword' label='Password'>
              <Form.Control
                type={isReveal ? 'text' : 'password'}
                placeholder='Password'
                className='border border-2 rounded-3 position-relative'
                {...register('password', { required: true })}
              />
              {errors.password && (
                <span className='text-danger fw-bold'>
                  {errors.password.message}
                </span>
              )}

              <p
                className='position-absolute end-0 top-0 mt-3 me-2'
                role='button'
                onClick={handleToggle}
              >
                {isReveal ? <FiEye /> : <FiEyeOff />}
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
              Dont have an account? <Link to='/SignUp'>Create one</Link>
            </p>
          </Form>
        </div>
      </main>
    </>
  );
};

export default SignIn;
