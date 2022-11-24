import { useState } from "react";
import '../PracticeWork/img.css';
const StudentRecord = () => {

     
     const[record , setRecord] = useState([

      { id: 1, name :"Bacha khan", age : 81 , gender : "Male" , img :"./img/bacha.jpg" },
      { id: 2, name :"Tanveer", age : 23 ,  gender : "Male" , img :"./img/Tanveer.jpg"},
      { id: 3, name :"Kashif", age : 33 , gender : "Males" , img :"./img/Tanveer.jpg" },
      { id: 4, name :"shabbir", age : 17 , gender : "Male" , img :"./img/shabbir.jpg"}  



     ]);


     const handleDelete = (id) => {
      
      setRecord(

        record.filter((srf) => srf.id !== id )
      )
      
    
    }
    
     return (
      <div>
        <table class="table table-dark table-striped-columns">
          <tr>
            <thead>
              <th>ID</th>
              <th >Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Img</th>
              <th>Action</th>
            </thead>
            <tbody>
              {
              
              record.map((sr) =>(
                <tr key={sr.id}>
                  <td >{sr.id}</td>
                  <td colspan="2">{sr.name}</td>
                  <td >{sr.age}</td>
                  <td>{sr.gender}</td>
                  <td><img src ={sr.img} alt ={sr.name}/></td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() =>handleDelete(sr.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
              
              }

            </tbody>
          </tr>
        </table>
      </div>
    );
}

export default StudentRecord;