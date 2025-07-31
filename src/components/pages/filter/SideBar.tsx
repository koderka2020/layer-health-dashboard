import { useState } from 'react';
import TagWindow from './TagWindow'
import { runQuery } from '../../../utils/sidebarFunc'
import { CompleteRecord } from '../../../types/index'
import {CATEGORIES} from '../../../utils/sidebarFunc'
import patients from '../../../data/mock_patients_small.json'
import {agregate} from '../../../utils/tableFunc'


 interface SidebarProps {
  visibleDataCount: number;
   setVisibleData: React.Dispatch<React.SetStateAction<CompleteRecord[]>>;
 } 

const Sidebar: React.FC<SidebarProps> = ({visibleDataCount, setVisibleData}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [tags, setTags] = useState<Record<string, string[]>>({});
  const [inputValue, setInputValue] = useState("");
  const [category, setCategory] = useState("")

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
  if (e.key === "Enter" && inputValue.trim() && category) {
    let input = inputValue.trim().split('-').reverse().join('.')
    if (category == 'Date'){
      input = inputValue.trim().split('-').reverse().join('.')
    }
    if (tags.category.includes(input)) return
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
    <div className="w-54 h-screen bg-gray-600 text-white p-4">
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
          <div className="relative">
          <TagWindow tags={tags} removeTag={removeTag}/>
          </div>
          <button 
            className="btn btn-sm bg-green-600 shading-lg text-white"
            onClick={searchResults}
            >
              Search
            </button>
        </div>
        <div className="p-8">
          <p>Showing {visibleDataCount} records</p>
        </div>
      </div>
    </div>
  )
}


export default Sidebar