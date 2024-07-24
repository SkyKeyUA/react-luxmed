import './Button.css';

function Button({ children, styling, disabled, onClick }) {
  const getStyle = (styling) => {
    switch (styling) {
      case 'accent':
        return { backgroundColor: '#20655a', color: '#ffffff' };
      case 'light':
        return { backgroundColor: 'rgba(32, 101, 90, 0.2)', color: '#20655A' };
      case 'white':
        return {
          backgroundColor: '#FFFFFF',
          color: '#20655A',
          border: '1px solid #20655A',
        };
      default:
        return { backgroundColor: 'rgba(51, 51, 51, 0.1)', color: '#222222' };
    }
  };

  return (
    <div>
      <button
        className="Button"
        style={getStyle(styling)}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
