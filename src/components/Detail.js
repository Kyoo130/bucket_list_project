import React from 'react';
import {useParams, useNavigate} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import {deleteBucket, updateBucket} from "../redux/modules/bucket";

const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const bucket_index = params.index;
  const bucket_list = useSelector((state) => state.bucket.list);

  return (
    <div>
      <h1>{bucket_list[bucket_index].text}</h1>
      <button onClick={()=>{
        dispatch(updateBucket(bucket_index))
        navigate(-1)
      }}>완료하기</button>
      <button onClick={()=>{
        dispatch(deleteBucket(bucket_index))
        navigate(-1)
      }}>삭제하기</button>
    </div>
  );
};

export default Detail;
