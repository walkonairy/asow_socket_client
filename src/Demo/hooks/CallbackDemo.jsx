import React, {memo, useCallback, useState} from "react";

function CallbackDemo() {

    const [count, setCount] = useState(0)
    const increment = () => setCount(count + 1)

    const [name, setName] = useState('hi~')
    // const changeName = useCallback((newName) => setName(newName), []);
    const changeName = (newName) => setName(newName);

    return (
        <div>
            <button onClick={increment}>点击次数：{count}</button>
            {/*<ChildComp name={name} onClick={changeName}/>*/}
            <MemoChildComp name={name} onClick={changeName}/>
        </div>
    )
}


function ChildComp({name, onClick}) {
    console.log('render child-comp ...')
    return <>
        <div>Child Comp ... {name}</div>
        <button onClick={() => onClick('hello')}>改变 name 值</button>
    </>
}

const MemoChildComp = memo(ChildComp)

export default CallbackDemo;