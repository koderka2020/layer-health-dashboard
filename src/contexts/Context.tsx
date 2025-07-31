// import { createContext, useState, useContext, ReactNode } from 'react';
// import {CompleteRecord} from '../types/index'

// //Context 
// interface ContextType {
//   currPatient: CompleteRecord | null;
//   setPatient: (newData: string) => void;
// }

// const PatientContext = createContext<ContextType | undefined>(undefined)

// //Provider
// interface ProviderProps {
//   children: ReactNode;
// }


// export const Provider = ({ children }: ProviderProps) => {
//   const [ currPatient, setPatient ] = useState<CompleteRecord | null>(null)
//   return (
//     <PatientContext.Provider value={{ currPatient, setPatient }}>
//       {children}
//     </PatientContext.Provider>
//   );
// };

// // Custom hook to use the UserContext
// export const usePatientContext = () => {
//     const context = useContext(PatientContext);
//     if (!context) {
//         throw new Error('useUserContext must be used within a UserContextProvider');
//     }
//     return context;
// };