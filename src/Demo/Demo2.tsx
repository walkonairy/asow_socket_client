import React, {useEffect, useState} from "react";
import {useLocation} from 'react-router-dom';
import {Button} from "antd";

const Demo2 = () => {

    const location = useLocation();

    const [obj, setObj] = useState<any>({});
    const [items, setItems] = useState<string[]>([]);

    useEffect(() => {
        const state = location.state as any;
        state && setObj(state);
        state && setItems(state.items);

    }, []);

    const onAdd = () => {
        setItems([...items, "hahah"]);
    }

    const onCancel = () => {
        setItems(obj.items);
        console.log(location.state)
    }

    return (
        <>
            <Button onClick={onAdd}>
                增加
            </Button>

            <Button onClick={onCancel}>
                取消
            </Button>


            {
                items.map((item,index) => (
                    <div key={index}>
                        {item}
                    </div>
                ))
            }
        </>
    )
}
export default Demo2;