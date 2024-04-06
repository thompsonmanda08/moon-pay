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

  function updateLoginDetails(fields) {
    setLoginDetails({ ...loginDetails, ...fields });
  }

  console.log(loginDetails);

  async function handleLogin() {
    setIsLoading(true);

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
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col rounded-lg p-5 min-w-90 border-slate-400/20">
      <h2 className="font-bold text-2xl my-2">Login</h2>
      <div className="flex flex-col gap-4 min-w-[360px] ">
        <Input
          type="email"
          label="Email Address"
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
          onClick={handleLogin}
          disabled={isLoading}
          className="max-w-xs font-semibold text-white bg-sky-500"
        >
          {isLoading ? <Spinner size="sm" color="white" /> : " Login"}
        </Button>
      </div>
    </div>
  );
}

export default LoginForm;
