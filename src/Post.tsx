import { useParams } from "react-router";
import { useEffect, useState } from "react";
import newsData from './assets/data.json';
import './Post.css';
function Post(){
    const{id} = useParams();
    const [postsData, setPostsData] = useState(newsData[0]);
    useEffect(() => {
        if (id){
            setPostsData(newsData[parseInt(id)]);
        }
    }, []);
    return (
        <>
        <div className="post">
            <div className="feedItemInner">
                <div className="postHeader">
                    <p>{postsData.date}</p>
                    <h2>{postsData.title}</h2>
                    <p className='postText'>{postsData.body}</p>
                </div>
                <div className="imgContainer">
                    <img src={postsData.image} alt="Фото" />    
                </div>
            </div>
        </div>
        </>
    
    );
}

export default Post;