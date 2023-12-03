import React, { createContext, useEffect, useReducer, useContext } from "react";

interface GlobalContextState {
  theme: string;
}

export type GlobalActions = {
  type: "toggleTheme";
};

const initialState: GlobalContextState = {
  theme: "light",
};

const initialContext: {
  globalState: GlobalContextState;
  setGlobalState: React.Dispatch<GlobalActions>;
} = {
  globalState: initialState,
  setGlobalState: () => { },
};

const GlobalContext = createContext(initialContext);
const reducer = (state: GlobalContextState, actions: GlobalActions) => {
  switch (actions.type) {
    case "toggleTheme":
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      };
    default:
      return state;
  }
};

export function GlobalProvider({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const [state, dispatch] = useReducer<
    (state: GlobalContextState, actions: GlobalActions) => GlobalContextState
  >(reducer, initialState);

  const globalState = state;
  const setGlobalState: React.Dispatch<GlobalActions> = dispatch;

  useEffect(() => {
    const theme = window.localStorage?.theme || "light";

    let isMounted = true
    if (isMounted && (theme !== state.theme))
      setGlobalState({
        type: "toggleTheme",
      });
    return () => {isMounted = false}
  }, []);

  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalTheme = () => useContext(GlobalContext);
