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
       
        default:
            return state
    }
}