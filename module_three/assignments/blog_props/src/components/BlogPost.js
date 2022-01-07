import React from "react";

function BlogPost(props) {
    return (
        <div style={{margin: "auto", width: "50%"}}>
            <h2>{props.info.title}</h2>
            <h3>{props.info.subTitle}</h3>
            <p>Posted by {props.info.author} on {props.info.date}</p>
            <hr />
        </div>
    );
};

export default BlogPost;