import React, { useState } from 'react';

const DiscussionForum = () => {
  const [posts, setPosts] = useState([]); // For storing posts
  const [newPost, setNewPost] = useState(''); // For the new post input

  const handlePostSubmit = () => {
    if (!newPost) return;
    setPosts([...posts, newPost]);
    setNewPost('');
  };

  return (
    <div className="discussion-forum">
      <h2>Discussion Forum</h2>
      <div>
        <input
          type="text"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Write a post..."
        />
        <button onClick={handlePostSubmit}>Post</button>
      </div>
      <div>
        {posts.map((post, index) => (
          <p key={index}>{post}</p>
        ))}
      </div>
    </div>
  );
};

export default DiscussionForum;
