import { useRef } from "react";
import { useContext } from "react";
import { Context } from '../../../contexts/Context';
import {convertDate} from '../../../utils/tableFunc'


const NotesPage: React.FC = () => {
  const { currPatient } = useContext(Context)
  if (!currPatient) return <div>No patient selected</div>;
  const { name, gender, date_of_birth:dob, notes} = currPatient

  
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="p-10">
      <>
      <div className="p-5">
        <ul>
          <li className="font-bold underline">Patient Info</li>
          <li><p></p>Patient: {name}</li>
          <li><p></p>DOB: {dob}</li>
          <li><p></p>Gender: {gender}</li>
        </ul>
      </div>
      </>
      <div 
        className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100"
        ref={containerRef}
        >
        <table className="table">
          {/* head */}
          <thead className="bg-gray-100 sticky top-0">
            <tr>
              <th>Provider</th>
              <th>Hspital</th>
              <th>Recorded</th>
              <th>Note</th>
              <th>Full Note</th>
            </tr>
          </thead>
          <tbody>
            {notes.map((note) => (
              <tr>
                <td>{note.provider_name}</td>
                <td>{note.hospital_name}</td>
                <td>{convertDate(note.creation_date)}</td>
                <td>{note.text.slice(0,200) + '...'}</td>
                <td>
                {/*  to view full details - popup window */}
                  <button data-ripple-light="true" data-popover-target="popover"
                    className="select-none rounded-lg bg-gray-700 py-1 px-4 text-center align-middle font-sans text-xs uppercase text-white shadow-lg shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Open Note
                  </button>
                  <div data-popover="popover"
                    className="absolute inset-0 p-2 w-50 h-30 break-words whitespace-normal bg-white border rounded-lg shadow-lg text-blue-gray-500 shadow-blue-gray-500/10 focus:outline-none">
                      {note.text}
                  </div> 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <button className="btn btn-md">Print Records</button>
      </div>
  )
}

export default NotesPage;