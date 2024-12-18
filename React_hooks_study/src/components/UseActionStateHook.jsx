import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useActionState } from 'react'

const UseActionStateHook = () => {
    const navigate = useNavigate();
    const increment = (prevState,step) => prevState + step;
    const [count, incrementAction] = useActionState(increment,0);

    return (
      <div>
        <button
          onClick={() => navigate('/')}
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#636e72",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            marginBottom: "20px"
          }}
        >
          ← 뒤로가기
        </button>

        <div style={{ marginTop: "80px" }}>
          <h1>카운터: {count}</h1>
          <button
            onClick={() => incrementAction(1)}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              backgroundColor: "#00b894",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
            }}
          >
            +1 증가
          </button>
        </div>
      </div>
    )
}

export default UseActionStateHook