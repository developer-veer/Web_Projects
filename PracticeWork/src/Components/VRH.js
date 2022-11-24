import { useState} from "react";
import '../PracticeWork/img.css';
import '../Components/Assign.css';


const ViewRegWarden = (prop) => {
  const [count, setCount] = useState(4);
  

  const [regWrdn, setRegWrdn] = useState([
    { id: 1, name: "Bacha khan", hostelName : "GB Boys Hostel", TotalRoom: 22, img: "./img/bacha.jpg" },
    { id: 2, name: "Musa ",hostelName: "Unique Boys Hostel",TotalRoom : 23 ,  img: "./img/Tanveer.jpg" },
    { id: 3, name: "Kashif", hostelName: "Galaxy boys Hostel ", TotalRoom: 13, img: "./img/Tanveer.jpg" },
    { id: 4, name: "shabbir", hostelName:"Django Girls Hostel", TotalRoom :15, img: "./img/shabbir.jpg" },
  ]);

  const handleDelete =(id)=>
  {
    setRegWrdn(

        regWrdn.filter((regWrdn) => regWrdn.id !== id )
    )
    setCount(prev => prev -1)
  }


  return (
    <div>
      <div id="totalReg-div">
        <h2 id="h2-count" style={{color:"yellow"}}>Total Registered {prop.title} : {count}</h2>
         <table  class="fl-table">
        <thead>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>TotalRoom</th>
            <th>Hostel Name</th>
            <th>Action</th>
        </thead>
        <tbody>
         
             {
        regWrdn.map((regWrdn , key) => (
        
            <tr>
                <td key={regWrdn.id}>{regWrdn.id}</td>
                <td><img src={regWrdn.img} alt={regWrdn.name}/></td>
                <td>{regWrdn.name}</td>
                <td>{regWrdn.TotalRoom}</td>
                <td>{regWrdn.hostelName}</td>
                <td>
                  <button id="list-Delete-btn" onClick={()=>handleDelete(regWrdn.id)}>Delete</button>
                  </td>
            </tr>
          
        ))}
      </tbody>
      </table>
      </div>
    </div>
  );
}

export default ViewRegWarden;
