import { createContext, useState } from "react";

 const UserContext = createContext();

 const PostContext = ({post}) => {
    const [item_name, setItemName] = useState("");
    // const [description, setDescription] = useState("");
    // const [price, setPrice] = useState("");
    // const [category_id, setCategoryId] = useState("");
   
    return(
        <UserContext.Provider value={[item_name, setItemName]}>
            {post}
        </UserContext.Provider>
    )

 }

 export {UserContext, PostContext}