import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../../contexts/Context";
import patients from "../../../data/mock_patients.json";
import { CompleteRecord } from "../../../types/index";
import { agregate, convertDate, ROWS_PER_PAGE } from "../../../utils/tableFunc";



const PatientsTable: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  //context state:
  const { setPatient, visibleData, setVisibleData } = useContext(Context);


  // NEW: Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  // const [completeDataCount, setTotalCount] = useState(0);

  // Full dataset (aggregated)
  const fullDataRef = useRef<CompleteRecord[]>([]);

  const handleClick = (patientInfo: CompleteRecord) => {
    //update state - context
    setPatient(patientInfo)
  };

  // Load first page + prepare full data
  useEffect(() => {
    const patient_ids = patients.map((p) => p.id);
    const completeData = agregate(patient_ids);
    // setTotalCount(patient_ids.length)

    fullDataRef.current = completeData;
    setTotalPages(Math.ceil(completeData.length / ROWS_PER_PAGE));

    setVisibleData(completeData.slice(0, ROWS_PER_PAGE));
  }, []);

  // Handle page change
  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    const startIndex = (page - 1) * ROWS_PER_PAGE;
    const endIndex = startIndex + ROWS_PER_PAGE;

    setVisibleData(fullDataRef.current.slice(startIndex, endIndex));

    // Scroll back to top of table (optional)
    containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div
        className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100"
        ref={containerRef}
      >
        <table className="table">
          <thead className="bg-gray-200 sticky top-0">
            <tr>
              <th>Name</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>NotesPage</th>
            </tr>
          </thead>
          <tbody>
            {visibleData.map((patient: CompleteRecord) => (
              <tr key={patient.id}>
                <td>{patient.name}</td>
                <td>{convertDate(patient.date_of_birth)}</td>
                <td>{patient.gender}</td>
                <td>
                  <Link to="/notes">
                    <button key={patient.id} className="btn btn-sm" onClick={() => handleClick(patient)}>
                      Open
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination controls */}
      <div className="join p-3 flex justify-center gap-2">
        <button
          className="join-item btn"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {/* Page numbers (simple version) */}
        {[...Array(totalPages)].slice(0, 5).map((_, idx) => {
          const pageNum = idx + 1;
          return (
            <button
              key={pageNum}
              className={`join-item btn ${currentPage === pageNum ? "btn-primary" : ""}`}
              onClick={() => goToPage(pageNum)}
            >
              {pageNum}
            </button>
          );
        })}

        <button
          className="join-item btn"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PatientsTable;
