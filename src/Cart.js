import React from 'react'
import {Table} from 'react-bootstrap';
import {connect} from 'react-redux';

function Cart(props) {
    return (
        <div>
            <div>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>상품명</th>
                            <th>수량</th>
                            <th>변경</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.state.map((a,i)=>{
                                return(
                                    <tr key={i}>
                                        <td>{a.id}</td>
                                        <td>{a.name}</td>
                                        <td>{a.quan}</td>
                                        <td>
                                            <button onClick={()=>{props.dispatch({type:"수량증가"})}}>+</button>
                                            <button onClick={()=>{props.dispatch({type:"수량감소"})}}>-</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </Table>      
            </div>
        </div>
    )
}

function state를props화(state){
    return{ 
        //상품명:state[0].name
        state:state
    }
}

//export default Cart
export default connect(state를props화)(Cart)
