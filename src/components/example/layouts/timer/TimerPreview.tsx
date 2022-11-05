import MainButton, { DangerButton } from "@styles/button";
import useTimer from "@utils/common/timer";
// import Timer from "@utils/common/timer-src";
import useToast from "@utils/common/toast/store/useToast";
import { useEffect, useState } from "react";

const TimerPreview = () => {
  const toast = useToast();
  const [timerService, Timer] = useTimer();

  const [showsTimer, setShowsTimer] = useState<boolean>(false);

  useEffect(() => {
    timerService.setInitialMinutes(1);
    timerService.setInitialSeconds(3);
  }, []);

  return (
    <div>
      <h1>TimerPreview</h1>
      <div>
        <MainButton
          onClick={() => {
            setShowsTimer(true);
            timerService.start();
          }}
        >
          {showsTimer ? "Restart" : "Start"}
        </MainButton>
        <DangerButton
          onClick={() => {
            timerService.pause();
          }}
        >
          Pause
        </DangerButton>
      </div>
      {/* initialMinute만 적으면: 2분 입력 시 1분 59초로 시작 */}
      {showsTimer && (
        // <Timer
        //   initialMinute={0}
        //   initialSecond={5}
        //   pauseState={pause}
        //   boxClassName="w-20"
        //   timeoutEventHandler={() => {
        //     toast.open("완료");
        //   }}
        // />
        <Timer />
      )}
    </div>
  );
};

export default TimerPreview;
