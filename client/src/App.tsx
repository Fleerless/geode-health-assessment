import React, { useEffect } from 'react';
import './App.css';
import { fetchComplaints } from './fetch/FetchComplaints';

function App() {
  const [complaints, setComplaints] = React.useState();
  
  useEffect(() => {
    const fetchData = async () => {
      const complaintsResponse = await fetchComplaints();
      console.log(complaintsResponse);
      
      setComplaints(complaintsResponse);
    };
    fetchData();
  },[])
  return (
    <div className="App">

    </div>
  );
}

export default App;
