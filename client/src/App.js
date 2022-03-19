import AllAppllications from './Component/AllAppllication';
import AddApplication from './Component/AddApplication';
import EditApplication from './Component/EditApplication';
import NavBar from './Component/NavBar';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/all" component={AllAppllications} />
        <Route exact path="/add" component={AddApplication} />
        <Route exact path="/edit/:id" component={EditApplication} />
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;























// import { useState,useEffect } from 'react';
// import './App.css';
// import Axios from "axios";



// function App() {
//   const [jobList,setCompanyName]=useState("");
//   const [appliedDate,setAppliedDate]=useState("");
//   const [status,setStatus]=useState("");

//   const [applicationList,setApplicationList]=useState([]);
//   useEffect(()=>{
//     Axios.get('http://localhost:4000/read').then((response)=>{
//       setApplicationList(response.data);
//   })
//   },[])



//   const addToList=()=>{
//     console.log(jobList+appliedDate+status);
//     Axios.post("http://localhost:4000/insert",{
//       companyName:jobList,
//       appliedDate:appliedDate,
//       status:status,
//     });
//   }
//   return (
//     <div className="App">
//     <h1>Crud Mern</h1>
//     <label>Company Name:</label>
//     <input type='text' 
//     placeholder="Company Name"
//     onChange={(event)=>{
//       setCompanyName(event.target.value)}
//       }
//     />
//     <label>Applied Date:</label>
//     <input type='date'
//      placeholder='Applied Date'
//      onChange={(event)=>{
//       setAppliedDate(event.target.value)}
//       } 
//     />
//     <label>Status:</label>
//     <input type='text' 
//       placeholder='Status'
//       onChange={(event)=>{
//         setStatus(event.target.value)}
//       }
//     />
//     <button onClick={addToList}>INESRT</button>
//      <h1>Application List</h1>
//      {applicationList.map((val,key)=>{
//        return (
//          <div>
//           <h1>{val.CompanyName}</h1>
//           <h1>{val.AppliedDate}</h1>
//           <h1>{val.ApplicationStatus}</h1>
//         </div>
//        )
//      })} 


//     </div>
//   );
// }

// export default App;
