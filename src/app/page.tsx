import { Conversation } from './components/conversation';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">
          The Clinic Agent 
        </h1>
        <p className="text-center  pb-10">Set in appointment with your doctor</p>
        <Conversation />
      </div>
    </main>
  );
}
