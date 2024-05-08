import { ReactNode, createContext, useContext, useState } from "react";

type SidebarProviderProps = {
  children: ReactNode;
};

type SidebarContextType = {
  isLargeOpen: boolean;
  isSmallOpen: boolean;
  toggle: () => void;
  close: () => void;
};

const SidebarContext = createContext<SidebarContextType | null>(null);

export function useSidebarContext() {
  const value = useContext(SidebarContext);
  if (value == null) throw Error("Cannot use outside of the SidebarProvider");

  return value;
}

const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isLargeOpen, setIsLargeOpen] = useState(true);
  const [isSmallOpen, setIsSmallOpen] = useState(false);

  function isScreenSmall() {
    return window.innerWidth < 1024; // this 1024 comes directly from tailwind
  }

  function toggle() {
    if (isScreenSmall()) {
      setIsLargeOpen((s) => !s); // make the oposite from actually is
    } else {
      setIsLargeOpen((l) => !l); // the same oposite
    }
  }

  function close() {
    if (isScreenSmall()) {
      setIsSmallOpen(false);
    } else {
      setIsLargeOpen(false);
    }
  }

  return (
    <SidebarContext.Provider
      value={{
        isLargeOpen,
        isSmallOpen,
        toggle,
        close,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
