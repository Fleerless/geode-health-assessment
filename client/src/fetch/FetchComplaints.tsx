import { SearchType } from "types/FunctionTypes";

export const fetchComplaints = async (searchTerms?: string) => {

  try {
    const response = await fetch("/complaints", { body: searchTerms });
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const fetchComplaintsById = async (id: string) => {
  try {
    const response = await fetch(`/complaint/${id}`);
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

export const fetchComplaintData = async (
  searchType: SearchType,
  id?: string,
  searchTerms?: string 
) => {
  switch (searchType) {
    case SearchType.ById:
      if (id) {
        return await fetchComplaintsById(id);
      } else {
        throw new Error("ID is required for fetching complaints by ID");
      }
    case SearchType.Trends:
      return await fetchComplaintTrends();
    default:
      return await fetchComplaints(searchTerms);
  }
};
