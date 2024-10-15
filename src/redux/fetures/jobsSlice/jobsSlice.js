import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteJobsApi, getJobsApi, postJobsApi, updateJobsApi } from "./jobsApi";

const initialState = {
    isLoading:false,
    isError:false,
    error:'',
    jobs:[],
    update:{},
    search:"",
    salarys:'',
    menuaction:""
};

// creat thunk

export const fetchJobs = createAsyncThunk('jobsSlice/fetchJobs', async () => {
    const fetchGetJobs =  await getJobsApi();
    return fetchGetJobs;
});


export const postJobs = createAsyncThunk('jobsSlice/postJobs',async (data) => {
    const postJob = await postJobsApi(data);
    return postJob;
});

export const updateJobs =   createAsyncThunk('jobsSlice/updateJobs',async ({id, data}) => {
    const putsJob = await updateJobsApi(id, data);
    return putsJob;
});

export const deleteJobs =  createAsyncThunk('jobsSlice/deleteJobs', async (id) => {
    const deleteJob = await deleteJobsApi(id);
    return deleteJob;
});


const jobsSlice = createSlice({
    name:'jobs',
    initialState,
    reducers:{
        editJobs:(state, action) => {
            state.update = action.payload
         },
         editInJobs:(state, action) => {
            state.update = {}
         },
         searchJobs:(state,action) => {
           state.search =  action.payload;
         }, 
        salaryJobs:(state, action) => {
        state.salarys =  action.payload;

         },
        titleFilter : (state, action) => {
            state.menuaction = action.payload;
        },
  
    },
    extraReducers:(bulider) => {
        bulider
        .addCase(fetchJobs.pending, (state) => {
            state.isLoading =  true;
            state.isError =  false;
            state.jobs= [];
            state.error = ''
        })
        .addCase(fetchJobs.fulfilled, (state, action) => {
            state.isLoading =  false;
            state.isError = false;
            state.error = '';
            state.jobs = action.payload;

        })

        .addCase(fetchJobs.rejected, (state, action) => {
            state.isLoading =  false;
            state.isError = true;
            state.error = action.error.message;
            state.jobs = []
        })

        .addCase(postJobs.pending, (state, action) => {
            state.isLoading =  true;
            state.isError =  false;
            state.jobs= [];
            state.error = ''
        })
        .addCase(postJobs.fulfilled, (state, action) => {
            state.isLoading =  false;
            state.isError = false;
            state.error = '';
            state.jobs.push(action.payload);

        })

        .addCase(postJobs.rejected, (state, action) => {
            state.isLoading =  false;
            state.isError = true;
            state.error = action.error.message;
            state.jobs = []
        })

        .addCase(updateJobs.pending, (state) => {
            state.isLoading =  true;
            state.isError =  false;
            state.jobs= [];
            state.error = ''
        })
        .addCase(updateJobs.fulfilled, (state, action) => {
            state.isLoading =  false;
            state.isError = false;
            state.error = '';
            const indexJobs = state.jobs.findIndex((e) => e.id === action.payload.id);
            state.jobs[indexJobs] = action.payload;

        })

        .addCase(updateJobs.rejected, (state, action) => {
            state.isLoading =  false;
            state.isError = true;
            state.error = action.error.message;
            state.jobs = []
        })

        
        .addCase(deleteJobs.pending, (state) => {
            state.isLoading =  true;
            state.isError =  false;
        })
        .addCase(deleteJobs.fulfilled, (state, action) => {
            state.isLoading =  false;
            state.isError = false;
            state.error = '';
            state.jobs = state.jobs.filter((item) => item.id !== action.meta.arg);

        })

        .addCase(deleteJobs.rejected, (state, action) => {
            state.isLoading =  false;
            state.isError = true;
            state.error = action.error.message;
            state.jobs = []
        })
    }
});

export const {editJobs, editInJobs,searchJobs, salaryJobs, titleFilter} = jobsSlice.actions;
export default jobsSlice.reducer;