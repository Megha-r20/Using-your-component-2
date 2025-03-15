import React from 'react';
import LikeButton from './LikeButton';

function PostCard({ post, onLikeToggle }) {
  return (
    <div style={styles.card}>
      <img
        src={post.profileImage}
        alt="Profile"
        style={styles.profileImage}
      />
      <div style={styles.content}>
        <h3>{post.username}</h3>
        <p>{post.content}</p>
        <LikeButton
          isLiked={post.isLiked}
          onClick={() => onLikeToggle(post.id)}
        />
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    margin: '10px 0',
    backgroundColor: '#f9f9f9',
  },
  profileImage: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  content: {
    flex: 1,
  },
};

export default PostCard;
