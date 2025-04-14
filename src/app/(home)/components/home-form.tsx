'use client';
import { StepperHeader, type Step } from '@/components/stepperHeader';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { UserInfoStep } from './steps/user-info-step';

const initialSteps: Step[] = [
  { id: 1, name: 'User Information' },
  { id: 2, name: 'Additional Information', noBackNavigate: true },
  { id: 3, name: 'Summary' },
];

export function HomeForm() {
  const [activeStep, setActiveStep] = useState(1);
  const [steps, setSteps] = useState(initialSteps);

  function handleSubmit() {
    console.log('Submit');
  }

  function handleStepNext() {
    setActiveStep(activeStep + 1);
    if (activeStep === steps.length) {
      handleSubmit();
    }
  }

  function handleStepBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <div className="flex flex-col justify-between h-full w-full gap-4">
      {/* Header */}
      <StepperHeader
        steps={steps}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
      {/* Form */}
      <form onSubmit={handleStepNext} className="w-full h-full flex justify-center">
        {activeStep === 1 && <UserInfoStep />}
      </form>

      {/* Footer */}
      <div
        className={cn(
          'flex flex-row items-center justify-between w-full',
          activeStep === 1 && 'justify-center',
        )}
      >
        <Button onClick={handleStepBack} hidden={activeStep === 1}>
          Back
        </Button>
        <Button type="submit">
          {activeStep === steps.length ? 'Submit' : 'Next'}
        </Button>
      </div>
    </div>
  );
}
