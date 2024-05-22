import { SearchType } from "types/FunctionTypes";
import { ComplaintResponseArrayType } from "types/ResponseTypes";

interface FetchComplaintsProps {
  searchType?: SearchType,
  id?: string,
  searchTerms?: string 
};

type FetchComplaintsFunction = (fetchComplaintsProps: FetchComplaintsProps) => Promise<ComplaintResponseArrayType>;

export const fetchComplaintData: FetchComplaintsFunction = async (
  fetchComplaintsProps
) => {
  const { searchType, id, searchTerms } = fetchComplaintsProps;

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
      return await fetchComplaints(searchTerms?.trim());
  }
};

export const fetchComplaints = async (searchTerms?: string) => {  
  try {
    const response = await fetch(`/complaints/${searchTerms}`);
    const data = response.json();
    return data;
  } 
  catch (error) {
    console.error(error);
    throw error;
  }
};

const fetchComplaintsById = async (id: string) => {
  try {
    const response = await fetch(`/complaint/${id}`);
    const data = response.json();
    return data;
  } 
  catch (error) {
    console.error(error);
    throw error;
  }
};

const fetchComplaintTrends = async () => {
  try {
    const response = await fetch("/trends");
    const data = response.json();
    return data;
  } 
  catch (error) {
    console.error(error);
    throw error;
  }
};
