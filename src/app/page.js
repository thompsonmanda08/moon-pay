import { Input, Button } from "@nextui-org/react";
import LoginForm from "./components/LoginForm";

export default function Home() {
  return (
    <main className="flex overflow-hidden min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm ">
        <h1 className="fixed left-0 top-0 flex w-full justify-center border-b pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:p-4 lg:dark:bg-zinc-800/30 font-bold text-2xl">
          MOON-PAY
        </h1>
        <div className="w-full h-[70svh] grid place-items-center">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
