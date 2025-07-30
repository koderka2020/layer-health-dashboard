import { useEffect, useState, useRef } from "react";
import notes from '../../../data/mock_notes_small.json'
import patients from '../../../data/mock_patients_small.json'


const ROWS_PER_PAGE = 12; // number of rows to load at once

const Table = () => {
  const [visibleData, setVisibleData] = useState<any[]>([]);
  // const [pageData, setPageData] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Lazy load first batch
  useEffect(() => {
    
    const sortedPatients = patients.sort((a,b)=>a.name.split(' ')[1].toLowerCase().localeCompare(b.name.split(' ')[1].toLowerCase()))
    setVisibleData(sortedPatients.slice(0, ROWS_PER_PAGE));
  }, []);


  return(
    <div>
      <div 
        className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100"
        ref={containerRef}
        >
        <table className="table">
          {/* head */}
          <thead className="bg-gray-100 sticky top-0">
            <tr>
              <th>Name</th>
              <th>DOB</th>
              <th>gender</th>
              <th>Provider</th>
              <th>Hospital</th>
              <th>Recorded</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {visibleData.map((patient) => (
              <tr>
                <td>{patient.name}</td>
                <td>{patient.date_of_birth}</td>
                <td>{patient.gender}</td>
                <td>{patient.provider}</td>
                <td>{patient.hospital}</td>
                <td>{patient.date}</td>
                <td>
                  <button className="btn btn-sm">OPEN</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
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


export default Table