import './Step.css';

function Step({ children }) {
  return (
    <div className="StepLabel">
      <span className="Step">
        <div className="StepIcon"></div>
        {children}
      </span>
    </div>
  );
}

export default Step;
