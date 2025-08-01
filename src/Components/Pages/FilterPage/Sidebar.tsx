import React, { useState, useEffect } from 'react';
import { useContext } from "react";
import { Context } from "../../../Contexts/Context";
import TagWindow from './TagWindow'
import { runQuery } from '../../../utils/sidebarFunc'
import {CATEGORIES} from '../../../utils/sidebarFunc'
import patients from '../../../data/mock_patients.json'
import {combineData} from '../../../utils/tableFunc'



const Sidebar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [tags, setTags] = useState<Record<string, string[]>>({});
  const [inputValue, setInputValue] = useState("");
  const [category, setCategory] = useState("");
  const [tagArrRemovingAction, setTagArrRemovingAction] = useState(false);

  //context
  const { visibleData, setVisibleData, totalDataCount } = useContext(Context);

  useEffect(() => {
    // This effect will run whenever 'count' changes
    if (tagArrRemovingAction) { // Optional: Add a condition to prevent running on initial render
      searchResults();
      setTagArrRemovingAction(false);
    }
  }, [tags]);

  const removeTag = (tag: string) => {
    setTagArrRemovingAction(true);
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

  const addFilter = () => {
  //only allow input when catyegory selected:
  if (category) {
    let input = inputValue
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
    setCategory("")
    setIsDropdownOpen(false)
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
      results = combineData(patient_ids)
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
          <div 
          className="mt-4 flex flex-row items-center">
            <input 
              type={category == "Date of birth" || category == "Date"? "date" :"text"} 
              placeholder={category ? `Search by ${category}` : 'Choose filter'}
              className="input input-bordered text-black shadow-lg" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              // onKeyDown={handleKeyDown}
             />
            <div className="p-2">
              <button
                className="btn btn-sm bg-green-600 shading-lg text-white"
                onClick={addFilter}
                >
                Add
              </button>
            </div>
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
          <p>Number of records per page : {visibleData.length}</p>
          <p>Number of records total : {totalDataCount}</p>
        </div>
      </div>
    </div>
  )
}


export default Sidebar