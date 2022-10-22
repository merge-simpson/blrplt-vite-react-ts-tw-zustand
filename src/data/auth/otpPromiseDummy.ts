const generateOTP = () => {
  const numStr = Math.floor(Math.random() * 1_000_000).toString();
  return "0".repeat(6 - numStr.length) + numStr;
};

const getOTPPromiseDummy = (userName: string) => {
  (window as any).DB_DUMMY.otpMap = {
    [userName]: generateOTP(),
  };
  console.log("otp map >>> ", (window as any).DB_DUMMY.otpMap);

  return new Promise<{ data: boolean }>((resolve, reject) => {
    resolve({ data: true });
  });
};

export default getOTPPromiseDummy;
