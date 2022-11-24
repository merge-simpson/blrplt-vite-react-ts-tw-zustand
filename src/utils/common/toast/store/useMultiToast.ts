import create from "zustand";

type Position = "TOP" | "BOTTOM";
interface MultiToastState {
  children: React.ReactNode;
  childrenList?: {
    priority: number;
    message: React.ReactNode;
    position: number;
  }[];
  currentTimeout: NodeJS.Timer | null;
  open: (children: React.ReactNode, duration?: number, pos?: Position) => void;
  close: (i: number) => void;
}

const useMultiToast = create<MultiToastState>((set, get) => ({
  children: "toast messege",
  childrenList: [],
  currentTimeout: null,
  open: (children, duration = 2000, pos = "TOP") => {
    const state = get();
    if (!!state.currentTimeout) {
      clearTimeout(state.currentTimeout);
    }
    const positioningMap = {
      TOP: 15,
      BOTTOM: 85,
    };
    const pushToast = () =>
      state?.childrenList?.push({
        priority: duration,
        message: children,
        position: positioningMap[pos],
      });
    pushToast();
    set({ children });

    const shiftToast = () =>
      state?.childrenList?.sort((l, r) => l.priority - r.priority).shift();
    const currentTimeout = setTimeout(() => {
      shiftToast();
      set({ children });
    }, duration);
  },
  // FIXME
  close: (i) => {
    const state = get();
    set({ childrenList: state.childrenList?.filter((_, idx) => i !== idx) });
  },
}));

export default useMultiToast;
