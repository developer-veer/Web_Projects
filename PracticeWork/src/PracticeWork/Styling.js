import '../ExtrStyling.css';
function Styling() {

    const style = {
         
        color:'black',
        fontSize :'12rem'
    };

    return ( 
        <div>
            
            {/* inLine Styling */}
            <h1 style={{color:'blue'}}>This is inline Styling</h1>

            <h1 style={style}>This is Internal Styling</h1>

            <h1 className='extrnalStyle'>This is Internal Styling</h1>


        </div>
     );
}

export default Styling;