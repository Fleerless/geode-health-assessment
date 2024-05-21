import React, { useEffect } from 'react';
import './App.css';
import { fetchComplaintData } from 'fetch/FetchComplaints';
import { SearchType } from "types/functionTypes";


function App() {
  const [complaints, setComplaints] = React.useState();
  const [searchType, setSearchType] = React.useState(SearchType.Trends);
  
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

    </div>
  );
}

export default App;
