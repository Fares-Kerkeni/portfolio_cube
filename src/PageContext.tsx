import React, { createContext, useState, useContext } from "react";

type PageContextType = {
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
};

const PageContext = createContext<PageContextType | undefined>(undefined);

export const usePageContext = (): PageContextType => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePageContext must be used within a PageContextProvider");
  }
  return context;
};

type PageContextProviderProps = {
  children: React.ReactNode;
};

export const PageContextProvider: React.FC<PageContextProviderProps> = ({
  children,
}) => {
  const [activePage, setActivePage] = useState<string>("all_countries");

  return (
    <PageContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </PageContext.Provider>
  );
};
