import React, { useEffect, useState } from "react";

const useRefEffect = (
  callback: React.EffectCallback,
  deps?: React.DependencyList
) => {
  useEffect(() => {
    if (!deps) {
      callback();
      return;
    }

    for (let i = 0; i < deps.length; i++) {
      const target = deps[i] as HTMLElement | null;

      if (!!target) {
        target.oninput = (event) => callback();
      }
    }
  }, deps);
};

export default useRefEffect;
