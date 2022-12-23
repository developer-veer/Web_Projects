
import { useEffect } from 'react';
import '../StyledSheets/Home.css';
import Cards from './HomePageComponents/CardsDiv';
import Carousel from './HomePageComponents/Carousel';
import Footer from './HomePageComponents/Footer';



function Home() {
    
    useEffect(()=>{
        document.title = "HostelHub"
    } ,[])
    
    return ( 
        <div className="grid-container">

        <div className="grid-item-1">
            
            
        </div>

        <div className="grid-item-2">

        <Carousel/>

        </div>
        <div className="grid-item-3">
            <Cards/>
        </div>
        <div className="grid-item-4">
            <img src='./img/home_image.jpg' style={{width:'80rem' , height:'30rem' , marginLeft:'3rem',  borderRadius:'12px'}} />
        </div>
        <div className="grid-item-5">
           <Footer/>
        </div>


        </div>
     );
}

export default Home;