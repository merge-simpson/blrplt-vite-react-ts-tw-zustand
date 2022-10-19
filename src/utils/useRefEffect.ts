import React, { useEffect } from "react";

type T = React.EffectCallback;
type P = React.DependencyList;

const useRefEffect = (callback: T, deps?: P) => {
  useEffect(() => {
    if (!deps) {
      callback();
      return;
    }

    for (const target of deps as HTMLElement[]) {
      if (!!target) {
        target.oninput = (event) => callback();
      }
    }
  }, deps);
};

export default useRefEffect;
