import { nanoid } from "nanoid";
import { FC, ReactNode, useEffect, useMemo } from "react";
import { useDevToolsContext } from "./context";

interface DevToolProps {
  children?: ReactNode;
}

export const DevTool: FC<DevToolProps> = ({ children }) => {
  const devToolsContext = useDevToolsContext();
  const generatedId = useMemo(() => nanoid(), []);
  useEffect(() => {
    devToolsContext?.registerDevTools(generatedId, children);
    return () => devToolsContext?.unregisterDevTools(generatedId);
  }, [children, devToolsContext, generatedId]);
  return null;
};
