import React from "react";
import Information from "../resources/Information"
import BlogPost from "./BlogPost"

function BlogList() {
    const PostList = Information.map(post => <BlogPost key={post.id} info={post}/>);

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
           {PostList}
           <button style={{padding: 15}}> {"Older Posts -->"} </button>
           <hr style={{marginLeft: 0, marginRight: 0, width: "100%"}}/>
        </div>
    );
};

export default BlogList;