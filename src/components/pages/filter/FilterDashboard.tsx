import { useState } from "react";
import PatientsTable from './PatientsTable'
import Sidebar from './Sidebar'
import { CompleteRecord } from '../../../types/index'


interface FilterDashboardProps {
  visibleData: CompleteRecord[];
  setVisibleData: React.Dispatch<React.SetStateAction<CompleteRecord[]>>;
} 

const FilterDashboard: React.FC<FilterDashboardProps> = () => {
  const [visibleData, setVisibleData] = useState<CompleteRecord[]>([]);
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-50 to-slate-400">
    <div className="flex">
      <Sidebar visibleDataCount={visibleData.length} setVisibleData={setVisibleData}/>
      <div className="flex-1 p-8">
        <PatientsTable visibleData={visibleData} setVisibleData={setVisibleData}/>
      </div>
    </div>
    </div>
  );
};

export default FilterDashboard;
