import "../CSSFiles/Sidebar.css";
const LeftSideBar = (prop) => {
  return (
    <div className="Sidebar-div">
      
      {prop.team.map((cric) => (
        <div class="card text-bg-light mb-3" style={{height:'auto' , width:'18rem'}}>
          

          <div
            class="card-body"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <h5 class="card-title">{cric.teamOne.name}</h5>
            <p>
              {cric.teamOne.overs} <strong>{cric.teamOne.score}</strong>
            </p>
          </div>
          <div class="card-body" style={{ display: "flex", justifyContent: "space-between" }}>
            <h5 class="card-title">{cric.teamTwo.name}</h5>
            <p>
              {cric.teamTwo.overs}<strong>{cric.teamTwo.score}</strong>
            </p>
            </div>
            <p class="card-text" style={{marginLeft:'2rem'}}>
              {cric.teamTwo.name} have <strong>{cric.teamOne.score} </strong>Target
            </p>
          
        </div>
      ))}
    </div>
       
  );
};

export default LeftSideBar;
