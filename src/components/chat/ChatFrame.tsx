import React, {Component} from 'react';
import IndexStore from "../../store/IndexStore";
import {inject, observer} from "mobx-react";
import {Avatar, Input, PageHeader} from "antd";
import {UserOutlined} from '@ant-design/icons';
import '../chat/Chat.css';
import {SearchOutlined} from '@ant-design/icons';

export interface Props {
    indexStore: IndexStore
    history: any
}

@inject("indexStore")
@observer
class ChatFrame extends Component<Props> {

    indexStore: IndexStore;

    constructor(props: Props) {
        super(props);
        this.indexStore = this.props.indexStore;
    }

    render() {
        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    title="聊天室"
                    subTitle="xxx"
                />

                <div style={{
                    textAlign: "center",
                    width: 825,
                    backgroundColor: '#1790ed',
                    height: 60,
                    margin: '0 auto',
                    marginTop: 20,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    display: "flex",
                    flexDirection: "row"
                }}>
                    <div style={{width: "25%", display: "flex", justifyContent: "space-around", alignItems: "center"}}>
                        <Avatar size={40} style={{backgroundColor: '#ffffff'}} icon={<UserOutlined/>}
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>

                        <Input style={{
                            backgroundColor: '#1790ed',
                            width: "50%",
                            height: 24,
                            borderRadius: 12,
                            display: "flex",
                            alignItems: "center",
                            paddingLeft: 10
                        }} prefix={<SearchOutlined style={{color: "#d3d3d3"}}/>}/>
                    </div>
                    <div style={{width: "75%"}}>

                    </div>
                </div>

                <div>

                </div>

            </div>
        );
    }
}

export default ChatFrame;