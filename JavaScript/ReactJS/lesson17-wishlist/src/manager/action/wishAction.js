export const addWish =({id,title,price,photo})=>({
    type:"ADD_WISH",
    wishItems:{
        id,
        title,
        price,
        photo
    }
})

export const removeWish=({id})=>({
    type:"REMOVE_WISH",
    id
})