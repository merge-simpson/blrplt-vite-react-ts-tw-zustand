import getOTPPromiseDummy from "./otpPromiseDummy";

const getLoginPromiseDummy = (otp: string, userName: string) =>
  new Promise<{ data: any }>((resolve, reject) => {
    const userDummy = {
      userName,
      fullName: "홍길동",
      nickname: "호부호형의꿈",
    };

    const hasCorrectOTP = otp === (window as any).DB_DUMMY.otpMap[userName];

    if (hasCorrectOTP) {
      const error = new Error(`OTP not correct.`);
      reject(error);
    }

    const responseDummy = { data: { ...userDummy } };
    resolve(responseDummy);
    delete (window as any).DB_DUMMY.otpMap[userName];
  });

export default getLoginPromiseDummy;
