import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../../redux/fetures/jobsSlice/jobsSlice';
import List from './List';

const Lists = () => {
  const dispatch = useDispatch();
  const {isLoading, isError, jobs, search, salarys, menuaction } = useSelector((state) => state.transaction);
  const currenJobs = [...jobs];

  useEffect(() => {
    dispatch(fetchJobs())
  },[dispatch]);

  let content = null;
  if(isLoading){
    content = <p>Loading...</p>
  }
  if(!isLoading && isError){
    content =  <p className='text-slate-400'>Your code error Occured</p>
  }
  if(!isLoading && !isError && jobs.length === 0){
    content = <p className='text-lg text-slate-400'>No Jobs Found!</p>
  }
  if(!isLoading && !isError && jobs.length > 0){
    content = jobs.map((item) => <List key={item.id} item = {item}/>);
  }

// selection
  
 if( salarys === "Salary (Low to High)"){
  const sortJobs =  currenJobs.sort((a, b) => a.salary -  b.salary);
   content = sortJobs.map((item) => <List key={item.id} item = {item}/>); 
 }

 if(salarys === "Salary (High to Low)"){
  const sortJobs =  currenJobs.sort((a, b) => b.salary -  a.salary);
   content = sortJobs.map((item) => <List key={item.id} item = {item}/>); 
  }

  if(search.length > 0 ){
    const searchItems = currenJobs.filter((itemed) => itemed.type.toLowerCase().includes(search.toLowerCase()));
     
    content = searchItems.map((item) => <List key={item.id} item = {item}/>); 
  }

  if(search === "" && search.length < 0 && salarys === "Default" ){
    content = currenJobs.map((item) => <List key={item.id} item = {item}/>);

  }

  /// sildebar filter

  if(menuaction){
    const slideFilter= currenJobs.filter((item) => item.type === menuaction ); 
    console.log(slideFilter.length);
    content = slideFilter.length  > 0 ? (slideFilter.map((item) => <List key={item.id} item = {item}/>) ) : (<div className='text-lg text-slate-400'>No available job post</div>)
  } 

  return (
    <div>
       <div className="jobs-list">
         {content}
       </div>
    </div>
  )
}

export default Lists
