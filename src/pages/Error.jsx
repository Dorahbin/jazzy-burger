import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <main className='container'>
      <h2>oops..Error 404!!!</h2>
      <p>Please go to main page</p>
      <Link to='/'>home</Link>
    </main>
  );
};

export default Error;
