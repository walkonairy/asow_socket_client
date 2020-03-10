import React, {Component} from 'react';
import IndexStore from "../../store/IndexStore";
import {inject, observer} from "mobx-react";
import {Avatar, Input, PageHeader} from "antd";
import {
    BorderOutlined,
    CheckCircleOutlined,
    CloseOutlined,
    MenuOutlined,
    MinusOutlined,
    PhoneOutlined,
    PlusCircleOutlined,
    SearchOutlined,
    SettingOutlined,
    UserOutlined,
    VideoCameraOutlined,
    TeamOutlined,
    CommentOutlined,
    CloudOutlined,
    SmileOutlined,
    FontColorsOutlined,
    ScissorOutlined,
    FolderOutlined,
    PictureOutlined,
    AudioOutlined,
    CalendarOutlined,
    HeartOutlined,
} from '@ant-design/icons';
import '../chat/Chat.css';
import {NavLink} from "react-router-dom";
import {observable} from "mobx";

const {TextArea} = Input;

export interface Props {
    indexStore: IndexStore
    history: any
}

@inject("indexStore")
@observer
class ChatFrame extends Component<Props> {

    indexStore: IndexStore;

    //是否选中待办事情列
    @observable
    isSelectedToDoThings: boolean;

    constructor(props: Props) {
        super(props);

        this.isSelectedToDoThings = false;

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

                {/*头像列*/}
                <div style={{
                    textAlign: "center",
                    width: 825,
                    height: 60,
                    margin: '0 auto',
                    marginTop: 20,
                    display: "flex",
                    flexDirection: "row",
                    boxShadow: '-2px -3px 7px -6px rgba(0,0,0,0.8)',
                    borderTopLeftRadius: 5
                }}>
                    <div style={{
                        width: "25%",
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        borderTopLeftRadius: 5,
                        backgroundColor: '#1790ed',
                    }}>
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
                    <div style={{
                        width: "50%",
                        backgroundColor: '#1790ed',
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: '#ffffff',
                        fontSize: 26
                    }}>
                        <CommentOutlined style={{width: 60}}/>
                        <TeamOutlined style={{width: 60}}/>
                        <CloudOutlined style={{width: 60}}/>
                    </div>

                    <div style={{
                        width: "25%",
                        backgroundColor: '#3448a1',
                        borderTopRightRadius: 5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        color: '#ffffff'
                    }}>
                        <MenuOutlined style={{marginLeft: '40%'}}/>
                        <MinusOutlined/>
                        <BorderOutlined/>
                        <CloseOutlined/>
                        <span/>
                    </div>
                </div>

                {/*待办列*/}
                <div style={{
                    textAlign: "center",
                    width: 825,
                    height: 40,
                    margin: '0 auto',
                    display: "flex",
                    flexDirection: "row"
                }}>
                    <NavLink
                        style={{
                            width: "25%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: '0px 10px',
                            marginTop: 2,
                            backgroundColor: '#fafafa',
                            borderBottom: '1px solid #eaeaea'
                        }}
                        to={"/"}
                        onMouseOver={() => {
                            this.isSelectedToDoThings = true;
                        }}
                        onMouseOut={() => {
                            this.isSelectedToDoThings = false
                        }}
                        activeStyle={{backgroundColor: this.isSelectedToDoThings ? '#ebebec' : '#fafafa'}}
                    >
                        <div style={{display: "flex", alignItems: "center"}}>
                            <CheckCircleOutlined style={{fontSize: 18, color: '#232323'}}/>
                            <span style={{color: '#000000', marginLeft: 8}}>待办 . 16</span>
                        </div>
                    </NavLink>
                    <div style={{
                        width: "55%",
                        display: "flex",
                        alignItems: "center",
                        marginLeft: 2,
                        paddingLeft: 10,
                        fontSize: 16,
                        color: '#000000',
                        borderBottom: '1px solid #eaeaea'
                    }}>
                        小杨同学
                    </div>

                    <div style={{
                        width: "20%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                        borderBottom: '1px solid #eaeaea',
                        fontSize: 16
                    }}>
                        <VideoCameraOutlined/>
                        <PhoneOutlined/>
                        <PlusCircleOutlined/>
                        <SettingOutlined/>
                    </div>
                </div>

                {/*联系人与聊天列*/}
                <div style={{
                    textAlign: "center",
                    width: 825,
                    height: 550,
                    margin: '0 auto',
                    display: "flex",
                    flexDirection: "row",
                }}>
                    {/*联系人列表*/}
                    <div style={{
                        width: '25%',
                        backgroundColor: '#fafafa',
                        borderBottomLeftRadius: 5
                    }}>

                    </div>

                    {/*聊天框*/}
                    <div style={{width: '75%', display: "flex", flexDirection: "column"}}>
                        <div style={{height: '75%'}}>

                        </div>
                        <div style={{
                            height: '25%',
                            borderTop: '1px solid #eaeaea',
                            display: "flex",
                            flexDirection: "column"
                        }}>
                            {/*发送消息设置列*/}
                            <div style={{height: '25%', display: "flex", flexDirection: "row", alignItems: "center"}}>
                                <div style={{
                                    width: '55%',
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-around",
                                    fontSize: 18
                                }}>
                                    <FontColorsOutlined/>
                                    <SmileOutlined/>
                                    <ScissorOutlined/>
                                    <AudioOutlined/>
                                    <FolderOutlined/>
                                    <PictureOutlined/>
                                    <CalendarOutlined/>
                                    <HeartOutlined/>
                                </div>
                                <div style={{width: '42%', display: "flex", justifyContent: "flex-end", fontSize: 12}}>
                                    消息记录 ↓
                                </div>
                            </div>

                            {/*输入消息编辑框*/}
                            <div style={{height: '75%'}}>
                                <TextArea style={{
                                    backgroundColor: '#ffffff',
                                    border: "none",
                                    boxShadow: "none",
                                    height: '100%',
                                }}>

                                </TextArea>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default ChatFrame;