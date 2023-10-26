import "./Survivor.scss"
import {Link} from 'react-router-dom';
import ROUTER from "./../router/router";
import klogo from './../../image/killer_logo.png'
import slogo from './../../image/survive_logo.png'

const Survivor = () =>  {
    return(
        <div className="main-survivor">
                <div className='btns_survivor'>
                    <Link to="/survivor" className="link_decor">
                    <button className='survivor_button_1'>
                        <img className='survivor_main_img_slogo' src={slogo} alt="Survive" />
                        <div>
                            
                            <p className='survivor_btn-upper-txt' >SURVIVOR</p>
                            <p className='survivor_btn-bottom-txt'>VIEW BUILDS</p>
                        </div>
                        

                    </button>
                    </Link>

                    <Link to="/killer" className="link_decor">
                    <button className='survivor_button_2'>

                        <img className='survivor_main_img_klogo' src={klogo} alt="Killer" />

                        <div className='survivor_bt2_text'>
                            <p className='survivor_btn-upper-txt'>KILLER</p>
                            <p className='survivor_btn-bottom-txt'>VIEW BUILDS</p>
                        </div>
                        

                    </button>
                    </Link>

                </div>   
           
            <div className="survivor_frame">

                <div className="survivor_card">
                    <p className="survivor_frame_txt1">Solo Survivors</p>

                    <div className="flex_card">

                        <div>
                            <img className="survivor_card_logo_img" src="https://mrtipson.github.io/otz-builds/img/OtzZarina.png" alt="" />
                        </div> 

                        <div className="survivor_card_build">

                            <div className="build1">
                                <p className="build_name">Non-gen Start Build</p>

                                <div className="build_imgs">
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/a8/IconPerks_kindred.png" alt="" srcset=""/></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Дежавю" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/89/IconPerks_dejaVu.png" alt="" srcset="" /></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/7b/IconPerks_renewal.png" alt="" srcset="" /></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/8a/IconPerks_wellMakeIt.png" alt="" srcset="" /></a>
                                </div>
                            </div>

                            <div className="build2">
                                <p className="build_name">Beginner Solo Build</p>

                                <div className="build_imgs">
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/a8/IconPerks_kindred.png" alt="" srcset="" /></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/71/IconPerks_alert.png" alt="" srcset="" /></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/cc/IconPerks_lithe.png" alt="" srcset="" /></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/89/IconPerks_dejaVu.png" alt="" srcset="" /></a>
                                </div>
                            </div>
        
                            <div className="build1">
                                <p className="build_name">Chase-Oriented</p>

                                <div className="build_imgs">
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/a0/IconPerks_bond.png" alt="" srcset="" /></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/df/IconPerks_innerHealing.png" alt="" srcset="" /></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/cc/IconPerks_lithe.png" alt="" srcset="" /></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/17/IconPerks_windowsOfOpportunity.png" alt="" srcset="" /></a>
                                </div>
                            </div>

                            <div className="build2">
                                <p className="build_name">Heavy Info Build</p>

                                <div className="build_imgs">
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/5/5d/IconPerks_open-Handed.png" alt="" srcset="" /></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/a8/IconPerks_kindred.png" alt="" srcset="" /></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/89/IconPerks_dejaVu.png" alt="" srcset="" /></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/17/IconPerks_windowsOfOpportunity.png" alt="" srcset="" /></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            
                <div className="survivor_card">
                    <p className="survivor_frame_txt1">All Purpose Build</p>

                    <div className="flex_card">

                        <div>
                            <img className="survivor_card_logo_img" src="https://mrtipson.github.io/otz-builds/img/OtzSWF.png" alt="" />
                        </div> 

                        <div className="survivor_card_build">

                            <div className="build1">
                                <p className="build_name">Simple Support</p>

                                <div className="build_imgs">
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы"  className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/f7/IconPerks_adrenaline.png" alt="" srcset="" /></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/9e/IconPerks_offTheRecord.png" alt="" srcset="" /></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/ee/IconPerks_decisiveStrike.png" alt="" srcset="" /></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/e4/IconPerks_sprintBurst.png" alt="" srcset="" /></a>
                                </div>
                            </div>

                            <div className="build2">
                                <p className="build_name">Bodyguard</p>

                                <div className="build_imgs">
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/10/IconPerks_corruptIntervention.png" alt="" srcset="" /></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/d3/IconPerks_deadlock.png" alt="" srcset="" /></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/6a/IconPerks_saveTheBestForLast.png" alt="" srcset="" /></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/bb/IconPerks_noWayOut.png" alt="" srcset="" /></a>
                                </div>
                            </div>

                            <div className="build1">
                                <p className="build_name">Gen Jockey</p>

                                <div className="build_imgs">
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/7e/IconPerks_deliverance.png" alt="" srcset="" /></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/e4/IconPerks_sprintBurst.png" alt="" srcset="" /></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/41/IconPerks_distortion.png" alt="" srcset="" /></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы"  className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/8a/IconPerks_wellMakeIt.png" alt="" srcset="" /></a>
                                </div>
                            </div>

                            <div className="build2">
                                <p className="build_name">Generic</p>

                                <div className="build_imgs">
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/0f/IconPerks_proveThyself.png" alt="" srcset="" /></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/89/IconPerks_dejaVu.png" alt="" srcset="" /></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/f7/IconPerks_adrenaline.png" alt="" srcset="" /></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/a8/IconPerks_kindred.png" alt="" srcset="" /></a>
                                </div>
                            </div>               
                        </div>
                    </div>
                </div>

                <div className="survivor_card">
                    <p className="survivor_frame_txt1">Advanced Builds</p>

                    <div className="flex_card">

                        <div>
                            <img className="survivor_card_logo_img" src="https://mrtipson.github.io/otz-builds/img/SurvivorBuildsOthers.png" alt="" />
                        </div> 

                        <div className="survivor_card_build">

                            <div className="build1">
                                <p className="build_name">Haste & Endgame</p>

                                <div className="build_imgs">
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/ee/IconPerks_resilience.png" alt="" srcset="" /></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/c0/IconPerks_madeForThis.png" alt="" srcset="" /></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/18/IconPerks_hope.png" alt="" srcset="" /></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/9e/IconPerks_offTheRecord.png" alt="" srcset="" /></a>
                                </div>
                            </div>

                            <div className="build2">
                                <p className="build_name">Heavy Support Build</p>

                                <div className="build_imgs">
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img  title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/7e/IconPerks_deliverance.png" alt="" srcset="" /></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/4a/IconPerks_unbreakable.png" alt="" srcset="" /></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/23/IconPerks_wiretap.png" alt="" srcset="" /></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/41/IconPerks_distortion.png" alt="" srcset="" /></a>
                                </div>
                            </div>

                            <div className="build1">
                                <p className="build_name">Solo Escape Build</p>

                                <div className="build_imgs">
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/91/IconPerks_clairvoyance.png" alt="" srcset="" /></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/df/IconPerks_innerHealing.png" alt="" srcset="" /></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/8e/IconPerks_soleSurvivor.png" alt="" srcset="" /></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/a8/IconPerks_kindred.png" alt="" srcset="" /></a>
                                </div>
                            </div>

                            <div className="build2">
                                <p className="build_name">Anti-tunnel Build</p>

                                <div className="build_imgs">
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/f7/IconPerks_adrenaline.png" alt="" srcset="" /></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/9e/IconPerks_offTheRecord.png" alt="" srcset="" /></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/ee/IconPerks_decisiveStrike.png" alt="" srcset="" /></a>
                                    <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D0%B2%D1%8B%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/75/IconPerks_deadHard.png" alt="" srcset="" /></a>
                                </div>
                            </div>               
                        </div>
                    </div>
                </div>

            </div> 
        </div> 

    )
}

export default Survivor;