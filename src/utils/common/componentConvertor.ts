import React, {
  FunctionComponent as FC,
  ForwardRefRenderFunction,
} from "react";

type RefReturn<T, P> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<T>
>;

const componentConvertor = {
  bindToRef: <T, P>(funtionComponent: FC<P>): RefReturn<T, P> => {
    const refComponent = funtionComponent as ForwardRefRenderFunction<T, P>;
    return React.forwardRef<T, P>(refComponent);
  },
  //
};

export default componentConvertor;
