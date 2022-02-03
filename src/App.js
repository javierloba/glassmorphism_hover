import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// este es para fas: import {  } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faWhatsapp, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <section>
      <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>
      <ul>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default App;
