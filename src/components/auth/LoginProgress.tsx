import AuthInfo from "@models/auth/dto/AuthInfo";
import LoginOutletContext from "@models/auth/routes/LoginOutletContext";
import LoginOutletParams from "@models/auth/routes/LoginOutletParams";
import LoginStepName from "@models/auth/routes/LoginStepName";
import useRefEffect from "@utils/common/useRefEffect";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Outlet, useParams } from "react-router-dom";
import { loginStep } from "@utils/auth/routes/LoginOutletComponents";
import LoginButtonGroup from "./button/LoginButtonGroup";
import useLoginNavigate from "@utils/auth/routes/useLoginNavigate";

const LoginProgress = () => {
  const params = useParams() as LoginOutletParams;
  const loginNavigate = useLoginNavigate();

  const userNameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isLastStep, setIfLastStep] = useState<boolean>(false);
  const [authInfo, setAuthInfo] = useState<AuthInfo>({
    userName: "",
    password: "",
  });

  // Just mount or unmount
  useEffect(() => {
    if (!!authInfo.userName && !!userNameRef.current) {
      userNameRef.current.value = authInfo.userName;
    }
    if (!!authInfo.password && !!passwordRef.current) {
      passwordRef.current.value = authInfo.password;
    }
    userNameRef.current?.focus();
  }, [userNameRef.current]);

  // tracking if value changed
  useRefEffect(() => {
    setAuthInfo({
      userName: userNameRef.current?.value ?? "",
      password: passwordRef.current?.value ?? "",
    });
  }, [userNameRef.current, passwordRef.current]);

  // parse params
  useLayoutEffect(() => {
    let currentStep = loginStep.indexOf(params.stepName as LoginStepName);
    if (authInfo.userName === "" && currentStep > 0) {
      loginNavigate(0);
    }

    currentStep = currentStep < 0 ? 0 : currentStep;
    const isLastStep = currentStep + 1 === loginStep.length;
    setCurrentStep(currentStep);
    setIfLastStep(isLastStep);
  }, [params]);

  // on next button
  const proceedByStepName = useCallback(() => {
    const stepName = params.stepName as LoginStepName | "";
    if (!stepName) {
      return;
    }

    const next = () => {
      if (!isLastStep) {
        loginNavigate(currentStep + 1);
        return;
      }

      localStorage.setItem(
        "auth",
        JSON.stringify({
          userName: userNameRef.current?.value,
          anotherAuthInfo: "something",
        })
      );
    };

    if (stepName === "auth") {
      const authPromise = new Promise<{ data: boolean }>((resolve, reject) =>
        resolve({ data: true })
      );

      authPromise
        .then(({ data }) => data)
        .then((ok) => {
          ok && next();
        })
        .catch(console.error);
    } else if (stepName === "otp") {
      const authPromise = new Promise<{ data: any }>((resolve, reject) =>
        resolve({ data: true })
      );

      authPromise
        .then(({ data }) => data)
        .then((ok) => {
          ok && next();
        })
        .catch(console.error);
    }
  }, [params, currentStep, isLastStep]);

  return (
    <div className="flex flex-col items-center gap-8 pt-16">
      <header>
        <h1 className="text-3xl font-bold">Login</h1>
      </header>
      <main className="p-8 w-full max-w-lg border shadow-md rounded-md">
        <form
          className="flex flex-col gap-8"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <Outlet
            context={{ userNameRef, passwordRef } as LoginOutletContext}
          />
          <div className="flex justify-end">
            <LoginButtonGroup
              isLast={isLastStep}
              hasCancel={currentStep > 0}
              proceed={proceedByStepName}
            />
          </div>
        </form>
      </main>
    </div>
  );
};

export default LoginProgress;
