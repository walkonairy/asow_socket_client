import React, {Component} from 'react';
import './login.css';
import {Button} from "antd";
import RouteUtil from "../util/RouteUtil";
import Particles from "react-particles-js";

interface S {
}

interface P {
    history: any,
}

class Login extends Component<P, S> {


    render() {
        return (
            <div>
                <Particles canvasClassName={"canvas"}
                           params={{
                               "particles": {
                                   "number": {
                                       "value": 200,
                                       "density": {
                                           "enable": false
                                       }
                                   },
                                   "size": {
                                       "value": 10,
                                       "random": true
                                   },
                                   "move": {
                                       "direction": "bottom",
                                       "out_mode": "out"
                                   },
                                   "line_linked": {
                                       "enable": false
                                   }
                               },
                               "interactivity": {
                                   "events": {
                                       "onclick": {
                                           "enable": false,
                                           "mode": "remove"
                                       }
                                   },
                                   "modes": {
                                       "remove": {
                                           "particles_nb": 10
                                       }
                                   }
                               }
                           }}/>
                <div className={"bg-image"}/>
                <div className={"login-container"}>
                    登录
                    <Button type={"primary"} onClick={() => {
                        RouteUtil.enterChatRoom(this.props)
                    }}>
                        登录
                    </Button>
                </div>
            </div>
        );
    }

}

export default Login;