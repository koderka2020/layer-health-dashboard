// import { useRef } from "react";
import { useContext } from "react";
// import { Context } from '../../../contexts/Context';
import notes from '../../../data/mock_notes.json'
import {convertDate, ROWS_PER_PAGE} from '../../../utils/tableFunc'


const NotesPage = () => {
  // const { currPatient, setPatient } = useContext(Context)
  // const { name, gender, date_of_birth:dob, notes} = currPatient

  //here will go list of notes belonging to the same patient that we selected on the dashboard
  // TO-DO: state management, transform the obj data to match the schema
  
  // const containerRef = useRef<HTMLDivElement>(null);
  const mock = notes.slice(0,5)

  return (
    <div className="p-10">
      <>
      <h1 className="font-bold p-10">COMING SOON!   (mock data)</h1>
      <div className="p-5">
        <ul>
          <li className="font-bold underline">Patient Info</li>
          {/* <li>Patient: {name}</li>
          <li>DOB: {dob}</li>
          <li>Gender: {gender}</li> */}
          <li>Patient: {'Peter'}</li>
          <li>DOB: {'Pan'}</li>
          <li>Gender: {'m'}</li>
        </ul>
      </div>
      </>
      <div 
        className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100"
        // ref={containerRef}
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
            {/* {notes.map((note) => ( */}
            {mock.map((note) => (
              <tr>
                <td>{note.provider_name}</td>
                <td>{note.hospital_name}</td>
                <td>{convertDate(note.creation_date)}</td>
                <td>{note.text.slice(0,200) + '...'}</td>
                <td>
                {/* this button will create pop up with the full view of the selected message */}
                  <button className="btn btn-sm">View</button>
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