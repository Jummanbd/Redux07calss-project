import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { salaryJobs, searchJobs } from '../../redux/fetures/jobsSlice/jobsSlice';

const Header = () => {
    const dispatch = useDispatch();
    const {search, salary} = useSelector((state) => state.transaction);
    const [searchBox, setSearchBox] = useState('');
    const [selection, setSelection] = useState(salary)
    
    // searchOnChange
    const searchOnChange = (e) => {
        setSearchBox(e.target.value)
        dispatch(searchJobs(e.target.value));
    };

   const selectOnChange = (e) => {
    setSelection(e.target.value);
    
   }

    useEffect(() => {
        // dispatch(searchJobs(searchBox));
        dispatch(salaryJobs(selection));
        
    },[dispatch, searchBox, selection])
    


  return (
       <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
                    <h1 className="lws-section-title">All Available Jobs</h1>
                    <div className="flex gap-4">
                        <div className="search-field group flex-1">
                            <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
                            <input type="text" placeholder="Search Job" className="search-input" id="lws-searchJob" value={searchBox} onChange={searchOnChange}/>
                        </div>
                     
                        <select id="lws-sort" name="sort" autocomplete="sort" className="flex-1" value={selection} onChange={selectOnChange}>
                            <option>Default</option>
                            <option>Salary (Low to High)</option>
                            <option>Salary (High to Low)</option>
                        </select>
                    </div>
                </div>

  )
}

export default Header
