import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Step from '../../components/Step/Step';
import './QuestionnairePage.css';
import OrtFirstStep from '../../components/OrthopedicForm/Steps/FirstStep';
import OrtSecondStep from '../../components/OrthopedicForm/Steps/SecondStep';
import OrtThirdStep from '../../components/OrthopedicForm/Steps/ThirdStep';
import OrtFourthStep from '../../components/OrthopedicForm/Steps/FourthStep';

import AesFirstStep from '../../components/AestheticForm/Steps/FirstStep';
import AesSecondStep from '../../components/AestheticForm/Steps/SecondStep';
import AesThirdStep from '../../components/AestheticForm/Steps/ThirdStep';
import AesFourthStep from '../../components/AestheticForm/Steps/FourthStep';

function QuestionnairePage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const category = true;
  // const [category, setCategory] = useState('aesthetic');

  const { register, handleSubmit } = useForm({
    defaultValues: {},
  });

  const submit = (data) => {
    //You need to dispatch your from data here
    console.log('Those form data were submitted:');
    console.log(data);
  };

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
      <form id="client-data" method="post" onSubmit={handleSubmit(submit)}>
        {category === 'aesthetic' ? (
          <>
            {/* Aesthetic Form */}
            {currentStep === 1 && (
              <AesFirstStep register={register}></AesFirstStep>
            )}
            {currentStep === 2 && (
              <AesSecondStep register={register}></AesSecondStep>
            )}
            {currentStep === 3 && (
              <AesThirdStep register={register}></AesThirdStep>
            )}
            {currentStep === 4 && (
              <AesFourthStep register={register}></AesFourthStep>
            )}
          </>
        ) : (
          <>
            {/* Orthopeadic Form  */}
            {currentStep === 1 && (
              <OrtFirstStep register={register}></OrtFirstStep>
            )}
            {currentStep === 2 && (
              <OrtSecondStep register={register}></OrtSecondStep>
            )}
            {currentStep === 3 && (
              <OrtThirdStep register={register}></OrtThirdStep>
            )}
            {currentStep === 4 && (
              <OrtFourthStep register={register}></OrtFourthStep>
            )}
          </>
        )}
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
          >
            {currentStep > 3 ? 'Submit' : 'Next'}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default QuestionnairePage;
