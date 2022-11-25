import Photo from '../../assets/images/login-photo.jpg'
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Login = () => {

  return (
    <div className='login' id='login'>
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
                    <h2>Sign In</h2>
                    <div className='form-group'>
                        <label>Email</label>
                        <input type="email" required />
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input type='password' required />
                    </div>
                    <div id='check'>
                        <input type='checkbox' />
                        <label>Remember Me</label>
                    </div>
                    <div id='btn'>
                        <button type='submit'>Login</button>
                    </div>
                </form>
                <div className='go-signup'>
                    <span>New to Speak2Me? </span><Link id='sign-link' to='/signup'>Register</Link>
                </div>
            </div>
    </div>
  )
}

export default Login