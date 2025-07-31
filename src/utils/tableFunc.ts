import { CompleteRecord} from './../types/index'
import notes from './../data/mock_notes.json'
import patients from './../data/mock_patients.json'

const ROWS_PER_PAGE = 15; // number of rows for tables to load at once


const agregate = (patientsIds: number[] ) =>{
    const listOfPatients: CompleteRecord[] = []
    //get all patients details based on Id's
    const patientsData = patients.filter((p) => patientsIds.includes(p.id) )
    patientsData.forEach((p) => {
      const newPatientObj = Object.assign(p)
      notes.forEach((note) => {
        if (note.patient_id == newPatientObj.id){
          const newNote = Object.assign(note)
          // delete newNote.patient_id
          if (!newPatientObj.notes){
            newPatientObj.notes = [newNote]
          }else{
            newPatientObj.notes.push(newNote)
          }
          
        }
      })
      listOfPatients.push(newPatientObj)
      })
    const sortedPatients = listOfPatients.sort((a,b)=>a.name.split(' ')[1].toLowerCase().localeCompare(b.name.split(' ')[1].toLowerCase()))
    return sortedPatients
  }


  const convertDate = (dob:string) => {
    //data format in db => 1994-02-26T23:28:29Z
    const newDob = dob.slice(0,10).split('-')
    const newOrder = [newDob[1], newDob[2], newDob[0]].join('.')
    return newOrder
  }

  export {agregate, convertDate, ROWS_PER_PAGE}