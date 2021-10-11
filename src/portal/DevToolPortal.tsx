import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import { usePortal } from "./usePortal";

interface DevToolPortalProps {
  children: ReactNode;
}

/**
 * Component that allows rendering children into an element outside the normal rendering tree.
 * @param children Children components to render.
 */
export const DevToolPortal: FC<DevToolPortalProps> = ({ children }) => {
  const target = usePortal("react-app-devtools");
  return createPortal(children, target);
};
