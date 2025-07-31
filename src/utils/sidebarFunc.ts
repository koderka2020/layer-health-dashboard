import patients from '../data/mock_patients_small.json'
import notes from '../data/mock_notes_small.json'
import {agregate, convertDate} from './tableFunc'

const CATEGORIES = ['Name', 'Gender', 'Date of birth', 'Provider', 'Hospital', 'Date', 'Keywords']

//placeholder for future work with DBs
const createQuery = (parameters:Record<string, string>): void => {
  console.log(parameters)
}

const categories: Record<string, string> = {
  Name: 'name', 
  Gender: 'gender', 
  'Date of birth': 'date_of_birth', 
  Provider: 'provider_name', 
  Hospital: 'hospital_name', 
  Date: 'creation_date', 
  Keywords: 'text'
}


const runQuery = (tags: Record<string, string[]>) => {
  const filteredIds: number[] = []

  //convert category names from table columns to db standard
  const convertedTagsObj:Record<string, string[]> = {}

  Object.keys(tags).forEach(t => {
    const newKey = categories[t]
    convertedTagsObj[newKey] = tags[t]
  })

  Object.keys(convertedTagsObj).forEach(tagKey => {
    //keyword category: 
    //1.filter notes data
    if (tagKey == 'text'){
      convertedTagsObj[tagKey].forEach((t) => {
         notes.forEach((n) => {
          if ( n.text.toLowerCase().includes(t.toLowerCase())) {
            console.log(n)
            filteredIds.push(n.patient_id)
          }
         })
      })
    }

    //created_at category: 
    //1.filter notes data
    if (tagKey == 'creation_date'){
      convertedTagsObj[tagKey].forEach((date) => {
         notes.forEach((n) => {
          if ( convertDate(n.creation_date) == date) {
            filteredIds.push(n.patient_id)
          }
         })
      })
    }
  
    //provider category: 
    //1.filter notes data
    //2. based on patient id filter patients data 
    if (tagKey == 'provider_name'){
      convertedTagsObj[tagKey].forEach((p) => {
         notes.forEach((n) => {
          if ( n.provider_name.toLowerCase().includes(p.toLowerCase())) {
            filteredIds.push(n.patient_id)
          }
         })
      })
    }
    //hospital category: 
    //1.filter notes data
    //2. based on patient id filter patients data 
    if (tagKey == 'hospital_name'){
      convertedTagsObj[tagKey].forEach((t) => {
         notes.forEach((n) => {
          if ( n.text.toLowerCase().includes(t.toLowerCase())) {
            filteredIds.push(n.patient_id)
          }
         })
      })
    }
    //name category: 
    //1.filter patients data
    //2. based on patient id filter notes data
    if (tagKey == 'name'){
      convertedTagsObj[tagKey].forEach((t) => {
         patients.forEach((p) => {
          if ( p.name.toLowerCase().includes(t.toLowerCase())) {
            filteredIds.push(p.id)
          }
         })
      })
    } 
    //gender category: 
    //1.filter patients data
    //2. based on patient id filter notes data
    if (tagKey == 'gender'){
      convertedTagsObj[tagKey].forEach((g) => {
         patients.forEach((p) => {
          if ( p.gender == g) {
            filteredIds.push(p.id)
          }
         })
      })
    }

    //DOB category: 
    //1.filter patients data
    //2. based on patient id filter notes data
    if (tagKey == 'date_of_birth'){
      convertedTagsObj[tagKey].forEach((dob) => {
         patients.forEach((p) => {
          if ( convertDate(p.date_of_birth) == dob ) {
            filteredIds.push(p.id)
          }
         })
      })
    }
  })
  console.log(filteredIds)
  const dedupedFilteredIds = [...new Set(filteredIds)]
  console.log(dedupedFilteredIds)
  // use utility func to merge patient data with note data:
  const filteredData = agregate(dedupedFilteredIds)
  console.log(filteredData)
  return filteredData
}

export {createQuery, runQuery, CATEGORIES}