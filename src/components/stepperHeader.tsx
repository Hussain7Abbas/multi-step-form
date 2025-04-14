import React from 'react';

const StepperHeader = () => {
  const steps = [
    { id: 1, name: 'Registration' },
    { id: 2, name: 'Personal Information' },
    { id: 3, name: 'Job Information' },
  ];

  const activeStep = 1;

  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div className="flex flex-col items-center relative">
            {/* Step circle */}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                activeStep >= step.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {step.id}
            </div>

            {/* Step label */}
            <div
              className={`mt-2 text-sm text-center w-40 absolute top-8 ${
                activeStep >= step.id ? 'text-blue-600 font-medium' : 'text-gray-500'
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
                  activeStep > step.id ? 'bg-blue-600' : 'bg-gray-200'
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
