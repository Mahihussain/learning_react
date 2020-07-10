export const postReducer = (state=[], action) => {
    switch(action.type){
        case "ADD_POST":
            console.log("Add Post in postReducer");
            return [...state, {
                UserId: action.payload.UserId,
                Id: action.payload.Id,
                Title: action.payload.Title,
                Body: action.payload.Body
            }];
            case "REMOVE_POST":
                console.log("Remove Post in postReducer");
                return state.filter(post => post.Id !== action.payload.Id)
            default:
                return state;
    }
}