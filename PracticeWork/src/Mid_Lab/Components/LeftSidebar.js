import "../CSSFiles/Sidebar.css";
const L_SideBar = () => {
  return (
    <div className="Sidebar-div">
      
      {/* Quick Links Card */}
        <div class="card text-bg-light mb-3" style={{width:'18rem' , marginLeft:'2rem' , marginTop:'1rem' , height:'9rem'}}>
          <div class="card-header"><strong>Quick Links</strong></div>
          <div class="card-body">

           <a href="#" style={{textDecoration:'none' , color:'black'}} className="h6-class"><h6 class="card-title" >T-20 Timeout</h6></a>
           <a href="#" style={{textDecoration:'none', color:'black'}} className="h6-class"><h6 class="card-title">Fantasy Pick</h6></a>
           <a href="#" style={{textDecoration:'none', color:'black'}} className="h6-class"><h6 class="card-title">Icc Ranking</h6></a>
           
            
          </div>
        </div>

        {/* Apps Links Card */}
        <div class="card text-bg-light mb-3" style={{width:'18rem' , marginLeft:'2rem' , marginTop:'1rem', height:'8rem'}}>
          <div class="card-header"><strong>ESPNcricinfo Apps</strong></div>
          <div class="card-body">

           <a href="#" style={{textDecoration:'none' , color:'black'}} className="h6-class"><h6 class="card-title" >Android App</h6></a>
           <a href="#" style={{textDecoration:'none', color:'black'}} className="h6-class"><h6 class="card-title">iOS App</h6></a>
           
            
          </div>
        </div>

        {/* Follow Links Card */}
        <div class="card text-bg-light mb-3" style={{width:'18rem' , marginLeft:'2rem' , marginTop:'1rem', height:'11rem'}}>
          <div class="card-header"><strong>Follow ESPNcricinfo</strong></div>
          <div class="card-body">

           <a href="#" style={{textDecoration:'none' , color:'black'}} className="h6-class"><h6 class="card-title" >Facebook</h6></a>
           <a href="#" style={{textDecoration:'none', color:'black'}} className="h6-class"><h6 class="card-title">Twitter</h6></a>
           <a href="#" style={{textDecoration:'none' , color:'black'}} className="h6-class"><h6 class="card-title" >Instagram</h6></a>
           <a href="#" style={{textDecoration:'none', color:'black'}} className="h6-class"><h6 class="card-title">YouTube</h6></a>

           
            
          </div>
        </div>

         {/* Sites Links Card */}
         <div class="card text-bg-light mb-3" style={{width:'18rem' , marginLeft:'2rem' , marginTop:'1rem', height:'7rem'}}>
          <div class="card-header"><strong>ESPN Sites</strong></div>
          <div class="card-body">

           <a href="#" style={{textDecoration:'none' , color:'black'}} className="h6-class"><h6 class="card-title" >The Cricket Monthly</h6></a>
           <a href="#" style={{textDecoration:'none', color:'black'}} className="h6-class"><h6 class="card-title">ESPN</h6></a>
           
            
          </div>
        </div>

        {/* Sites Links Card */}
        <div class="card text-bg-light mb-3" style={{width:'18rem' , marginLeft:'2rem' , marginTop:'1rem', height:'7rem'}}>
          <div class="card-header"><strong>ESPN Sites</strong></div>
          <div class="card-body">

           <a href="#" style={{textDecoration:'none' , color:'black'}} className="h6-class"><h6 class="card-title" >The Cricket Monthly</h6></a>
           <a href="#" style={{textDecoration:'none', color:'black'}} className="h6-class"><h6 class="card-title">ESPN</h6></a>
           
            
          </div>
        </div>

    </div>
  );
};

export default L_SideBar;
