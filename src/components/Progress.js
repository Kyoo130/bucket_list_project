import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";

const Progress = () => {
  const bucket_list = useSelector((state) => state.bucket.list)

  let count = 0;
  bucket_list.map((b, idx) => {
    if (b.completed) {
      count++;
    }
  })
  return (
    <ProgressBar>
      <HighLight width={(count/bucket_list.length) * 100 + "%"} />
      <Dot />
    </ProgressBar>
  );
};

const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #eee;
  width: 100%;
  height: 20px;
  border-radius: 10px;
`

const HighLight = styled.div`
  background-color: #673ab7;
  transition: 1s;
  width: ${(props) => props.width};
  height: 20px;
  border-radius: 10px;
`

const Dot = styled.div`
  width: 30px;
  height: 30px;
  background-color: #fff;
  border: 5px solid #673ab7;
  border-radius: 50%;
  margin: 0 0 0 -20px;
`


export default Progress;
