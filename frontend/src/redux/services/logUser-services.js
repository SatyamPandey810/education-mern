import summaryApi from "../../common";

export const fetchUserDetails = async () => {
    try {
        const response = await fetch(summaryApi.userDetails.url, {
            method: summaryApi.userDetails.method,
            credentials: "include"
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const { data, error, success, message } = await response.json();

        // Check for errors or null data
        if (error || !success || !data) {
            throw new Error(message || "Failed to fetch user details");
        }

        return data;
    } catch (error) {
        console.error('Error fetching user details:', error);
        throw error;
    }
}