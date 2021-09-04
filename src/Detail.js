import React, { useState } from "react";
import { useHistory,useParams } from "react-router-dom";

function Detail(props) {
  let history = useHistory();
  let {id}=useParams();
  let 찾은상품=props.shoes.find((상품)=>{
    return 상품.id=id
  })

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes2.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button>
          <button
            className="btn btn-info"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로하기
          </button>
          <button
            className="btn btn-warning"
            onClick={() => {
              history.push("/");
            }}
          >
            홈으로가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
