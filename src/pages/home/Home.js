import SearchIcon from '../../assets/images/search-bar.svg'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const Home = () => {

  const {
    transcript,
  } = useSpeechRecognition();

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
          {transcript ? (
            <p>{transcript}</p>
          ) : (
            <p>Your speech will be converted to text...</p>
          )}
        </div>
        <div className='mic-container'>
          <div className="container">
            <span id="mic">Speak:</span>
            <div className="toggle-switch">
              <input onChange={(e) => e.target.checked ? SpeechRecognition.startListening({ continuous: true }) : SpeechRecognition.stopListening()} type="checkbox" className="checkbox"
                    name='speak' id='speak' />
                <label className="label" htmlFor='speak'>
                    <span className="inner" />
                    <span className="switch" />
                </label>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home