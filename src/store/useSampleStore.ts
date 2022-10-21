import create from "zustand";

interface SampleState {
  num: number;
  setNum: (num: number) => void;
  increase: () => void;
}

const useSampleStore = create<SampleState>((set, get) => ({
  num: 0,
  setNum: (num) => {
    set({ num });
  },
  increase: () => {
    const state = get();
    set({ num: state.num + 1 });

    // get()을 쓰지 않고 다음 형태도 가능
    // set((state) => ({num: state.num + 1}));
  },
  // EOF
}));
