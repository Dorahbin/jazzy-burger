import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';

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
});

function Recipient() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <button className='btn btn-lg btn-dark text-light' onClick={handleShow}>
        Add Recipient
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Recipient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            className=''
            id='Recipient-modal'
            onSubmit={handleSubmit(onSubmit)}
          >
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className='btn btn-lg btn-primary text-light'
            form='Recipient-modal'
            onClick={handleClose}
          >
            Close
          </button>

          <button
            className='btn btn-lg btn-success text-light'
            form='Recipient-modal'
          >
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Recipient;
