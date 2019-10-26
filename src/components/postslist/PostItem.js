import React from 'react';

function PostHeader({author, date}){
  return (
    <div className="post-header">
      <img className="avatar" src={author.avatar} alt=""/>
      <div className="details">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}


function PostBody({ comments }){
  return (
    <div className="post-comments">
      <div className="divider" /> 
        {comments.map(comment => (
          <div key={comment.id} className="comment">
            <img className="avatar" src={comment.author.avatar} alt=""/>
            <p>
              <span>{comment.author.name}</span>
              {comment.content}
            </p>
          </div>
        ))}
    </div>
  );
}

function PostItem({author, date, content, comments}){
  return (
    <div className="post">
      <PostHeader author={author} date={date} />
      <p className="post-content">{content}</p>
      <PostBody comments={comments} />
    </div>
  );
}

export default PostItem;