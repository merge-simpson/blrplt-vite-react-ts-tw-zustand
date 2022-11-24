import { DarkButton } from "@styles/button";
import useMultiToast from "@utils/common/toast/store/useMultiToast";
import React, { useState } from "react";

const MultiToastPreview = () => {
  const multiToast = useMultiToast();
  const [c, setC] = useState(0);
  return (
    <form className="desc-input:outline-none desc-input:px-1 flex flex-col gap-2">
      <h1 className="my-2 text-2xl font-bold">Multi Toast Preview</h1>
      <fieldset className="grid grid-cols-4 gap-2">
        <DarkButton
          onClick={() => {
            setC((c) => c + 1);
            multiToast.open(`${c}) top toast message`);
          }}
        >
          TOP{" "}
        </DarkButton>
        <DarkButton
          onClick={() => {
            multiToast.open("bottom toast message", 5000, "BOTTOM");
          }}
        >
          BOTTOM
        </DarkButton>
      </fieldset>
    </form>
  );
};

export default MultiToastPreview;
