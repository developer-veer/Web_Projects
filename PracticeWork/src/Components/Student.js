import {Component} from "react";
class Student extends Component {
    state = { 
        studentRecord : [
            { id: 1, name :"Ali", cgpa : 2.3 },
            { id: 2, name :"Ahmad", cgpa : 2.7 },
            { id: 3, name :"Fatima", cgpa : 3.3 },
            { id: 4, name :"Abubakar", cgpa : 3.7 }
        ]
     }

    handleDelete = (id) => {
        const updatedRecord = 
        this.state.studentRecord.filter((srf) =>
            srf.id != id
        )

        this.setState( { 
            studentRecord : updatedRecord
        } );

        console.log("clicked..." + id);
    }

    render() { 
        return ( 
            <div>
                <table className="table table-bordered">
                    <tr>
                        <thead>
                            <th>ID</th>
                            <th>Name</th>
                            <th>CGPA</th>
                            <th>Operations</th>
                        </thead>
                        <tbody>
                           {
                            this.state.studentRecord.map((sr, key) => (
                                
                                    <tr key={sr.id}>
                                        <td>{sr.id}</td>
                                        <td>{sr.name}</td>
                                        <td>{sr.cgpa}</td>
                                        <td><button className="btn btn-danger" 
                                        onClick={() => this.handleDelete (sr.id)}>
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
}
 
export default Student;