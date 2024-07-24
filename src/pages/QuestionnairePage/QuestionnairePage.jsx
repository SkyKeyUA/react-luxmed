import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Step from '../../components/Step/Step';
import './QuestionnairePage.css';
import FirstStep from '../../components/OrthopedicForm/Steps/FirstStep';
import SecondStep from '../../components/OrthopedicForm/Steps/SecondStep';
import ThirdStep from '../../components/OrthopedicForm/Steps/ThirdStep';
import FourthStep from '../../components/OrthopedicForm/Steps/FourthStep';

function QuestionnairePage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const stepBackward = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const stepForward = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const submitForm = () => {
    navigate('/submit');
  };

  useEffect(() => {
    const steps = document.querySelectorAll('.StepLabel');

    steps.forEach((step, index) => {
      step.classList[`${index < currentStep ? 'add' : 'remove'}`]('Active');
    });
  }, [currentStep]);

  return (
    <div className="QuestionnairePage">
      <div className="Title">
        <h1>LUXMED Sign Up Form</h1>
      </div>
      <div className="Panel">
        <div className="Steps">
          <Step>Personal details</Step>
          <Step>Clinic details</Step>
          <Step>Questionaire</Step>
          <Step>Products</Step>
          <div className="ProgressBar">
            <span className="Indicator"></span>
          </div>
        </div>
      </div>
      {currentStep === 1 && <FirstStep></FirstStep>}
      {currentStep === 2 && <SecondStep></SecondStep>}
      {currentStep === 3 && <ThirdStep></ThirdStep>}
      {currentStep === 4 && <FourthStep></FourthStep>}
      <div className="Buttons">
        <Button
          id={'prev'}
          styling={'basic'}
          onClick={stepBackward}
          disabled={currentStep < 2}
        >
          Back
        </Button>
        <Button
          id={'next'}
          styling={'accent'}
          onClick={currentStep > 3 ? submitForm : stepForward}
          // disabled={currentStep > 3}
        >
          {currentStep > 3 ? 'Submit' : 'Next'}
        </Button>
      </div>
    </div>
  );
}

export default QuestionnairePage;
