import useToast from "@store/useToast";
import { HTMLProps, FunctionComponent as FC } from "react";

export interface BrowserToastProps extends HTMLProps<HTMLDivElement> {
  //
}

const ToastProvider: FC<BrowserToastProps> = (props) => {
  const { children } = props;
  const toast = useToast();

  return (
    <div>
      {toast.isOpen && (
        <div className="fixed top-3/4 -translate-y-1/2 left-1/2 -translate-x-1/2 min-w-[50vw] bg-black bg-opacity-70 text-white rounded px-2 py-1 text-center">
          {toast.children}
        </div>
      )}
      {children}
    </div>
  );
};

export default ToastProvider;
