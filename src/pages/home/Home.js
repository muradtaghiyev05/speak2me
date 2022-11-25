import SearchIcon from '../../assets/images/search-bar.svg'
import MicIcon from '../../assets/images/microphone.svg'
import ToggleSwitch from '../../components/toggle/Toggle'
import { useState } from 'react'

const Home = () => {

  const [checked, setChecked] = useState(false);

  return (
    <div className="home" id="home">
      <div className="home-container">
        <form>
          <div className='search-container'>
            <input type='text' placeholder="Search..." />
            <button type='submit'>
              <img src={SearchIcon} alt='search' />
            </button>
          </div>
        </form>
        <div className='speech-container'>
          {checked ? (
            <p>You my start your speech...</p>
          ) : (
            <p>Your speech will be converted to text and displayed here!</p>
          )}
        </div>
        <div className='mic-container'>
          <ToggleSwitch setChecked={setChecked} label='Speak' />
        </div>
      </div>
    </div>
  )
}

export default Home