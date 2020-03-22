export default class RouteUtil {
    public static userLogin(props: any) {
        props.history.push({pathname: '/user/login'});
    }

    public static enterChatRoom(props: any) {
        props.history.push({pathname: '/chat/frame'});
    }
}