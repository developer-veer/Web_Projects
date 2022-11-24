import { useState } from "react";
import "../PracticeWork/img.css";
import "../Components/Assign.css";
import { useNavigate } from "react-router";
export const ViewRegStud = (prop) => {
  const [count, setCount] = useState(4); //this is use for update present state of count

  const navigate = useNavigate();
  //in this usestate() function passed Objects in array form as Initial State
  const [regStud, setRegStud] = useState([
    { id: 1, name: "Bacha khan", age: 81, roomNo: 105, img: "./img/bacha.jpg" },
    { id: 2, name: "Tanveer", age: 23, roomNo: 108, img: "./img/Tanveer.jpg" },
    { id: 3, name: "Kashif", age: 33, roomNo: 109, img: "./img/Tanveer.jpg" },
    { id: 4, name: "shabbir", age: 17, roomNo: 110, img: "./img/shabbir.jpg" },
  ]);

  const handleDelete = (id) => {
    setRegStud(regStud.filter((regStd) => regStd.id !== id));
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <div id="totalReg-div">
        <h2 id="h2-count" style={{ color: "yellow" }}>
          Total Registered {prop.title}: {count}
        </h2>
        <table class="fl-table">
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
              regStud.map((regstd, key) => (
                <tr key={regstd.id}>
                  <td>{regstd.id}</td>
                  <td>
                    <img src={regstd.img} alt={regstd.name} />
                  </td>
                  <td>{regstd.name}</td>
                  <td>{regstd.roomNo}</td>
                  <td>
                    <button
                      id="list-Delete-btn"
                      
                      onClick={() => navigate("/view", {state :{obj : regstd}})}
                    >
                      View
                    </button>
                    <button
                      id="list-Delete-btn"
                      onClick={() => handleDelete(regstd.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};
