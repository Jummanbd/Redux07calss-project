import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postJobs, updateJobs } from '../../redux/fetures/jobsSlice/jobsSlice';

const Newjobfrom = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [jobTitle, setJobTitle] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobSalary, setJobSalary] = useState("");
  const [jobDeadline, setJobDeadline] = useState("");
  const [editMode, setEditMode] = useState(false);
  const {update} = useSelector((state) => state.transaction) || {};

const reset = () =>{
  setJobTitle("");
  setJobType("");
  setJobSalary("");
  setJobDeadline("");
}


   const HeadleSubmit=  (e) => {
    e.preventDefault();
    dispatch(postJobs({
      title:jobTitle,
      type:jobType,
      salary:jobSalary,
      deadline:jobDeadline

    }))
    reset();
    navigate('/')
   }

       // Updata 
       const HandleUpdate = (e) => {
        e.preventDefault();
        dispatch(
            updateJobs({
              id:update.id,
              data: {
                title:jobTitle,
                type:jobType,
                salary: jobSalary,
                deadline: jobDeadline,
            },
            })

        );
        setEditMode(false);
       navigate('/')
      
    };

    // update  active 

    useEffect(() => {
        const {id, title, type , salary, deadline} = update || {};

        if(id){
        setEditMode(true);
        setJobTitle(title);
        setJobType(type);
        setJobSalary(salary);
        setJobDeadline(deadline);

        }else{
            setEditMode(false)
      
        }
    },[update]);

  return (
     <div className="lg:pl-[14rem] mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 bg-[#1E293B]">
      <h1 className="mb-10 text-center lws-section-title">Add New Job</h1>

      <div className="max-w-3xl mx-auto">
        <form className="space-y-6" onSubmit={editMode ? HandleUpdate : HeadleSubmit}>
          <div className="fieldContainer">
            <label  className="text-sm font-medium text-slate-300">Job Title</label>
            <select id="lws-JobTitle" name="lwsJobTitle" required value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}>
              <option  hidden selected>Select Job</option>
              <option>Software Engineer</option>
              <option>Software Developer</option>
              <option>Full Stack Developer</option>
              <option>MERN Stack Developer</option>
              <option>DevOps Engineer</option>
              <option>QA Engineer</option>
              <option>Product Manager</option>
              <option>Social Media Manager</option>
              <option>Senior Executive</option>
              <option>Junior Executive</option>
              <option>Android App Developer</option>
              <option>IOS App Developer</option>
              <option>Frontend Developer</option>
              <option>Frontend Engineer</option>
            </select>
          </div>

          <div className="fieldContainer">
            <label >Job Type</label>
            <select id="lws-JobType" name="lwsJobType" required value={jobType} onChange={(e) => setJobType(e.target.value)}>
              <option  hidden selected>Select Job Type</option>
              <option>Full Time</option>
              <option>Internship</option>
              <option>Remote</option>
            </select>
          </div>

          <div className="fieldContainer">
            <label >Salary</label>
            <div className="flex border rounded-md shadow-sm border-slate-600">
              <span className="input-tag">BDT</span>
              <input type="number" name="lwsJobSalary" id="lws-JobSalary" required className="!rounded-l-none !border-0"
                placeholder="20,00,000" value={jobSalary} onChange={(e) => setJobSalary(e.target.value)} />
            </div>
          </div>

          <div className="fieldContainer">
            <label >Deadline</label>
            <input type="date" name="lwsJobDeadline" id="lws-JobDeadline" required value={jobDeadline} onChange={(e) => setJobDeadline(e.target.value)} />
          </div>

          <div className="text-right">
            <button type="submit" id="lws-submit" className="cursor-pointer btn btn-primary w-fit">
              {editMode ? "Update" : "Submit"}
            </button>
          </div>
        </form>
      </div>
     </main>
     </div>
  )
}

export default Newjobfrom;
