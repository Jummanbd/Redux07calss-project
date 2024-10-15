import { axiosInstance } from "../../utils/axios";

//get data
export const getJobsApi = async () => {
    const response = await axiosInstance.get("/jobs");
    return response.data;
};

// post data

export const postJobsApi = async (data) => {
    const response = await axiosInstance.post("/jobs", data);
    return response.data;
};

// put data vs update data

export const updateJobsApi = async (id,data) => {
    const response = await axiosInstance.put(`/jobs/${id}`, data);
    return response.data;
};


// id data delete

export const deleteJobsApi = async (id) => {
    const response = await axiosInstance.delete(`/jobs/${id}`);

    return response.data;
};


