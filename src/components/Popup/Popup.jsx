import './Popup.css';

function Popup({ children }) {
  return <div id="overlay">{children}</div>;
}

export default Popup;
