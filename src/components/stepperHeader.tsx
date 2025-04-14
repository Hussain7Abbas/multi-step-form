import React from 'react';

interface StepperHeaderProps {
  steps: { id: number; name: string }[];
  activeStep: number;
}

const StepperHeader = ({ steps, activeStep = 1 }: StepperHeaderProps) => {
  return (
    <div className="flex items-center justify-between md:mx-16">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div className="flex flex-col items-center relative">
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
          </div>

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

export default StepperHeader;
