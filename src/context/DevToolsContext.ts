import React from "react";

export interface DevToolsContextState {
  registerDevTools(id: string, children: React.ReactNode): void;
  unregisterDevTools(id: string): void;
}

export const DevToolsContext = React.createContext<DevToolsContextState | null>(
  null
);
