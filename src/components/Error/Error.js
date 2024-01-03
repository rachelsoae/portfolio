import {Link} from 'react-router-dom';

const Error = () => {
  return (
    <div className='contact'>
      <h1 className='page-header'>Sorry...</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to='/' className='redirect'>Go Home</Link>
    </div>
  )
}

export default Error;