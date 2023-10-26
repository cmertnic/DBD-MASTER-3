import './Main.scss'
import {Link} from 'react-router-dom';
import ROUTER from "./../router/router";
import klogo from './../../image/killer_logo.png'
import slogo from './../../image/survive_logo.png'
import dbd from './../../image/DBD_LOAD.png'
import poster from './../../image/DBD_KILLER_POSTER.png'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const Main = () =>  {
    return(
       
        <div className='main'>
            <div className='main_left'>
                
                <h1 className='main-txt'>
                    DBD Master
                </h1>

                <p className='under-main'>
                    Поиск лучших билдов по DBD
                </p>
                
                <div className='main_btns'>
                    <Link to="/survivor" className="link_decor">
                    <button className='main_button_1'>
                        <img className='main_img_slogo' src={slogo} alt="Survive" />
                        <div>
                            
                            <p className='main_btn-upper-txt' >SURVIVOR</p>
                            <p className='main_btn-bottom-txt'>VIEW BUILDS</p>
                        </div>
                        

                    </button>
                    </Link>

                    <Link to="/killer" className="link_decor">
                    <button className='main_button_2'>

                        <img className='main_img_klogo' src={klogo} alt="Killer" />

                        <div>
                            <p className='main_btn-upper-txt'>KILLER</p>
                            <p className='main_btn-bottom-txt'>VIEW BUILDS</p>
                        </div>
                        

                    </button>
                    </Link>

                </div>
            </div>

            <div className='main_right'>

                <img className='main_dbd_load' src={dbd} alt="" />
                <img className='main_dbd_poster' src={poster} alt="" />
                
            </div>
        </div>
    );
}

export default Main;