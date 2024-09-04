import summaryApi from "../../../common"

const getAllTransactionServices = async () => {
    try {
        const response = await fetch(summaryApi.allPayment.url, {
            method: summaryApi.allPayment.method,
            credentials: "include",
        });

       
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const dataResponse = await response.json();
        return dataResponse;
    } catch (error) {
        console.error("Failed to fetch transactions:", error);
        throw error; 
    }
}
export default getAllTransactionServices