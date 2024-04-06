"use client";
import React, { useState } from "react";

import { Input, Button, Spinner } from "@nextui-org/react";

function Pay() {
  const [isLoading, setIsLoading] = useState(false);
  function handlePayment() {}
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="p-5 border border-slate-400/20 rounded-lg w-96 flex flex-col gap-5 justify-center items-center">
        <p className="text-center font-semibold">
          Software Development Course <br />K 300/month
        </p>

        <Button
          onClick={handlePayment}
          disabled={isLoading}
          color={"primary"}
          className="max-w-xs font-semibold text-white"
        >
          {isLoading ? <Spinner size="sm" color="white" /> : "Pay Now"}
        </Button>
      </div>
    </div>
  );
}

export default Pay;
