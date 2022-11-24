//import { useState } from "react";
const File_2 = (prop) => {


    const handleDelete =(id)=>
  {
    
      
       prop.setState(
        prop.reg.filter((regStd) => regStd.id !== id )
       )
   
  }

    return ( 
       
        <div>
        <div id="totalReg-div">
          <h2 id="h2-count" style={{color:"yellow"}}>Total Registered</h2>
           <table  class="fl-table">
          <thead>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Room No</th>
              <th>Action</th>
          </thead>
          <tbody>
           
               {
                //Map is use for populate Data in table which store in (regstd) array
          prop.reg.map((regstd , key) => (
          
              <tr key={regstd.id}>
                  <td>{regstd.id}</td>
                  <td><img src={regstd.img} alt={regstd.name}/></td>
                  <td>{regstd.name}</td>
                  <td>{regstd.roomNo}</td>
                  <td>
                    
                  
                <button id="list-Delete-btn" onClick={()=>handleDelete(regstd.id)}>Delete</button>
                  
                  </td>
              </tr>
            
          ))}
        </tbody>
        </table>
        </div>
      </div>
     );
}
 
export default File_2;