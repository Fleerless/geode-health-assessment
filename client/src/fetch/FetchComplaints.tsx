export const fetchComplaints = async () => {
    try {
        const response = await fetch(
            "/complaints"
        );
        const data = response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};