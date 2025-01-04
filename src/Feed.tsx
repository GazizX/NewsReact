import './Feed.css';
import FeedItem from './FeedItem';
import newsData from './assets/data.json';
import { useEffect, useState } from 'react';
import gifPath from './assets/loading-gif.gif'
import { useTheme } from './useTheme';
interface Post {
    id: number;
    title: string;
    date: string;
    body: string;
    image: string;
}

function Feed(){
    const [posts, setPosts] = useState<Post[] | null>(null);
    useEffect(() => {
        const timer = setTimeout(() => {
            return setPosts(newsData);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);
    const {theme} = useTheme();
    return(
        <ul className="feed">
            {posts === null ? (
                <div><img src={gifPath} alt="" className='loadingGif'/></div>
            ) : (
                posts.map((item) => (
                    <>
                    <li key={item.id}>
                        <FeedItem
                            id={item.id}
                            title={item.title}
                            date={item.date}
                            body={item.body}
                            image={item.image}
                        />
                    </li>
                    <div className={`feedItemLine ${theme}`}></div>
                    </>
                ))
            )}
        </ul>
    );
}

export default Feed;
