export const wishReducer=(state=[],action)=>{
        switch (action.type) {
            case "ADD_WISH":
                return [...state,action.wishItems]; 
            case "REMOVE_WISH":
                return state.filter(p=>p.id !== action.id)
            case "CLEARALL_WISH":
                return state=[];
            default:
                return state;
            }
}