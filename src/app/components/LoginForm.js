"use client";
import React, { useState } from "react";
import { Input, Button, Spinner } from "@nextui-org/react";

function LoginForm() {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
    // confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("Sory Somthing is wrong!");

  function updateLoginDetails(fields) {
    setLoginDetails({ ...loginDetails, ...fields });
  }

  console.log(loginDetails);

  async function handleLogin() {
    setIsLoading(true);
    setError("");

    try {
      const res = fetch("/api/login", {
        body: JSON.stringify(loginDetails),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status == 200) {
        push("/pay");
        return;
      } else {
        setError("Invalid Login: Password or email!");

        setTimeout(() => {
          setError("");
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  }

  return (
    <div className="flex flex-col rounded-lg p-5 min-w-90 border-slate-400/20">
      <h2 className="font-bold text-2xl my-2">Login</h2>
      {error && (
        <div className="p-4 flex justify-center items-center rounded-lg bg-rose-500/20 my-2 min-h-[60px] max-w-xs">
          <p className="text-sm text-red-500 font-semibold">{error}</p>
        </div>
      )}
      <form className="flex flex-col gap-4 min-w-[360px]">
        <Input
          type="email"
          label="Email Address"
          required
          variant="bordered"
          // defaultValue="example@mail.org"
          color="primary"
          className="max-w-xs"
          onChange={(e) => updateLoginDetails({ email: e.target.value })}
        />

        <Input
          type="email"
          label="Password"
          variant="bordered"
          color="primary"
          // defaultValue="example@mail.org"
          className="max-w-xs"
          onChange={(e) => updateLoginDetails({ password: e.target.value })}
        />
        <Button
          onClick={async () => {
            await handleLogin();
          }}
          disabled={isLoading}
          className="max-w-xs font-semibold text-white bg-sky-500"
        >
          {isLoading ? <Spinner size="sm" color="white" /> : "Login"}
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
