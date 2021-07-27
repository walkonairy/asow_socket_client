let storeId = 0;

export const AddTodoAction = text => {
    return {
        type: 'ADD',
        id: storeId++,
        text,
    }
}