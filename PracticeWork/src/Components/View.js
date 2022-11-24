import { useLocation } from "react-router";


const View = (prop) => {
    
   const location = useLocation();

 
    return (  

        <div>
        <img src ={location.state.obj.img}/>
        <h1>Name : {location.state.obj.name}</h1>
           
        </div>
    );
}
 
export default View;