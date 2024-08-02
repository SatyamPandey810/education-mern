import summaryApi from "../../common"
import { toast } from 'react-toastify';

export const logoutHandller = async () => {
    try {
        const fetchData = await fetch(summaryApi.logout.url, {
            method: summaryApi.logout.method,
            credentials: "include"
        })
        const data = await fetchData.json()
        if (data.success) {
            toast.success(data.message)
        }
        return data


    } catch (error) {
        console.error('Error logut user', error);
        throw error;
    }
}