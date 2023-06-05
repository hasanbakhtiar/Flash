export const addblog = ()=>({
    type:"ADD_BLOG",
    newblog:{
        id:crypto.randomUUID(),
        title:"Blog Three",
        auther:"George "
    }
})


