import React, {useState} from "react";

import {useHistory} from 'react-router-dom';
import {Button, Input} from "antd";
import useDebounce from "./hooks/useDebounce";

const mockData = [
    {name: 'a', items: ["123", "456"]},
    {name: 'b', items: ["123", "456"]},
    {name: 'c', items: ["123", "456"]},
    {name: 'd', items: ["123", "456"]},
    {name: 'e', items: ["123", "456"]},
];

const Demo1 = () => {

    const history = useHistory();

    const [value, setValue] = useState("");
    const debounceValue = useDebounce(value, 500);

    const onClick = () => {
        history.push({pathname: "/demo/2", state: mockData[0]});
    }

    const onChangeValue = (e: any) => {
        setValue(e.target.value);
    }

    return (
        <>
            <Button onClick={onClick}>
                点我传输值
            </Button>

            <div>
                <Input value={value} onChange={onChangeValue} style={{width: 500}}/>
            </div>
            <div>value: {value}</div>
            <div>debounceValue: {debounceValue}</div>
        </>
    )
}
export default Demo1;