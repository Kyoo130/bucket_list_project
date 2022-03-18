// bucket.js

// 액션 생성
const CREATE = 'bucket/CREATE';
const UPDATE = 'bucket/UPDATE';
const DELETE = 'bucket/DELETE';

// 초기값 설정
const initialState = {
  list: [
    {text: "영화관 가기", completed: false},
    {text: "매일 책읽기", completed: false},
    {text: "수영 배우기", completed: false},
    {text: "코딩하기", completed: false},
  ],
};

// 액션 생성 함수
export function createBucket(bucket){
  return {type: CREATE, bucket: bucket};
}

export function updateBucket(bucket_index) {
  return {type: UPDATE, bucket_index}
}

export function deleteBucket(bucket_index) {
  return {type: DELETE, bucket_index};
}


// 리듀서
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "bucket/CREATE": {
      const new_bucket_list = [...state.list, action.bucket];
      return {list: new_bucket_list}
    }

    case "bucket/UPDATE": {
      const new_bucket_list = state.list.map((l, idx)=>{
        if(parseInt(action.bucket_index) === idx) {
          return {...l, completed: true}
        } else {
          return l;
        }
      })
      console.log(new_bucket_list)
      return {list: new_bucket_list};
    }

    case "bucket/DELETE": {
      const new_bucket_list = state.list.filter((l, idx) => {
        return parseInt(action.bucket_index) !== idx;
      })
      return {list: new_bucket_list};
    }

    default:
      return state;
  }
}