import { Link } from 'react-router-dom';
import jazzyLogo from '../assets/logo.svg';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiEye } from 'react-icons/fi';
import { FiEyeOff } from 'react-icons/fi';
import InputGroup from 'react-bootstrap/InputGroup';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required('First name is required')
    .matches(/^[A-Za-z]+$/, 'Username must contain only letters'),
  lastName: yup
    .string()
    .required('last name is required')
    .matches(/^[A-Za-z]+$/, 'Username must contain only letters'),

  email: yup.string().email('invalid email').required('Email is required'),
  number: yup
    .string()
    .required('Number is required')
    .matches(/^\d+$/, 'input must be a number')
    .min(10, 'Phone number is not valid')
    .max(11, 'Phone number is not valid'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.[a-zA-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%*?&]/,
      'Password must contain at least one letter, one number, and one special character'
    ),
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const SignUp = () => {
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
    document.title = 'SignUp | page';
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
            CREATE YOUR ACCOUNT
          </h2>

          {/* firstname*/}
          <Form className='w-75 m-auto' onSubmit={handleSubmit(onSubmit)}>
            {/* input for Firstname */}
            <Form.Label className='fs-6 text-secondary'>First Name</Form.Label>
            <FloatingLabel
              controlId='floatingInput'
              label='First Name'
              className='mb-3'
            >
              <Form.Control
                type='text'
                placeholder='First Name'
                className='border border-2 rounded-3'
                {...register('firstName')}
              />
              {errors.firstName && (
                <span className='text-danger fw-bold'>
                  {errors.firstName.message}
                </span>
              )}
            </FloatingLabel>

            {/* input for lastname */}
            <Form.Label className='fs-6 text-secondary'>Last Name</Form.Label>
            <FloatingLabel
              controlId='floatingInput'
              label='Last Name'
              className='mb-3'
            >
              <Form.Control
                type='text'
                placeholder='First Name'
                className='border border-2 rounded-3'
                {...register('lastName', { required: true })}
              />
              {errors.lastName && (
                <span className='text-danger fw-bold'>
                  {errors.lastName.message}
                </span>
              )}
            </FloatingLabel>

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
                {...register('email', { required: true })}
              />
              {errors.email && (
                <span className='text-danger fw-bold'>Email is required</span>
              )}
            </FloatingLabel>

            {/* input for number */}
            <Form.Label className='fs-6 text-secondary'>
              Phone Number
            </Form.Label>
            <FloatingLabel className='mb-3'>
              <InputGroup size='lg' className='border border-2 rounded-3'>
                <InputGroup.Text
                  id='inputGroup-sizing-lg'
                  className='bg-secondary rounded-3'
                >
                  +234
                </InputGroup.Text>
                <Form.Control
                  aria-label='Large'
                  aria-describedby='inputGroup-sizing-sm'
                  className='rounded-3'
                  {...register('number')}
                />
              </InputGroup>
              {errors.number && (
                <span className='text-danger fw-bold'>
                  {errors.number.message}
                </span>
              )}
            </FloatingLabel>

            {/* input for password */}
            <Form.Label className='fs-6 text-secondary'>
              Password (8 minimum characters)
            </Form.Label>
            <FloatingLabel
              controlId='floatingPassword'
              label='Password'
              className='mb-3'
            >
              <Form.Control
                type={isReveal ? 'text' : 'password'}
                placeholder='Password'
                className='border border-2 rounded-3 position-relative'
                {...register('password')}
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
                {isReveal ? <FiEyeOff /> : <FiEye />}
              </p>
            </FloatingLabel>

            {/* input for confirm password */}
            <Form.Label className='fs-6 text-secondary'>
              Confirm Password
            </Form.Label>
            <FloatingLabel controlId='floatingPassword' label='Password'>
              <Form.Control
                type={isReveal ? 'text' : 'password'}
                placeholder='Password'
                className='border border-2 rounded-3 position-relative'
                {...register('confirmPassword')}
              />
              {errors.confirmPassword && (
                <span className='text-danger fw-bold'>
                  {errors.confirmPassword.message}
                </span>
              )}

              <p
                className='position-absolute end-0 top-0 mt-3 me-2'
                role='button'
                onClick={handleToggle}
              >
                {isReveal ? <FiEyeOff /> : <FiEye />}
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
              <Link className='text-decoration-none d-none d-lg-block' to='#'>
                Reset Password
              </Link>
            </div>
            <button className='btn btn-danger w-100 fs-3 text-white'>
              Create account
            </button>
            <p className='text-center fw-bold d-flex gap-2 mt-3 justify-content-center'>
              Have an account?{' '}
              <Link to='/SignIn' className='text-decoration-none'>
                SignIn
              </Link>
            </p>

            <p className='text-center d-lg-flex flex-lg-column term-box flex-wrap gap-1 justify-content-center '>
              By Creating your Quickmunch account, you agree to the
              <div className='d-flex gap-1 justify-content-center '>
                <Link to='#' className='text-decoration-none'>
                  Terms of use
                </Link>
                and
                <Link to='#' className='text-decoration-none'>
                  Privacy Policy
                </Link>
              </div>
            </p>
          </Form>
        </div>
      </main>
    </>
  );
};

export default SignUp;
