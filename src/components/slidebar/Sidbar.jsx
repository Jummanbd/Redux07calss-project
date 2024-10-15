import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { titleFilter } from '../../redux/fetures/jobsSlice/jobsSlice';
const Sidbar = () => {
  const dispatch = useDispatch();
  const {menuaction} = useSelector((state) => state.transaction)
  const [filter, setFilter] = useState(menuaction);
  const navigate = useNavigate()

  const HeadleFilter = (e) => {
   setFilter(e.target.innerText);
   navigate("/");
  };
  const allJobFilter = (e) => {
    setFilter("");
    navigate("/");
   };
  useEffect(() => {
    dispatch(titleFilter(filter))
  }, [dispatch, filter])


  return (
    <div className="sidebar  mt-5">
    <nav>
      <ul className="space-y-4">
        <li  className="main-menu menu-active cursor-pointer" id="lws-alljobs-menu" >
           <div onClick={allJobFilter}> 
            <i className="fa-solid fa-briefcase"></i> 
            <span> All Available Jobs</span>
            </div>
          <ul className="space-y-6 lg:space-y-2">
            <li  className="sub-menu " id="lws-internship-menu "  onClick={HeadleFilter}>
                <i className="fa-solid fa-stop mr-1 !text-[#FF5757]"></i>  
                Internship
            </li>
            <li className="sub-menu "  id="lws-fulltime-menu"  onClick={HeadleFilter}>
                <i className="fa-solid fa-stop mr-1 !text-[#FF8A00]"></i>  
                Full Time
      
            </li>
            <li className="sub-menu" id="lws-remote-menu"  onClick={HeadleFilter}>
                <i className="fa-solid fa-stop mr-1 !text-[#56E5C4]"></i> 
                Remote
            </li>
          </ul>
        </li>
        <li>
          <a href="/jobs" className="main-menu" id="lws-addJob-menu">
            <i className="fa-solid fa-file-circle-plus mr-1"></i>
            <span>Add NewJob</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  )
}

export default Sidbar;
