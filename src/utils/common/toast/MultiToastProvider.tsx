import useMultiToast from "@utils/common/toast/store/useMultiToast";
import { HTMLProps, FunctionComponent as FC } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface BrowserToastProps extends HTMLProps<HTMLDivElement> {
  //
}

const MultiToastProvider: FC<BrowserToastProps> = (props) => {
  const { children } = props;
  const multiToast = useMultiToast();

  return (
    <AnimatePresence>
      {multiToast?.childrenList?.map((toast, idx) => (
        <motion.div
          key={`${toast.message}_${idx}`}
          style={{
            zIndex: `${50 + idx}`,
            // FIXME
            top: `${toast.position - idx * 5}vh`,
          }}
          className={`fixed left-1/2  min-w-[50vw] bg-white text-black border border-gray-100 rounded-lg px-2 py-1 text-center`}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1.0, x: 25 }}
          exit={{ opacity: 0, x: 50 }}
        >
          <div className="flex items-center">
            <button onClick={() => multiToast.close(idx)}>&times;</button>
            <p className="flex-1">{toast.message}</p>
          </div>
        </motion.div>
      ))}
      {children}
    </AnimatePresence>
  );
};

export default MultiToastProvider;
