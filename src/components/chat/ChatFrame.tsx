import React, {Component} from 'react';
import IndexStore from "../../store/IndexStore";
import {inject, observer} from "mobx-react";
import {Avatar, Button, Input, PageHeader, Typography} from "antd";
import {
    AudioOutlined,
    BorderOutlined,
    CalendarOutlined,
    CheckCircleOutlined,
    ClockCircleFilled,
    CloseOutlined,
    CloudOutlined,
    CommentOutlined,
    DownOutlined,
    FolderOutlined,
    FontColorsOutlined,
    HeartOutlined,
    MenuOutlined,
    MinusOutlined,
    PhoneOutlined,
    PictureOutlined,
    PlusCircleOutlined,
    ScissorOutlined,
    SearchOutlined,
    SettingOutlined,
    SmileOutlined,
    TeamOutlined,
    UserOutlined,
    VideoCameraOutlined
} from '@ant-design/icons';
import '../chat/Chat.css';
import {Link, NavLink} from "react-router-dom";
import {observable} from "mobx";
import moment from "moment";

moment.locale("zh-cn");
moment.updateLocale('zh-cn', {
    meridiem: function (hour, minute, isLowercase) {
        if (hour < 9) {
            return "早上";
        } else if (hour < 11 && minute < 30) {
            return "上午";
        } else if (hour < 13 && minute < 30) {
            return "中午";
        } else if (hour < 18) {
            return "下午";
        } else {
            return "晚上";
        }
    }
});

const {TextArea} = Input;
const {Text} = Typography;

export interface Props {
    indexStore: IndexStore
    history: any
}

// @inject("indexStore")
// @observer
class ChatFrame extends Component<Props> {

    // indexStore: IndexStore;

    //是否选中待办事情列
    // @observable
    // isSelectedToDoThings: boolean;

    constructor(props: Props) {
        super(props);

        // this.isSelectedToDoThings = false;

        // this.indexStore = this.props.indexStore;

        this.setState({
            isSelectedToDoThings: false
        })
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
                <div className={"chitchat-header-row"}>
                    <div className={"chitchat-header-pic"}>
                        <Avatar size={40} style={{backgroundColor: '#ffffff'}} icon={<UserOutlined/>}
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>

                        <Input className={"chitchat-header-search-input"}
                               prefix={<SearchOutlined style={{color: "#d3d3d3"}}/>}/>
                    </div>
                    <div className={"chitchat-header-check-menu"}>
                        <CommentOutlined style={{width: 60}}/>
                        <TeamOutlined style={{width: 60, color: "#bfbfbf"}}/>
                        <CloudOutlined style={{width: 60, color: "#bfbfbf"}}/>
                    </div>

                    <div className={"chitchat-header-check-tip"}>
                        <MenuOutlined style={{marginLeft: '40%'}}/>
                        <MinusOutlined/>
                        <BorderOutlined/>
                        <CloseOutlined/>
                        <span/>
                    </div>
                </div>

                {/*待办列*/}
                <div className={"chitchat-todo-list-row"}>
                    <NavLink className={"chitchat-todo-list"}
                             to={"/"}
                             onMouseOver={() => {
                                 this.setState({isSelectedToDoThings: true})
                             }}
                             onMouseOut={() => {
                                 this.setState({isSelectedToDoThings: false})
                             }}
                             // activeStyle={{backgroundColor: this.state.isSelectedToDoThings ? '#ebebec' : '#fafafa'}}
                    >
                        <div style={{display: "flex", alignItems: "center"}}>
                            <CheckCircleOutlined style={{fontSize: 18, color: '#232323'}}/>
                            <span style={{color: '#000000', marginLeft: 8}}>待办 . 16</span>
                        </div>
                    </NavLink>
                    <div className={"chitchat-object"}>
                        小杨同学
                    </div>

                    <div className={"chitchat-check-operation"}>
                        <VideoCameraOutlined/>
                        <PhoneOutlined/>
                        <PlusCircleOutlined/>
                        <SettingOutlined/>
                    </div>
                </div>

                {/*联系人与聊天列*/}
                <div className={"linkman-and-chat-content-row"}>
                    {/*联系人列表*/}
                    <div className={"linkman-list"}>
                        <div className={"linkman-item"}>

                            <Avatar size={40} style={{backgroundColor: "gray"}} icon={<UserOutlined/>}
                                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                            <div className={"linkman-item-content"}>
                                <div className={"linkman-info"}>
                                    <div className={"linkman-name"}>
                                        小杨同学
                                    </div>
                                    <div className={"linkman-send-time"}>下午 5:24</div>
                                </div>
                                <div className={"linkman-chat-content"}>
                                    <div className={"linkman-chat-content-info"}>
                                        你好啊，我的名字叫react，很高兴认识你！
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/*聊天框*/}
                    <div className={"chitchat-frame"}>
                        <div className={"chitchat-frame-content"}>
                            <Link to={""} className={"check-history-info"}>
                                <ClockCircleFilled/>
                                &nbsp;查看历史消息
                            </Link>

                            <div className={"chitchat-time"}>
                                &nbsp;{moment().format('a HH:mm:ss')}
                            </div>

                            {/*聊天对象*/}
                            <div className={"chitchat-send-message-row"}
                                 style={{alignItems: "center", justifyContent: "flex-start"}}>
                                <div>
                                    <Avatar size={40} style={{backgroundColor: "gray"}} icon={<UserOutlined/>}
                                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                                </div>
                                <div className={"chitchat-other"}>
                                    <span style={{borderRadius: 7}}>你好啊，我的名字叫react，很高兴认识你！</span>
                                </div>
                            </div>

                            {/*我*/}
                            <div className={"chitchat-send-message-row"}
                                 style={{justifyContent: "flex-end", alignItems: "center"}}>
                                <div className={"chitchat-me"}>
                                    <span style={{borderRadius: 7}}>有多高兴？</span>
                                </div>
                                <div>
                                    <Avatar size={40} style={{backgroundColor: "white"}} icon={<UserOutlined/>}
                                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                                </div>
                            </div>

                        </div>

                        <div className={"send-message-row"}>
                            {/*发送消息设置列*/}
                            <div className={"send-message-setting-row"}>
                                <div className={"send-message-icons"}>
                                    <FontColorsOutlined/>
                                    <SmileOutlined/>
                                    <ScissorOutlined/>
                                    <AudioOutlined/>
                                    <FolderOutlined/>
                                    <PictureOutlined/>
                                    <CalendarOutlined/>
                                    <HeartOutlined/>
                                </div>
                                <div className={"message-history"}>
                                    <span style={{cursor: "pointer"}} className="ant-dropdown-link">
                                        消息记录&nbsp;
                                        <DownOutlined/>
                                    </span>
                                </div>
                            </div>

                            {/*输入消息编辑框*/}
                            <div style={{height: '55%'}}>
                                <TextArea className={"edit-message-textarea"}>
                                </TextArea>
                            </div>
                            <div className={"message-send-row"}>
                                <Button size={"small"} type={"primary"} style={{fontSize: 13}}
                                        className="ant-dropdown-link">
                                    发送(
                                    <Text style={{color: "white"}} underline={true}>
                                        S
                                    </Text>
                                    )
                                    <DownOutlined/>
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default ChatFrame;