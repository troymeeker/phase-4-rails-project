// import React from "react";
// // import EditForm from './EditForm'
// import PostItem from "./PostItem";

// function RenderPost({posts, setPosts}){
   
//     // useEffect(() => {
//     //     fetch('/posts')
//     //     .then(resp => resp.json())
//     //     .then((posts) => setPosts(posts))
//     // }, [])

//     // function toggleEditItem(){
//     //     setShowEdit(!showEdit)
//     // }
//     // function submitNewItem(e){
//     //     e.preventDefault();
//     //     console.log('edit existing item');
//     // }
   
//     function handlePostDelete(id){
//         const updatedPosts = posts.filter((post) => post.id !== id)
//         setPosts(updatedPosts);
//     }
   
//       const postItems = posts.map((post) => {
//        return <PostItem post={post} key={post.id} onItemDelete={handlePostDelete} />      
//       }) 

//     return (
//         <div>
//             <p> <strong>Category</strong> </p>
//             {/* <ul className="list"> */}
//                {postItems}
//             {/* </ul> */}
           
//         </div>
//     );
// }

// export default RenderPost;