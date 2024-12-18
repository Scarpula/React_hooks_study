import React, { useState, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const TodoButton = React.memo(({onClick, text}) => {
    console.log(`${text} 버튼 렌더링`);
    return (
        <button 
            onClick={() => {
                console.log(`${text} 클릭됨`);
                onClick();
            }}
            style={{
                padding: "10px 20px",
                fontSize: "16px",
                cursor: "pointer",
                backgroundColor: "#00b894",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                margin: "5px"
            }}
        >
            {text}
        </button>
    )
}, (prevProps, nextProps) => {
    console.log('이전 props:', prevProps);
    console.log('다음 props:', nextProps);
    const equal = prevProps.text === nextProps.text && 
           prevProps.onClick === nextProps.onClick;
    console.log('동일한가?:', equal);
    return equal;
});

const UseCallbackHook = () => {
    const navigate = useNavigate();
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [dummy, setDummy] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDummy(prev => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const incrementCount1 = useCallback(() => {
        console.log('incrementCount1 호출됨');
        setCount1(prev => prev + 1);
    }, []);

    const incrementCount2 = () => {
        console.log('incrementCount2 호출됨');
        setCount2(prev => prev + 1);
    };

    console.log('부모 컴포넌트 렌더링:', dummy);

    return (
        <div>
            <button
                onClick={() => navigate('/')}
                style={{
                    position : 'absolute',
                    top : '20px',
                    left : '20px',
                    padding : '10px 20px',
                    fontSize : '16px',
                    cursor : 'pointer',
                    backgroundColor : '#636e72',
                    color : '#fff',
                    border : 'none',
                    borderRadius : '5px',
                    marginBottom : '20px'
                }}
            >
                ← 뒤로가기
            </button>
            <div style={{ marginTop : '80px'}}>
                <h1>useCallback 예제</h1>
                <div style={{ marginTop : '80px'}}>
                    <h2>카운터 1 : {count1}</h2>
                    <h2>카운터 2 : {count2}</h2>
                </div>
                <div>
                    <TodoButton
                        text="useCallback 사용 버튼"
                        onClick={incrementCount1}
                    />
                    <TodoButton
                        text="useCallback 미사용 버튼"
                        onClick={incrementCount2}
                    />
                </div>
                <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#dfe6e9', borderRadius: '10px'}}>
                    <p>콘솔을 확인해보세요:</p>
                    <ul>
                        <li>useCallback을 사용한 버튼은 부모 컴포넌트가 리렌더링 되어도 다시 렌더링되지 않습니다.</li>
                        <li>useCallback을 사용하지 않은 버튼은 부모 컴포넌트가 리렌더링 될 때마다 렌더링됩니다.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UseCallbackHook;