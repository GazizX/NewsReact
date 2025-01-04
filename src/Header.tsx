import './Header.css';
import imagePath from './assets/news.png'
import imageDarkPath from './assets/newsDark.png'
import { useTheme } from './useTheme';
function Header(){
    const { theme } = useTheme();
    return (
        <header className={theme}>
            <div className="headerInner">
                <div className="headerLogo">
                    <img src={imagePath} width={40} alt="logo" className={`logoImgLight ${theme === 'light' ? '' : 'dark'}`}/>
                    <img src={imageDarkPath} width={40} alt="logo" className={`logoImgDark ${theme === 'dark' ? '' : 'light'}`}/>
                    <h1 className='myName'>Gaziz's Feed</h1>
                </div>
            </div>
            <div className={`headerLine ${theme}`}></div>
        </header>
    );
}


export default Header;