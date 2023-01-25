import CustomerAppBar from "./Dashboard";
import { useState, useEffect } from "react";
import '../../StyledSheets/Customer/Table.css';
import '../../StyledSheets/Customer/Card.css';
import { deleteDoc, getRegister } from '../../Service/regApi';
const ProductPage = () => {


    const [wardenData, setWardenData] = useState([]);
    const [onchange, setOnchange] = useState(0);

    useEffect(() => {

        fetch();

    }, [onchange]);

    const fetch = async () => {

        const result = await getRegister();
        setWardenData(result.data);


    }//end of fetch Model

    const handleDelete = async (id) => {
        const result = await deleteDoc(id);
        setOnchange(() => onchange + 1)
    }

    return (

        <div>
            <CustomerAppBar />
            {/* <div class="table-wrapper">
                <table class="fl-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>CNIC</th>
                            <th>Address</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            wardenData.map((rs) => (

                                <tr>
                                    <td>{rs.fullName}</td>
                                    <td>{rs.Email}</td>
                                    <td>{rs.CNIC}</td>
                                    <td>{rs.Address}</td>
                                    <td>
                                        <button onClick={() => handleDelete(rs._id)}>Delete</button>
                                    </td>
                                </tr>

                            ))
                        }


                    </tbody>
                </table>
            </div> */}
            <div id="parent-div">

                {
                    wardenData.map((rs) => (

                        <div class="card-container">
                    <span class="pro">Warden</span>
                    <img class="round" src="" alt="user" />
                    <h6>{rs.fullName}</h6>
                    <h6>{rs.Email}</h6>
                    <p>User interface designer and <br /> front-end developer</p>
                    <div class="buttons"
                     style={{ display:'flex',justifyContent:'space-between' ,
                     width:'13rem' , marginLeft:'2rem'
                     
                     }}>
                        <button class="primary" onClick={() => handleDelete(rs._id)}>
                            Remove
                        </button>
                        
                        <button class="primary">
                            View
                        </button>
                        
                    </div>
                    
                </div>
                    ))
                }

            </div>
        </div>
    );
}

export default ProductPage;