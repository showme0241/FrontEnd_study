export default function reducer(state, action) {
    let newState = [];

    switch (action.type) {
        case "CREATE": {
            newState = [action.data, ...state];
            break;
        }
        case "UPDATE":
            newState = state.map((it) => {
                // action 데이터 === event 데이터
                return it.id === action.data.id ? { ...action.data } : it;
            });
            break;
        case "DELETE":
            newState = state.filter((it) => it.id !== action.data.id);
            break;

        default:
            break;
    }

    return newState;
}
