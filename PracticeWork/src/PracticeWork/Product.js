import { Component } from "react";
class  Product extends Component {
    state = { 
        quantity : 10
     } 

    Increse =()=>{


        this.setState({quantity : this.state.quantity+1})

    }

    Decrese = ()=>{


        this.setState({quantity : this.state.quantity-1})

    }



    render() { 
        return (

            <div>
                <button onClick={this.Increse}>+</button>
                {this.state.quantity}
                <button onClick={this.Decrese}>-</button>
            </div>
        );
    }
}
 
export default Product;