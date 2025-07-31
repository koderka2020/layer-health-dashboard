import { useState } from 'react';
import { useContext } from "react";
import { Context } from "../../../Contexts/Context";
import TagWindow from './TagWindow'
import { runQuery } from '../../../utils/sidebarFunc'
import {CATEGORIES} from '../../../utils/sidebarFunc'
import patients from '../../../data/mock_patients.json'
import {agregate} from '../../../utils/tableFunc'



const Sidebar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [tags, setTags] = useState<Record<string, string[]>>({});
  const [inputValue, setInputValue] = useState("");
  const [category, setCategory] = useState("")

  //context
  const { visibleData, setVisibleData } = useContext(Context);


  const removeTag = (tag: string) => {
    setTags(prev => {
      const updated: Record<string, string[]> = {};
      for (const key in prev){
        const filtered = prev[key].filter(t => t !== tag)
        if ( filtered.length ){
          updated[key] = filtered
        }
      }
      return updated
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //only allow input when catyegory selected:
  if (e.key === "Enter" && inputValue.trim() && category) {
    let input = inputValue.trim()
    // update date format, DaisyUI calendar coponent showing format
    if (category == 'Date'){
      input = inputValue.trim().split('-').reverse().join('.')
    }
    if (tags[category] && tags[category].includes(input)) return
    setTags((prev) => ({
      ...prev,
      [category]: [...(prev[category] || []), input],
    }));
    setInputValue("");
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelect = (item:string) => {
    setInputValue('')
    setCategory(item)
  }

  const searchResults = () => {
    let results = []
    if (!Object.keys(tags).length) {
      //if there are no filters and return all
      const patient_ids = patients.map( p => p.id)
      results = agregate(patient_ids)
    } else {
      //TODO when connected to DB: if there are some filters selected- create a query/filter
      // const query: string = createQuery(tags)
      //run query and store results in the state + updte teh table
      results = runQuery(tags) 
    }

    setVisibleData(results)
  }

  
  return(
    <div className="w-80 h-screen bg-gray-600 text-white p-4">
      <div className="flex flex-col">
        <div className="text-xl font-semibold mb-4">Filters</div>
        <div className="relative" onMouseLeave={() => setIsDropdownOpen(false)}>
          <button 
            className="btn btn-primary w-full" 
            onClick={toggleDropdown}
          >
            Filters
          </button>
          {isDropdownOpen &&
          <ul className={`dropdown-content menu p-2 shadow-lg bg-red-400 rounded-box w-56 ${isDropdownOpen ? 'block' : 'hidden'}`}>
            {CATEGORIES.map((c) => (
                <li 
                  key={c} 
                  onClick={() => handleSelect(c)}
                  className="cursor-pointer hover:bg-red-500"
                ><a>{c}</a></li>
            ))}
          </ul>
          }
          <div className="mt-4">
            <input 
              type={category == "Date of birth" || category == "Date"? "date" :"text"} 
              placeholder={category ? `Search by ${category}` : 'Choose category'}
              className="input input-bordered text-black shadow-lg" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              />
          </div>
          <div className="mt-5 mb-5">
            <TagWindow tags={tags} removeTag={removeTag}/>
          </div>
          <div className="flex flex-col items-center justify-center h-full">
            <button 
              className="btn btn-sm bg-green-600 shading-lg text-white"
              onClick={searchResults}
              >
                Search
              </button>
            </div>
        </div>
        <div className="p-5">
          <p>Number of records: {visibleData.length}</p>
        </div>
      </div>
    </div>
  )
}


export default Sidebar