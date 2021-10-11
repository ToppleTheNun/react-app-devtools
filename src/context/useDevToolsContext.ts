import { useContext } from "react";
import warning from "tiny-warning";
import { DevToolsContext } from "./DevToolsContext";

export const useDevToolsContext = () => {
  const devToolsContext = useContext(DevToolsContext);
  warning(
    devToolsContext === null,
    "Using DevToolsContext outside of a DevToolsContext provider"
  );
  return devToolsContext;
};
