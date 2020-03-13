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
                    flexDirection: "row",
                    borderLeft: "1px solid #eaeaea"
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
                            borderBottom: '1px solid #eaeaea',
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
                        fontSize: 16,
                        borderRight: "1px solid #eaeaea"
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
                    borderLeft: "1px solid #eaeaea",
                    borderBottom: "1px solid #eaeaea"
                }}>
                    {/*联系人列表*/}
                    <div style={{
                        width: '25%',
                        backgroundColor: '#fafafa',
                        borderBottomLeftRadius: 5,
                        fontSize: 13
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            padding: "10px 10px 10px 15px",
                            backgroundColor: "white"
                        }}>

                            <Avatar size={40} style={{backgroundColor: "gray"}} icon={<UserOutlined/>}
                                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                marginLeft: 10,
                                textAlign: "left",
                                minWidth: 130
                            }}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between"
                                }}>
                                    <div style={{
                                        maxWidth: 77,
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        color: "black",
                                        fontWeight: 500
                                    }}>
                                        小杨同学
                                    </div>
                                    <div style={{float: "right", fontSize: 12, maxWidth: 53}}>下午 5:24</div>
                                </div>
                                <div style={{display: "flex", flexDirection: "row", fontSize: 12}}>
                                    <div style={{
                                        maxWidth: 130,
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis"
                                    }}>你好啊，我的名字叫react，很高兴认识你！
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/*聊天框*/}
                    <div style={{width: '75%', borderRight: "1px solid #eaeaea"}}>
                        <div style={{height: '75%', display: "flex", flexDirection: "column", overflow: "auto"}}>
                            <Link to={""} style={{fontSize: 13, marginTop: 15}}>
                                <ClockCircleFilled/>
                                &nbsp;查看历史消息
                            </Link>

                            <div style={{fontSize: 12, color: "#bababc", marginTop: 20}}>
                                &nbsp;{moment().format('a HH:mm:ss')}
                            </div>

                            {/*聊天对象*/}
                            <div style={{
                                width: '94%',
                                marginLeft: "3%",
                                marginTop: 5,
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "flex-start"
                            }}>
                                <div>
                                    <Avatar size={40} style={{backgroundColor: "gray"}} icon={<UserOutlined/>}
                                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                                </div>
                                <div className={"chitchat-other"}>
                                    <span>你好啊，我的名字叫react，很高兴认识你！</span>
                                </div>
                            </div>

                            {/*我*/}
                            <div style={{
                                width: '94%',
                                marginLeft: "3%",
                                marginTop: 5,
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-end",
                                alignItems: "flex-end"
                            }}>
                                <div className={"chitchat-me"}>
                                    <span>有多高兴？</span>
                                </div>
                                <div>
                                    <Avatar size={40} style={{backgroundColor: "white"}} icon={<UserOutlined/>}
                                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                                </div>
                            </div>

                        </div>

                        <div style={{
                            height: '25%',
                            borderTop: '1px solid #eaeaea',
                            display: "flex",
                            flexDirection: "column",
                            marginLeft: 2
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
                                <div style={{width: '42%', display: "flex", justifyContent: "flex-end", fontSize: 13}}>
                                    <span style={{cursor: "pointer"}} className="ant-dropdown-link">
                                        消息记录&nbsp;
                                        <DownOutlined/>
                                    </span>
                                </div>
                            </div>

                            {/*输入消息编辑框*/}
                            <div style={{height: '55%'}}>
                                <TextArea style={{
                                    backgroundColor: '#ffffff',
                                    border: "none",
                                    boxShadow: "none",
                                    height: '100%',
                                    fontSize: 13,
                                    color: "black"
                                }}>
                                </TextArea>
                            </div>
                            <div style={{
                                height: '25%',
                                width: '97%',
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "center",
                            }}>
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