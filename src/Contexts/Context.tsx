import React, { createContext, useState, ReactNode } from 'react';
import {CompleteRecord} from '../types/index'

//Context 
interface ContextProps {
  currPatient: CompleteRecord | null;
  setPatient: React.Dispatch<React.SetStateAction<CompleteRecord | null>>;
  visibleData: CompleteRecord[]; 
  setVisibleData: React.Dispatch<React.SetStateAction<CompleteRecord[]>>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext<ContextProps>({
  currPatient: null,
  setPatient: () => {},
  visibleData: [],
  setVisibleData: () => {},
});



//Provider
export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [ currPatient, setPatient ] = useState<CompleteRecord | null>(null);
  const [visibleData, setVisibleData] = useState<CompleteRecord[]>([]);

  return (
    <Context.Provider value={{ currPatient, setPatient, visibleData, setVisibleData }}>
      {children}
    </Context.Provider>
  );
};
