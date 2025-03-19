import react , {useState} from 'react'

const LikeButton = ({isLiked}) => {
  const [isToggled , setIsToggled] = useState(isLiked);

  const handleClike = () =>{
     setIsToggled(!isToggled);
  }

  const st = {
    background : isToggled ? 'blue' : 'white' ,
    color : 'green'
   }
  return <>
    <button style = {st} onClick ={handleClike}>Like Button</button>
  </>
};

export default LikeButton;