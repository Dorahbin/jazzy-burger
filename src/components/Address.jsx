import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
// import InputGroup from 'react-bootstrap/InputGroup';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';

const schema = yup.object().shape({
  City: yup.string().required('City is required'),
  houseNumber: yup.string().required('House number is required'),
  street: yup.string().required('Street is required'),
});

function Address() {
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
        Add Delivery Address
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            className=''
            id='Address-modal'
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* input for city */}
            <Form.Label className='fs-6 text-secondary'>Select City</Form.Label>
            <FloatingLabel controlId='floatingInput' className='mb-3'>
              <Form.Control
                type='text'
                className='border border-2 rounded-3'
                {...register('City')}
              />
              {errors.City && (
                <span className='text-danger fw-bold'>
                  {errors.City.message}
                </span>
              )}
            </FloatingLabel>

            {/* input for house number */}
            <Form.Label className='fs-6 text-secondary'>
              House number
            </Form.Label>
            <FloatingLabel controlId='floatingInput' className='mb-3'>
              <Form.Control
                type='text'
                className='border border-2 rounded-3'
                {...register('houseNumber')}
              />
              {errors.houseNumber && (
                <span className='text-danger fw-bold'>
                  {errors.houseNumber.message}
                </span>
              )}
            </FloatingLabel>

            {/* input for street */}
            <Form.Label className='fs-6 text-secondary'>Street</Form.Label>
            <FloatingLabel controlId='floatingInput' className='mb-3'>
              <Form.Control
                type='email'
                className='border border-2 rounded-3'
                {...register('street')}
              />
              {errors.street && (
                <span className='text-danger fw-bold'>
                  {errors.street.message}
                </span>
              )}
            </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className='btn btn-lg btn-primary text-light'
            form='Address-modal'
            onClick={handleClose}
          >
            Close
          </button>

          <button
            className='btn btn-lg btn-success text-light'
            form='Address-modal'
          >
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Address;
