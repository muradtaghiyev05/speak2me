import Photo from '../../assets/images/login-photo.jpg'
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='sign-up' id='sign-up'>
      <div className='left-container'>
        <div className='back-photo'>
          <img src={Photo} alt='login-photo' />
        </div>
        <div className='info-container'>
          <div className='logo-container'>
            <div className='img-container'>
              <img src={Logo} alt='logo' />
            </div>
            <h1>Speak2Me</h1>
          </div>
          <p className='info-text'>
            Speak2Me is the best AI powered self-study tool to hone your English speaking skills.
          </p>
          <div className='founders-container'>
            <span>Farid, Vugar, Sabuhi, Oqtay</span> <br />
            <span>Founders of Speak2Me platform</span>
          </div>
        </div>
      </div>
      <div className='right-container'>
        <form>
          <div className='title'>
            <h2>Create an account</h2>
            <span>Get started with a 30-day trial</span>
          </div>
          <div className='form-group'>
            <label>Name</label>
            <input type="text" required />
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input type="email" required />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input type='password' required />
          </div>
          <div className='form-group'>
            <label>Confirm Password</label>
            <input type='password' required />
          </div>
          <div id='check'>
            <input type='checkbox' />
            <label>I agree with all terms and conditions</label>
          </div>
          <div id='btn'>
            <button type='submit'>Create Account</button>
          </div>
        </form>
        <div className='go-signup'>
          <span>Already have an account? </span><Link id='sign-link' to='/login'>Sign In</Link>
        </div>
      </div>
    </div>
  )
}

export default Signup