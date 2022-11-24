const TimePlace = (prop) => {

   const Delete =(ID)=>
   {
      prop.setState(


          prop.hr.filter((data) => 
            data.id !== ID
          )


      )
   } 


  return (
    <div>
      {prop.hr.map((val) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{val.country}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Hours : {val.hour}</h6>
            <button type="button" class="btn btn-success" onClick={()=> Delete(val.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimePlace;
