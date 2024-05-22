import React, { useEffect, useState } from "react";
import "./App.css";
import { fetchComplaintData } from "fetch/FetchComplaints";
import { SearchType } from "types/FunctionTypes";
import ComplaintCard from "./components/Cards/ComplaintCard";

function App() {
  const [complaints, setComplaints] = useState([]);
  const [searchType, setSearchType] = useState<SearchType>(SearchType.Default);

  
  useEffect(() => {
    const fetchData = async () => {
      const complaintsResponse = await fetchComplaintData(searchType);
      setComplaints(complaintsResponse);
    };
    fetchData();
  }, [searchType]);
  return (
    <div className="App">
      <ComplaintCard complaints={complaints} />
    </div>
  );
}

export default App;
