import microphone from '../images/microphone.png';
import setting from '../images/settings.png';

function Nav() {
  return (
    <div className="navIcons">
      <img src={microphone} alt="Microphone" className="icons" />
      <img src={setting} alt="Settings" className="icons" />
    </div>
  );
}

export default Nav;
