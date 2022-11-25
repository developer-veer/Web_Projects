import "../CSSFiles/RightSidebar.css";
const RightSideBar = (prop) => {
  

  const Delete =(ID)=>
  {
    prop.state(
      prop.team.filter((team) => team.id!== ID)
  )
  }

  return (
    <div className="sidebar-div" id="R_side_bar">
      {prop.team.map((cric) => (
        <div class="card text-bg-light mb-3" style={{height:'auto'}}>
          <div class="card-header" style={{display:'flex' , justifyContent:'space-between'}}><strong>{cric.event}</strong>
          <button type="button" class="btn-close" aria-label="Close" onClick={()=>Delete(cric.id)}></button>
          </div>

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

export default RightSideBar;
