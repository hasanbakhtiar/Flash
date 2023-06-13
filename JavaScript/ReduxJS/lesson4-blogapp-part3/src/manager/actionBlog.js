export const addblog = ({title,auther})=>({
    type:"ADD_BLOG",
    newblog:{
        id:crypto.randomUUID(),
        title,
        auther
    }
})


export const editBlog = (id,update)=>({
    type:"EDIT_BLOG",
    id, 
    update
})

export const removeBlog = ({id})=>({
    type:"REMOVE_BLOG",
    id
})


