import react from 'react';
import LikeButton from './likebutton.jsx';

const PostCard = ({ profileImage, username, content, isLiked }) => {
  return (
    <>
      <img src={profileImage} alt="image" />
      <h3>{username}</h3>
      <h5>{content}</h5>
      <LikeButton key={isLiked} />
    </>
  );
};

export default PostCard;
