import { makeRequest } from "../makeRequest";

const usePostFetch = async (url, bodyData) => {
    try {
        const data = await makeRequest.post(url, { ...bodyData });
        return {data:data.data};
    } catch (err) {
        console.log(err);
        return{
            success: false,
            error: "Some Error Occured"
        }
    }
}

export default usePostFetch;
