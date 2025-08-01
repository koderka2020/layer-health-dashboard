import PatientsTable from "./PatientsTable";
import Sidebar from "./Sidebar";


const FilterDashboard: React.FC = () => {

  return (
    <div className="h-screen bg-gradient-to-r from-yellow-50 to-slate-400">
      <div className="flex">
        <Sidebar />
      <div className="flex-1 p-10">
        <PatientsTable />
      </div>
      </div>
    </div>
  );
};

export default FilterDashboard;
