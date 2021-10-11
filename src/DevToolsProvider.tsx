import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";
import { DevToolsContext, DevToolsContextState } from "./context";
import styles from "./DevTools.module.css";
import { DevToolPortal } from "./portal";

interface DevToolsProviderProps {
  children: ReactNode;
}

const addDevTools = (
  setPrevState: Dispatch<SetStateAction<Record<string, ReactNode>>>,
  id: string,
  devTools: ReactNode
) => {
  setPrevState((prevState) => {
    const newState = { ...prevState };
    newState[id] = devTools;
    return newState;
  });
};

const removeDevTools = (
  setPrevState: Dispatch<SetStateAction<Record<string, ReactNode>>>,
  id: string
) => {
  setPrevState((prevState) => {
    const newState = { ...prevState };
    delete newState[id];
    return newState;
  });
};

export const DevToolsProvider: FC<DevToolsProviderProps> = ({ children }) => {
  const [registeredDevTools, setRegisteredDevTools] = useState<
    Record<string, ReactNode>
  >({});
  const devToolsToRender = useMemo(
    () => Object.values(registeredDevTools),
    [registeredDevTools]
  );
  const registerDevTools = useCallback((id: string, devTools: ReactNode) => {
    addDevTools(setRegisteredDevTools, id, devTools);
  }, []);
  const unregisterDevTools = useCallback((id: string) => {
    removeDevTools(setRegisteredDevTools, id);
  }, []);
  const providedValue: DevToolsContextState = useMemo(
    () => ({ registerDevTools, unregisterDevTools }),
    [registerDevTools, unregisterDevTools]
  );

  if (!__DEV__) {
    return (
      <DevToolsContext.Provider value={null}>
        {children}
      </DevToolsContext.Provider>
    );
  }

  return (
    <DevToolsContext.Provider value={providedValue}>
      <DevToolPortal>
        <div className={styles["dev-tools"]}>
          <div className={styles.tools}>{devToolsToRender}</div>
          <div>🛠️</div>
        </div>
      </DevToolPortal>
      {children}
    </DevToolsContext.Provider>
  );
};
