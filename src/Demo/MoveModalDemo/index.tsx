import React, {useEffect, useState} from "react";
import {Button, Modal} from "antd";
import {CloseOutlined} from "@ant-design/icons";

interface P {

}

const MoveModalDemo: React.FC<P> = () => {

    const width = window.screen.width;
    const height = window.screen.height;

    const _random = (x: number) => Math.floor(Math.random() * x);

    const [left, setLeft] = useState(width / 2);
    const [top, setTop] = useState(height / 2);

    const [moveCount, setMoveCount] = useState(0);
    const [open, setOpen] = useState(false);


    useEffect(() => {
        console.log(moveCount % 10)
        if (moveCount % 10 === 0 && moveCount !== 0) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [moveCount])

    const toMove = () => {
        setLeft(_random(width / 2));
        setTop(_random(height / 2));
        setMoveCount(moveCount + 1);
    }

    return (
        <>

            <Modal visible={open} onCancel={() => setOpen(false)} footer={null}>
                你好弱啊，就这还想要脚本？
            </Modal>

            <div style={{
                backgroundColor: '#8c8c8c',
                bottom: 0,
                height: '100%',
                left: 0,
                position: 'fixed',
                right: 0,
                top: 0,
                zIndex: 1000,
            }}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: 'center',
                        alignItems: "center",
                        marginTop: 24,
                    }}
                >
                    <div style={{position: "absolute", top, left}}>
                        <div
                            style={{
                                width: 400,
                                height: 50,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                background: '#fff',
                                borderBottom: '1px solid #efefef',
                                padding: '0 16px'
                            }}
                        >
                            <div>阴阳师脚本</div>
                            <div style={{width: 30, cursor: "pointer"}} onMouseMove={toMove}>
                                <CloseOutlined/>
                            </div>
                        </div>
                        <div style={{
                            width: 400,
                            height: 120,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            background: '#fff',
                        }}>
                            <Button onMouseMove={toMove}>点我下载</Button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MoveModalDemo;