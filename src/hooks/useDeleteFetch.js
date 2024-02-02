import { makeRequest } from "../makeRequest";

const useDeleteFetch = async (url) => {
    try {
        const data = await makeRequest.delete(url, {
            withCredentials: true
        });
        if (data.data) {
            return { data: data.data };
        }
        else {
            return { error: data.error };
        }
    } catch (err) {
        console.log(err);
        return {
            success: false,
            status: err.response.status,
            error: `${err.response.data.error}`
        }
    }
}

export default useDeleteFetch;
