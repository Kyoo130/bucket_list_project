import React, {useRef} from "react";
import styled from "styled-components";
import {Route, Routes} from "react-router-dom";
import {useDispatch} from "react-redux"
import {createBucket} from "./redux/modules/bucket"

import Progress from "./components/Progress";
import BucketList from "./components/BucketList";
import Detail from "./components/Detail";
import NotFound from "./components/NotFound";

function App() {
  const textRef = useRef(null);
  const dispatch = useDispatch();


  const addBucketList = () => {
    dispatch(createBucket({text: textRef.current.value, completed: false}));
  }
  return (
    <div className="App">
      <Container>
        <Title>내 버킷리스트</Title>
        <Progress/>
        <Line/>
        <Routes>
          <Route path="/" element={<BucketList/>}/>
          <Route path="/detail/:index" element={<Detail/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Container>
      <Input>
        <input type="text" ref={textRef}/>
        <button onClick={addBucketList}>추가하기</button>
      </Input>
      <button onClick={() => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
      }}>위로가기
      </button>
    </div>
  );
}

const Input = styled.div`
  display: flex;
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  & > * {
    padding: 5px;
  }

  & input {
    border: 1px solid #888;
    margin-right: 10px;
    width: 70%;
  }

  & input:focus {
    outline: none;
    border: 1px solid #a673ff;
  }
  
  & button {
    width: 25%;
    color: #fff;
    border: #a673ff;
    background-color: #a673ff;
  }
`;

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0;
  border: 1px dotted #ddd;
`;

export default App;