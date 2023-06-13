const initialBlog = [
    {
        id: 1,
        title: "Blog One",
        auther: "Jhon"
    },
    {
        id: 2,
        title: "Blog Two",
        auther: "Doe"
    },
    
]


export const blogReducer = (state = initialBlog, action) => {
    switch (action.type) {
        case "ADD_BLOG":
            return [...state,action.newblog]
        

        case "EDIT_BLOG":
            return state.map((b)=>{
                if (b.id === action.id) {
                        return {
                            ...b,...action.update
                        }
                }else{
                    return b;
                }
            })
            

        case "REMOVE_BLOG":
            return state.filter(item=>{
                return item.id !== action.id
            })
       
        default:
            return state
    }
}