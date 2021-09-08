import React, { useState, useEffect,useContext  } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import {재고context} from './App.js';

let 박스 = styled.div`
  padding: 20px;
`;

let 제목 = styled.h4`
  font-size: 25px;
  color: ${(props) => props.색상};
`;

function Detail(props) {
  let [alert, alert변경] = useState(true);
  let [inputData, inputData변경]=useState('');
  let 재고=useContext(재고context);

  // 업데이트될때 항상 실행된다.
  useEffect(() => {
    let 타이머 = setTimeout(() => {
      // alert창 안보이게 하기
      alert변경(false);
    }, 3000);
    console.log('welcome')
    //return function 다음실행() { }
    return ()=>{ clearTimeout(타이머)}
  },[]);
  // alert라는 state가 변경될때만 실행된다.
   // 조건기능 한번만 실행하고 끝낸다.

  let history = useHistory();
  let { id } = useParams();
  let 찾은상품 = props.shoes.find((상품) => {
    return (상품.id = id);
  });

  //let 찾은상품=props.shoes.find(x=>x.id==id);
  return (
    <div className="container">
      <박스>
        <제목 색상={"red"} className="red"> Detail(상세페이지) </제목>
        {/* <제목 색상={'blue'}> Detail(상세페이지) </제목> */}
      </박스>
      <input onChange={(e)=>{inputData변경(e.target.value)}}/>

      {alert === true ? (<div className="my-alert2">
        <p>재고가 얼마 남지 않았습니다.</p>
      </div>) : null
      }

      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${parseInt(id) + 1}.jpg`}
            width="100%"
          />
        </div>

        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>

          <Info 재고={props.재고} ></Info>
          
          <button className="btn btn-danger" onClick={()=>{
            props.재고변경([9,10,12])
          }}>주문하기</button>

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
          </button>{재고}
        </div>
      </div>
    </div>
  );
}

function Info(props){
  return(
    <p>재고: {props.재고} </p>
  );
}

export default Detail;
