import React from 'react';
import './App.css';
import store from "./store";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ChatFrame from "./components/chat/ChatFrame";
import {Provider} from "mobx-react";
import Login from "./components/Login";
import ScrollToTop from "./components/_common/ScrollToTop";

const App: React.FC = () => {
    return (
        <Provider {...store}>
            <Router basename={"/"}>
                <React.Suspense fallback={"loading..."}>
                    <ScrollToTop>
                        <Switch>
                            <Route exact path="/" component={Login}/>
                            {/*登录*/}
                            <Route path="/user/login" component={Login}/>
                            {/*聊天室*/}
                            <Route exact path="/chat/frame" component={ChatFrame}/>
                        </Switch>
                    </ScrollToTop>
                </React.Suspense>
            </Router>
        </Provider>
    );
};

export default App;
