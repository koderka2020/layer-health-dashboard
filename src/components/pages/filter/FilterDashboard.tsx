import Table from './Table'
import Sidebar from './Sidebar'

const FilterDashboard = () => {

  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-1 p-8">
        <Table/>
      </div>
    </div>
  );
};

export default FilterDashboard;
