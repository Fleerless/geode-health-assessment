import React, { useEffect, useState } from "react";
import "./App.css";
import { fetchComplaintData } from "fetch/FetchComplaints";
import { SearchType } from "types/FunctionTypes";
import ComplaintCard from "components/Cards/ComplaintCard";
import ButtonContainer from "components/Buttons/ButtonContainer";
import { ComplaintResponseArrayType } from "types/ResponseTypes";

function App() {
  const [complaints, setComplaints] = useState<ComplaintResponseArrayType>([]);
  const [searchType, setSearchType] = useState<SearchType>(SearchType.Default);
  const [searchTerms, setSearchTerms] = useState<string>('');

  
  useEffect(() => {
    const fetchData = async () => {
      const complaintsResponse = await fetchComplaintData({searchType});
      setComplaints(complaintsResponse);
    };
    fetchData();
  }, [searchType]);
  return (
    <div className="App">
      <ButtonContainer searchTerms={searchTerms} setSearchTerms={setSearchTerms} setComplaints={setComplaints} />
      <ComplaintCard complaints={complaints} />
    </div>
  );
}

export default App;
