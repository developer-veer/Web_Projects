import { useState } from "react";
import { signUp } from "../Service/api";
import { Link } from "react-router-dom";


const Student = () => {

    const [data, setData] = useState([
        {name: "", gpa: ""} 
    ]);

    const handleChange = e => {
        setData({ ...data, [e.target.name] : e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        signUp(data);
    }

    return ( 
    <div>
       <form>
            Name <input type="text" name="stdName" onChange={e => handleChange(e)} />
            GPA <input type="text" name="stdGPA" onChange={e => handleChange(e)} />
            <Link to="/signup">
                <button onClick={handleSubmit}>Signup</button>
            </Link>

       </form>
    </div> );
}
 
export default Student;<div>
</div>