import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5300'
})
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;