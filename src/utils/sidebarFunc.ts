import patients from '../data/mock_patients.json'
import notes from '../data/mock_notes.json'
import {combineData, convertDate} from './tableFunc'
import { CATEGORIES } from './variables'


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
  // Convert category names
  const convertedTagsObj: Record<string, string[]> = {}
  Object.keys(tags).forEach(t => {
    const newKey = categories[t]
    convertedTagsObj[newKey] = tags[t]
  })

  let matchingIds: Set<number> | null = null

  const applyFilter = (ids: number[]) => {
    const idSet = new Set(ids)
    // First filter: initialize, else intersect
    if (matchingIds === null) {
      matchingIds = idSet
    } else {
      matchingIds = new Set([...matchingIds].filter(id => idSet.has(id)))
    }
  }

  Object.keys(convertedTagsObj).forEach(tagKey => {
    let ids: number[] = []

    // Filter notes by keyword
    if (tagKey === 'text') {
      convertedTagsObj[tagKey].forEach(t => {
        notes.forEach(n => {
          if (n.text.toLowerCase().includes(t.toLowerCase())) {
            ids.push(n.patient_id)
          }
        })
      })
    }

    // Filter notes by creation date
    if (tagKey === 'creation_date') {
      convertedTagsObj[tagKey].forEach(date => {
        notes.forEach(n => {
          if (convertDate(n.creation_date) === date) {
            ids.push(n.patient_id)
          }
        })
      })
    }

    // Filter by provider name
    if (tagKey === 'provider_name') {
      convertedTagsObj[tagKey].forEach(p => {
        notes.forEach(n => {
          if (n.provider_name.toLowerCase().includes(p.toLowerCase())) {
            ids.push(n.patient_id)
          }
        })
      })
    }

    // Filter by hospital name (from notes)
    if (tagKey === 'hospital_name') {
      convertedTagsObj[tagKey].forEach(t => {
        notes.forEach(n => {
          if (n.text.toLowerCase().includes(t.toLowerCase())) {
            ids.push(n.patient_id)
          }
        })
      })
    }

    // Filter patients by name
    if (tagKey === 'name') {
      convertedTagsObj[tagKey].forEach(t => {
        patients.forEach(p => {
          if (p.name.toLowerCase().includes(t.toLowerCase())) {
            ids.push(p.id)
          }
        })
      })
    }

    // Filter patients by gender
    if (tagKey === 'gender') {
      convertedTagsObj[tagKey].forEach(g => {
        const genderTag = g[0].toLowerCase() === 'm' ? 'male' : 'female'
        patients.forEach(p => {
          if (p.gender.toLowerCase() === genderTag) {
            ids.push(p.id)
          }
        })
      })
    }

    // Filter patients by DOB
    if (tagKey === 'date_of_birth') {
      convertedTagsObj[tagKey].forEach(dob => {
        patients.forEach(p => {
          if (convertDate(p.date_of_birth) === dob) {
            ids.push(p.id)
          }
        })
      })
    }

    applyFilter(ids)
  })

  // If no filters provided, return empty
  if (!matchingIds) return []

  // Combine data using utility
  return combineData([...matchingIds])
}


export {createQuery, runQuery, CATEGORIES}