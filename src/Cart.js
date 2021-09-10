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
                        <tr>
                            <td>1</td>
                            <td>{props.state[0].name }</td>
                            <td>{props.state[0].quan }</td>
                            <td>{props.state[0].id }</td>                            
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>                            
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>                           
                        </tr>
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
