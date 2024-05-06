"use client";
import React from "react";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface ContextProps {
  imageSlide: boolean;
  blogData: string;

  setBlogData: Dispatch<SetStateAction<string>>;
  setImageSlide: Dispatch<SetStateAction<boolean>>;
}

// const GlobalContext = createContext<ContextProps>({
//   imageSlide: true,
//   setImageSlide: () => {},
// });
const GlobalContext = createContext<ContextProps | undefined>(undefined);

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [imageSlide, setImageSlide] = useState(true);
  const [blogData, setBlogData] = useState("");
  return (
    <GlobalContext.Provider
      value={{ imageSlide, setImageSlide, blogData, setBlogData }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = (): ContextProps => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider"
    );
  }
  return context;
};
