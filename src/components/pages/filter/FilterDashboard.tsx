import Table from './Table'
import Sidebar from './Sidebar'

const FilterDashboard = () => {

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-50 to-slate-400">
    <div className="flex">
      <Sidebar/>
      <div className="flex-1 p-8">
        <Table/>
      </div>
    </div>
    </div>
  );
};

export default FilterDashboard;
