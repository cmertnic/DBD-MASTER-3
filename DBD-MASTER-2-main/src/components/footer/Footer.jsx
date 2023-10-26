import './Footer.scss' 
import { Link } from 'react-router-dom'; 
import vk from './../../image/VK.png'
import yt from './../../image/UT.png'
import mail from './../../image/Pochta.png'
import MyRouter from '../../router/myRouter';

const Footer = () => {
  const {  main } = MyRouter
  return ( 
    <div className="footer">

        <h1 className="main-footer-txt">
        <Link to={main} className="link_decor">
          DBD Master
          </Link>
        </h1>

<div className='footer_imgs'>
    <a href ="https://vk.com/feed" target="_blank"><img className='footer_img_1' src={vk} alt="VK" /></a>
    <a href ="https://www.youtube.com" target="_blank"><img className='footer_img_2' src={yt} alt="Youtube" /></a>
    <a href ="https://account.mail.ru" target="_blank"><img className='footer_img_3' src={mail} alt="Email" /></a>
</div>

    </div>
   );
}
 
export default Footer;