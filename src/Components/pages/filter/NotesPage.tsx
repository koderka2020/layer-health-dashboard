import { useState, useRef, useEffect, useContext } from "react";
import { Context } from "../../../Contexts/Context";
import { convertDate } from "../../../utils/tableFunc";

const NotesPage: React.FC = () => {
  const { currPatient } = useContext(Context);
  if (!currPatient) return <div>No patient selected</div>;

  const { name, gender, date_of_birth: dob, notes } = currPatient;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const popupRef = useRef<HTMLDivElement>(null);

  // Close popup on click outside
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setOpenIndex(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="p-10">
      <div className="p-5">
        <ul>
          <li className="font-bold underline">Patient Info</li>
          <li>Patient: {name}</li>
          <li>DOB: {dob}</li>
          <li>Gender: {gender}</li>
        </ul>
      </div>

      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          <thead className="bg-gray-100 sticky top-0">
            <tr>
              <th>Provider</th>
              <th>Hospital</th>
              <th>Recorded</th>
              <th>Note</th>
              <th>Full Note</th>
            </tr>
          </thead>
          <tbody>
            {notes.map((note, idx) => (
              <tr key={idx}>
                <td>{note.provider_name}</td>
                <td>{note.hospital_name}</td>
                <td>{convertDate(note.creation_date)}</td>
                <td>{note.text.slice(0, 200) + "..."}</td>
                <td className="relative">
                  {/* Open popup */}
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="select-none rounded-lg bg-gray-700 py-1 px-4 text-center text-xs uppercase text-white shadow-lg hover:shadow-lg transition"
                  >
                    Open Note
                  </button>

                  {/* Popup */}
                  {openIndex === idx && (
                    <div
                      ref={popupRef}
                      onMouseLeave={() => setOpenIndex(null)}
                      className="absolute z-50 right-full mt-1 p-4 bg-white border rounded-lg shadow-lg 
                                w-[50vw] max-w-[700px] max-h-[70vh] overflow-auto whitespace-pre-wrap break-words"
                    >
                      {note.text}
                      <button className="btn btn-md bg-green-600 text-white mt-4 shadow-lg hover:shadow-lg transition">
                        Print
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NotesPage;
