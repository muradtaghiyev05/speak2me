import Logo from '../../assets/images/logo.png'
import Avatar from '../../assets/images/zelenski.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {

    const [login, setLogin] = useState(false);

  return (
    <div className='header' main='header'>
        <div className='header-container'>
            <Link to='/' className='header-left'>
                <div className='img-container'>
                    <img src={Logo} alt='logo' />
                </div>
                <h1>Speak2Me</h1>
            </Link>
            <div className='header-middle'>
                <ul>
                    <li><Link to='/price'><span id='dollar'>$</span> Go Premium</Link></li>
                    <li><Link to='/what-we-do'>What we do?</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                </ul>
            </div>
            <div className='header-right'>
                {login ? (
                    <>
                        <div className='avatar-container'>
                            <img src={Avatar} alt='avatar' />
                        </div>
                        <span>Vugar Abdulali</span>
                    </>
                ) : (
                    <>
                        <div className='login-container'>
                            <Link to='/login'>Login</Link>
                        </div>
                        <div className='sign-container'>
                            <Link to='/signup'>Sign Up</Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    </div>
  )
}

export default Header