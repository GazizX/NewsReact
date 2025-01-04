import './FeedItem.css';
import { useState } from 'react';
import { Link } from 'react-router';
import { useTheme } from './useTheme';
interface FeedItemProps{
    id: number,
    title: string,
    body: string,
    date: string, 
    image: string
}

function FeedItem({ id, title, body, date, image }: FeedItemProps){
    let s = "";
    let count = 0;
    for (let i = 0; i < body.length; i++){
        if (body[i] == ' ')
            count += 1;
        if (count == 5){
            s = body.slice(0, i) + "...";
            break;
        }
    }
    const buttonMoreText = ' show more';
    const buttonLessText = ' hide';
    const [text, setText] = useState(s);
    const [buttonText, setButtonText] = useState(buttonMoreText);
    const [expanded, setExpanded] = useState(false);

    const handleText = () => {
        if (expanded) {
            setText(s);
            setButtonText(buttonMoreText);
        } else {
            setText(body);
            setButtonText(buttonLessText);
        }
        setExpanded(!expanded);
    };
    const { theme } = useTheme();
    return (
        <>
        <div className={`feedItem ${theme}`}>
            <div className="feedItemInner">
                <div className="feedItemHeader">
                    <h2>{title}</h2>
                    <p>{date}</p>
                </div>
                <p className='bodyText'>{text} <button className={`seeMoreBtn ${theme}`} onClick={handleText}>{buttonText}</button></p>
                <div className="imgContainer">
                    <img src={image} alt="Фото" />    
                </div>
                <Link to={`/post/${id - 1}`}><div className='openContainer'><button className='openBtn'>Open</button></div></Link> 
            </div>
        </div>
        </>
    
    );
}

export default FeedItem;