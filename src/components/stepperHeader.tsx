import React from 'react';

export interface Step {
  id: number;
  name: string;
  noBackNavigate?: boolean;
  isFilled?: boolean;
}
interface StepperHeaderProps {
  steps: Step[];
  activeStep: number;
  setActiveStep: (step: number) => void;
}

export const StepperHeader = ({
  steps,
  activeStep = 1,
  setActiveStep,
}: StepperHeaderProps) => {
  function handleStepClick(stepId: number) {
    // handle back navigation
    if (activeStep > stepId && steps[stepId - 1].noBackNavigate) {
      return;
    }
    // handle forward navigation
    if (activeStep < stepId && !steps[stepId - 1].isFilled) {
      return;
    }
    setActiveStep(stepId);
  }

  return (
    <div className="flex items-center justify-between md:mx-16 mb-8">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <button
            type="button"
            className="flex flex-col items-center relative cursor-pointer"
            onClick={() => handleStepClick(step.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleStepClick(step.id);
              }
            }}
          >
            {/* Step circle */}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                activeStep >= step.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {step.id}
            </div>

            {/* Step label */}
            <div
              className={`mt-2 text-sm text-center w-40 absolute top-8 ${
                activeStep >= step.id ? 'text-primary font-medium' : 'text-gray-500'
              }`}
            >
              {step.name}
            </div>
          </button>

          {/* Connector line (except for the last step) */}
          {index < steps.length - 1 && (
            <div className="flex-1 h-1">
              <div
                className={`h-full ${
                  activeStep > step.id ? 'bg-primary' : 'bg-gray-200'
                }`}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
