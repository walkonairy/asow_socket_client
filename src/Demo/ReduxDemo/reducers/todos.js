const todos = (state = [], action) => {
    console.log(state)
    switch (action.type) {
        case "ADD":
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                }
            ]
        default:
            return state;
    }
}

export default todos;