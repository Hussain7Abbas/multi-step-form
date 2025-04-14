import { HomeForm } from './components/home-form';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-8 md:px-16">
      <div className="w-full max-w-5xl min-w-96 h-full max-h-[80%] min-h-80 overflow-auto p-16 bg-neutral-50 rounded-2xl shadow-md">
        <HomeForm />
      </div>
    </div>
  );
}
