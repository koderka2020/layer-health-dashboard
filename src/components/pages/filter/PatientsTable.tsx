import { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
// import { usePatientContext } from '../../../contexts/Context';
import patients from '../../../data/mock_patients_small.json'
import { CompleteRecord } from '../../../types/index'
import {agregate, convertDate, ROWS_PER_PAGE} from '../../../utils/tableFunc'


interface PatientsTableProps {
  visibleData: CompleteRecord[];
  setVisibleData: React.Dispatch<React.SetStateAction<CompleteRecord[]>>;
} 

const PatientsTable: React.FC<PatientsTableProps> = ({visibleData, setVisibleData}) => {
  // const [visibleData, setVisibleData] = useState<CompleteRecord[]>([]);
  // const {setPatient} = usePatientContext()

  // const [pageData, setPageData] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = (patientInfo: CompleteRecord) => {
    //update state in context
    // setPatient(patientInfo)
    console.log(patientInfo)
  }

  // Load first page
  useEffect(() => {
    const patient_ids = patients.map( p => p.id)
    const completeData = agregate(patient_ids)
    setVisibleData(completeData.slice(0, ROWS_PER_PAGE));
  }, []);


  return(
    <div>
      <div 
        className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100"
        ref={containerRef}
        >
        <table className="table">
          {/* head */}
          <thead className="bg-gray-200 sticky top-0">
            <tr>
              <th>Name</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>NotesPage</th>
            </tr>
          </thead>
          <tbody>
            {visibleData.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.name}</td>
                <td>{convertDate(patient.date_of_birth)}</td>
                <td>{patient.gender}</td>
                <td>
                  <Link to="/notes">
                    <button className="btn btn-sm" onClick={()=> handleClick(patient)}>Open </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        {/* TO_DO: paginate results */}
        <div className="join p-3">
          <button className="join-item btn">1</button>
          <button className="join-item btn">2</button>
          <button className="join-item btn btn-disabled">...</button>
          <button className="join-item btn">99</button>
          <button className="join-item btn">100</button>
        </div>
    </div>
  )
}


export default PatientsTable