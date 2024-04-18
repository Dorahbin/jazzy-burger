import { useEffect, useState } from 'react';
import jazzyPic from '../assets/tasty-burger-img.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/Product.css';
import heartImg from '../assets/love-img.jpg';
import img1 from '../assets/flex-img-1.svg';
import img2 from '../assets/flex-img-2.svg';
import img3 from '../assets/flex-img-3.svg';
import img4 from '../assets/flex-img-4.svg';
import img5 from '../assets/flex-img-5.svg';
import addBtn from '../assets/addcart-img.svg';

// import Placeholder from "react-bootstrap/Placeholder";

const Products = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getData = async () => {
    try {
      setIsLoading(true);
      const req = await fetch('https://jazzy-mern.onrender.com/api/products');
      const res = await req.json();
      console.log(res.products);
      console.log(res);
      setData(res.products);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className='container'>
        <main className='my-5 row'>
          {isLoading && (
            <div>
              {' '}
              <h2 className='text-center'>loading...</h2>{' '}
            </div>
          )}
          {/* div-1 */}
          <div className='d-none d-lg-block col-lg-3'>
            <img src={jazzyPic} alt='jazzys pic' className='w-100 h-100' />
          </div>
          {/* div-2 */}
          <div className='col-lg-9'>
            <div className='d-flex flex-wrap justify-content-between align-items-center gap-3'>
              {data.map((datum) => {
                const { _id, title, price, image } = datum;
                return (
                  <Card
                    key={_id}
                    className='card-inner rounded-4 position-relative'
                  >
                    <Card.Img variant='top' src={image} />
                    <Card.Img
                      className='w-25 position-absolute top-0 end-0 rounded-pill p-3 '
                      variant='top'
                      src={heartImg}
                    />
                    <Card.Body>
                      {/* <Placeholder as={title} animation="glow">
                      <Placeholder xs={6} />
                    </Placeholder> */}
                      <Card.Title className='fs-6'> {title} </Card.Title>
                      <Card.Text>
                        <span className='fw-lighter'> Total Price </span>
                        <br />
                        <span className='fw-bold'>#{price} </span>
                      </Card.Text>

                      {/* images */}
                      <div className='d-flex align-items-center'>
                        <img src={img1} alt='' />
                        <img src={img2} alt='' />
                        <img src={img3} alt='' />
                        <img src={img4} alt='' />
                        <img src={img5} alt='' />
                      </div>
                      <Button
                        variant='primary'
                        className='w-100 bg-danger text-light d-flex gap-2 justify-content-center border-0'
                      >
                        <img src={addBtn} alt='' />
                        Add to Cart
                      </Button>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Products;
