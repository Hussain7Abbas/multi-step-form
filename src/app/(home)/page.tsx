import StepperHeader from '@/components/stepperHeader';

export default function Home() {
  const steps = [
    { id: 1, name: 'User Information' },
    { id: 2, name: 'Additional Information' },
    { id: 3, name: 'Summary' },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen px-8 md:px-16">
      <div className="w-full max-w-5xl min-w-96 h-full max-h-[80%] min-h-80 overflow-auto p-16 bg-neutral-50 rounded-2xl shadow-md">
        <StepperHeader steps={steps} activeStep={1} />
      </div>
    </div>
  );
}
