import useRefEffect from "@utils/useRefEffect";
import { useEffect, useRef, useState } from "react";

const OTPForm = () => {
  const otpRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    otpRef.current?.focus();
  }, [otpRef.current]);

  useRefEffect(() => {}, [otpRef.current]);

  return (
    //
    <div className="flex flex-col gap-4">
      <span>Input OTP in 3 min.</span>
      <fieldset className="grid grid-cols-4">
        <span>OTP</span>
        <input
          name="otp"
          ref={otpRef}
          onChange={(event) => {
            if (!otpRef.current) {
              return;
            }

            otpRef.current.value = event.target.value.replaceAll(/[^0-9]/g, "");
          }}
          autoComplete="off"
          maxLength={6}
          className="col-span-3 border-b border-b-gray-300 focus:border-b-dark duration-150 outline-none"
        />
      </fieldset>
    </div>
  );
};

export default OTPForm;
