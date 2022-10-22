const generateOTP = () => {
  const numStr = Math.floor(Math.random() * 1_000_000).toString();
  return "0".repeat(6 - numStr.length) + numStr;
};

const getOTPPromiseDummy = (userName: string) => {
  (getOTPPromiseDummy as any).DB_DUMMY.otpMap = {
    [userName]: generateOTP(),
  };
};

export default getOTPPromiseDummy;
