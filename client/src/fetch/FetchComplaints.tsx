import { SearchType } from "types/functionTypes";

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

const fetchComplaintsById = async () => {
  try {
    const response = await fetch("/complaint/:id");
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const fetchComplaintTrends = async () => {
  try {
    const response = await fetch("/trends");
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchComplaintData = async (searchType: SearchType) => {
    switch (searchType) {
        case SearchType.ById:
            return await fetchComplaintsById();
        case SearchType.Trends:
            return await fetchComplaintTrends();            
        default:
            return await fetchComplaints();
    }
    
};