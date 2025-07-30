const Notes = () => {
  //here will go list of notes belonging to the same patient that we selected on the dashboard
  // TO-DO: state management, transform the obj data to match the schema
  const data = []
  return (
    <div>
      <H1>COMING SOON!</H1>
      <ul>
        <li>Patient: {}</li>
        <li>DOB: {}</li>
        <li>Gender: {}</li>
      </ul>
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
            </tr>
          </thead>
          <tbody>
            {data.map((note) => (
              <tr>
                <td>{note.provider}</td>
                <td>{note.hospital}</td>
                <td>{note.date}</td>
                <td>{note.text}</td>
                <td>
                  <button className="btn btn-sm">OPEN</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </div>
  )
}

export default Notes;