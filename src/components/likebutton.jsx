import React from 'react';

function LikeButton({ isLiked, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: isLiked ? '#ff4d4d' : '#ccc',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        padding: '5px 10px',
        cursor: 'pointer',
      }}
    >
      {isLiked ? 'Liked' : 'Like'}
    </button>
  );
}

export default LikeButton;
