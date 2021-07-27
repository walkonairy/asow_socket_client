import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ChatFrame from "./components/chat/ChatFrame";
import Login from "./components/Login";
import ScrollToTop from "./components/_common/ScrollToTop";
import Demo1 from "./Demo/Demo1";
import Demo2 from "./Demo/Demo2";
import UploadView from "./pages/upload/UploadView";
import AccessibilityDemo from "./Demo/AccessibilityDemo";
import ReduxDemo from "./Demo/ReduxDemo/pages/ReduxDemo";
import {Provider} from "react-redux";
import {createStore} from "redux";
import todoApp from "./Demo/ReduxDemo/reducers";
import MoveModalDemo from "./Demo/MoveModalDemo";
import CallbackDemo from "./Demo/hooks/CallbackDemo";
import AnimationDemo from "./Demo/Animation/AnimationDemo";
import EchartsDemo1 from "./Demo/EchartsDemo/EchartsDemo1";

export let store = createStore(todoApp)

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Router basename={"/"}>
                <React.Suspense fallback={"loading..."}>
                    <ScrollToTop>
                        <Switch>
                            <Route exact path="/" component={Demo1}/>
                            {/*登录*/}
                            <Route path="/user/login" component={Login}/>
                            {/*聊天室*/}
                            <Route exact path="/chat/frame" component={ChatFrame}/>

                            <Route exact path="/upload" component={UploadView}/>

                            <Route exact path="/demo/1" component={Demo1}/>
                            <Route exact path="/demo/2" component={Demo2}/>
                            <Route exact path="/a11y" component={AccessibilityDemo}/>
                            <Route exact path="/redux/demo" component={ReduxDemo}/>
                            <Route exact path="/move/modal/demo" component={MoveModalDemo}/>
                            <Route exact path="/hook/demo" component={CallbackDemo}/>
                            <Route exact path="/animation/demo" component={AnimationDemo}/>
                            <Route exact path="/echarts/demo" component={EchartsDemo1}/>

                        </Switch>
                    </ScrollToTop>
                </React.Suspense>
            </Router>
        </Provider>
    );
};

export default App;
