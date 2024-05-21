import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchComplaintData } from 'fetch/FetchComplaints';
import { SearchType } from "types/functionTypes";
import ComplaintCard from './components/Cards/ComplaintCard';


function App() {
  const [complaints, setComplaints] = useState([]);
  const [searchType, setSearchType] = useState<SearchType>(SearchType.Default);
  
  useEffect(() => {
    const fetchData = async () => {
      const complaintsResponse = await fetchComplaintData(searchType);
      console.log(complaintsResponse);
      
      setComplaints(complaintsResponse);
    };
    fetchData();
    ;
  },[])
  return (
    <div className="App">
      <ComplaintCard complaints={complaints}/>
    </div>
  );
}

export default App;
