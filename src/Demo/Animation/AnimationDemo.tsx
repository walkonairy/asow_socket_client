import React, {useState} from 'react';
import './index.css';
import {Button} from "antd";

function AnimationDemo() {

    const [name, setName] = useState('custom');

    return (
        <div style={{
            padding: 24,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>

            <div className={name}/>

            <div style={{margin: 48}}>
                <Button
                    style={{marginRight: 16}}
                    onClick={() => setName('custom out')}
                >
                    淡出
                </Button>

                <Button onClick={() => setName('custom')}>
                    淡入
                </Button>
            </div>


            <div className={'circle'} style={{marginTop: 48}}/>

        </div>
    )
}

export default AnimationDemo;