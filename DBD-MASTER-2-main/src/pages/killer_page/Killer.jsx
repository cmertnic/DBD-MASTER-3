import "./Killer.scss"
import {Link} from 'react-router-dom';
import ROUTER from "./../router/router";
import klogo from './../../image/killer_logo.png'
import slogo from './../../image/survive_logo.png'

const Killer = () =>  {
    return(
        <div className="main-killer">
                <div className='btns_killer'>
                    <Link to="/survivor" className="link_decor">
                    <button className='killer_button_1'>
                        <img className='killer_main_img_slogo' src={slogo} alt="Survive" />
                        <div>
                            
                            <p className='killer_btn-upper-txt' >SURVIVOR</p>
                            <p className='killer_btn-bottom-txt'>VIEW BUILDS</p>
                        </div>
                        

                    </button>
                    </Link>

                    <Link to="/killer" className="link_decor">
                    <button className='killer_button_2'>

                        <img className='killer_main_img_klogo' src={klogo} alt="Killer" />

                        <div className='killer_bt2_text'>
                            <p className='killer_btn-upper-txt'>KILLER</p>
                            <p className='killer_btn-bottom-txt'>VIEW BUILDS</p>
                        </div>
                        

                    </button>
                    </Link>

                </div>
                <div className="killer_frame">

<div className="killer_card">
    <p className="killer_frame_txt1">The Trapper</p>

    <div className="flex_card">

        <div>
            <img className="killer_card_logo_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/9f/K01_charSelect_portrait.png" alt="" />
        </div> 

        <div className="killer_card_build">

            <div className="build1">
                <p className="build_name">Generic Build</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/a8/IconPerks_kindred.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/89/IconPerks_dejaVu.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/7b/IconPerks_renewal.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/8a/IconPerks_wellMakeIt.png" alt="" srcset="" /></a>
                </div>
            </div>

            <div className="build2">
                <p className="build_name">Aggressive Build</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/a8/IconPerks_kindred.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/71/IconPerks_alert.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/cc/IconPerks_lithe.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/89/IconPerks_dejaVu.png" alt="" srcset="" /></a>
                </div>
            </div>

            <div className="build1">
                <p className="build_name">Stalling Hex Build</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/a0/IconPerks_bond.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/df/IconPerks_innerHealing.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/cc/IconPerks_lithe.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/17/IconPerks_windowsOfOpportunity.png" alt="" srcset="" /></a>
                </div>
            </div>

            <div className="build2">
                <p className="build_name">Build with Basic Perks</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/5/5d/IconPerks_open-Handed.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/a8/IconPerks_kindred.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/89/IconPerks_dejaVu.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/17/IconPerks_windowsOfOpportunity.png" alt="" srcset="" /></a>
                </div>
            </div>

        </div>
    </div>
</div>

<div className="killer_card">
    <p className="killer_frame_txt1">The Wraith</p>

    <div className="flex_card">

        <div>
            <img className="killer_card_logo_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/0d/K02_charSelect_portrait.png" alt="" />
        </div> 

        <div className="killer_card_build">

            <div className="build1">
                <p className="build_name">Generic Build</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/f7/IconPerks_adrenaline.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/9e/IconPerks_offTheRecord.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/ee/IconPerks_decisiveStrike.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/e4/IconPerks_sprintBurst.png" alt="" srcset="" /></a>
                </div>
            </div>

            <div className="build2">
                <p className="build_name">Chase-Oriented Build</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/10/IconPerks_corruptIntervention.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/d3/IconPerks_deadlock.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/6a/IconPerks_saveTheBestForLast.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/bb/IconPerks_noWayOut.png" alt="" srcset="" /></a>
                </div>
            </div>

            <div className="build1">
                <p className="build_name">Gen-Kicking Build</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/7e/IconPerks_deliverance.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/e4/IconPerks_sprintBurst.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/41/IconPerks_distortion.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/8a/IconPerks_wellMakeIt.png" alt="" srcset="" /></a>
                </div>
            </div>

            <div className="build2">
                <p className="build_name">Build with Basic Perks</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/0f/IconPerks_proveThyself.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/89/IconPerks_dejaVu.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/f7/IconPerks_adrenaline.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/a8/IconPerks_kindred.png" alt="" srcset="" /></a>
                </div>
            </div>               
        </div>
    </div>
</div>

<div className="killer_card">
    <p className="killer_frame_txt1">The Hillbilly</p>

    <div className="flex_card">

        <div>
            <img className="killer_card_logo_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/a3/K03_charSelect_portrait.png" alt="" />
        </div> 

        <div className="killer_card_build">

            <div className="build1">
                <p className="build_name">Generic Build</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/ee/IconPerks_resilience.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/c0/IconPerks_madeForThis.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/18/IconPerks_hope.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/9e/IconPerks_offTheRecord.png" alt="" srcset="" /></a>
                </div>
            </div>

            <div className="build2">
                <p className="build_name"> Early Game Build</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/7e/IconPerks_deliverance.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/4a/IconPerks_unbreakable.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/23/IconPerks_wiretap.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/41/IconPerks_distortion.png" alt="" srcset="" /></a>
                </div>
            </div>

            <div className="build1">
                <p className="build_name">Aggressive Build</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/91/IconPerks_clairvoyance.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/df/IconPerks_innerHealing.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/8e/IconPerks_soleSurvivor.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/a8/IconPerks_kindred.png" alt="" srcset="" /></a>
                </div>
            </div>

            <div className="build2">
                <p className="build_name">Build with Basic Perks</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/f7/IconPerks_adrenaline.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"> <img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/9e/IconPerks_offTheRecord.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/ee/IconPerks_decisiveStrike.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/75/IconPerks_deadHard.png" alt="" srcset="" /></a>
                </div>
            </div>               
        </div>
    </div>
</div>

<div className="killer_card">
    <p className="killer_frame_txt1">The Nurse</p>

    <div className="flex_card">

        <div>
            <img className="killer_card_logo_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/31/K04_charSelect_portrait.png" alt="" />
        </div> 

        <div className="killer_card_build">

            <div className="build1">
                <p className="build_name">Generic Build</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/ee/IconPerks_resilience.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/c0/IconPerks_madeForThis.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/18/IconPerks_hope.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/9e/IconPerks_offTheRecord.png" alt="" srcset="" /></a>
                </div>
            </div>

            <div className="build2">
                <p className="build_name">Gen-Kicking Build</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/7e/IconPerks_deliverance.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/4a/IconPerks_unbreakable.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/23/IconPerks_wiretap.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/41/IconPerks_distortion.png" alt="" srcset="" /></a>
                </div>
            </div>

            <div className="build1">
                <p className="build_name">Strong Regression</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/91/IconPerks_clairvoyance.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/df/IconPerks_innerHealing.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/8e/IconPerks_soleSurvivor.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/a8/IconPerks_kindred.png" alt="" srcset="" /></a>
                </div>
            </div>

            <div className="build2">
                <p className="build_name">Build with Basic Perks</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/f7/IconPerks_adrenaline.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/9e/IconPerks_offTheRecord.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/ee/IconPerks_decisiveStrike.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/75/IconPerks_deadHard.png" alt="" srcset="" /></a>
                </div>
            </div>               
        </div>
    </div>
</div>

<div className="killer_card">
    <p className="killer_frame_txt1">The Huntress</p>

    <div className="flex_card">

        <div>
            <img className="killer_card_logo_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/1a/K08_charSelect_portrait.png" alt="" />
        </div> 

        <div className="killer_card_build">

            <div className="build1">
                <p className="build_name">Generic Build</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/a8/IconPerks_kindred.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/89/IconPerks_dejaVu.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/7b/IconPerks_renewal.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/8a/IconPerks_wellMakeIt.png" alt="" srcset="" /></a>
                </div>
            </div>

            <div className="build2">
                <p className="build_name">Aggressive Hex Build</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/a8/IconPerks_kindred.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/71/IconPerks_alert.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/cc/IconPerks_lithe.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/89/IconPerks_dejaVu.png" alt="" srcset="" /></a>
                </div>
            </div>

            <div className="build1">
                <p className="build_name">Passive Slowdown</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/a0/IconPerks_bond.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/df/IconPerks_innerHealing.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/cc/IconPerks_lithe.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/17/IconPerks_windowsOfOpportunity.png" alt="" srcset="" /></a>
                </div>
            </div>

            <div className="build2">
                <p className="build_name">Build with Basic Perks</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/5/5d/IconPerks_open-Handed.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/a8/IconPerks_kindred.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/89/IconPerks_dejaVu.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/17/IconPerks_windowsOfOpportunity.png" alt="" srcset="" /></a>
                </div>
            </div>

        </div>
    </div>
</div>

<div className="killer_card">
    <p className="killer_frame_txt1">The Shape</p>

    <div className="flex_card">

        <div>
            <img className="killer_card_logo_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/04/K05_charSelect_portrait.png" alt="" />
        </div> 

        <div className="killer_card_build">

            <div className="build1">
                <p className="build_name">Generic Build</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/f7/IconPerks_adrenaline.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/9e/IconPerks_offTheRecord.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/ee/IconPerks_decisiveStrike.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"> <img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/e4/IconPerks_sprintBurst.png" alt="" srcset="" /></a>
                </div>
            </div>

            <div className="build2">
                <p className="build_name">Aggressive Jolt Build</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/10/IconPerks_corruptIntervention.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/d3/IconPerks_deadlock.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/6a/IconPerks_saveTheBestForLast.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/bb/IconPerks_noWayOut.png" alt="" srcset="" /></a>
                </div>
            </div>

            <div className="build1">
                <p className="build_name">Aggressive Chas Build</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/7e/IconPerks_deliverance.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/e4/IconPerks_sprintBurst.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/41/IconPerks_distortion.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/8a/IconPerks_wellMakeIt.png" alt="" srcset="" /></a>
                </div>
            </div>

            <div className="build2">
                <p className="build_name">Build with Basic Perks</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/0f/IconPerks_proveThyself.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/89/IconPerks_dejaVu.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/f7/IconPerks_adrenaline.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/a8/IconPerks_kindred.png" alt="" srcset="" /></a>
                </div>
            </div>               
        </div>
    </div>
</div>

<div className="killer_card">
    <p className="killer_frame_txt1">The Hag</p>

    <div className="flex_card">

        <div>
            <img className="killer_card_logo_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/b4/K06_charSelect_portrait.png" alt="" />
        </div> 

        <div className="killer_card_build">

            <div className="build1">
                <p className="build_name">Generic Build</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/ee/IconPerks_resilience.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/c0/IconPerks_madeForThis.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/18/IconPerks_hope.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/9e/IconPerks_offTheRecord.png" alt="" srcset="" /></a>
                </div>
            </div>

            <div className="build2">
                <p className="build_name">Stealth & Strike Build</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/7e/IconPerks_deliverance.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/4a/IconPerks_unbreakable.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/23/IconPerks_wiretap.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/41/IconPerks_distortion.png" alt="" srcset="" /></a>
                </div>
            </div>

            <div className="build1">
                <p className="build_name">Aggressive Build</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/91/IconPerks_clairvoyance.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/df/IconPerks_innerHealing.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/8e/IconPerks_soleSurvivor.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/a8/IconPerks_kindred.png" alt="" srcset="" /></a>
                </div>
            </div>

            <div className="build2">
                <p className="build_name">Build with Basic Perks</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/f7/IconPerks_adrenaline.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/9e/IconPerks_offTheRecord.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/ee/IconPerks_decisiveStrike.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/75/IconPerks_deadHard.png" alt="" srcset="" /></a>
                </div>
            </div>               
        </div>
    </div>
</div>

<div className="killer_card">
    <p className="killer_frame_txt1">The Doctor</p>

    <div className="flex_card">

        <div>
            <img className="killer_card_logo_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/ad/K07_charSelect_portrait.png" alt="" />
        </div> 

        <div className="killer_card_build">

            <div className="build1">
                <p className="build_name">Generic Build</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/ee/IconPerks_resilience.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/c0/IconPerks_madeForThis.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/18/IconPerks_hope.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/9e/IconPerks_offTheRecord.png" alt="" srcset="" /></a>
                </div>
            </div>

            <div className="build2">
                <p className="build_name">Scourge Build</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/7e/IconPerks_deliverance.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/4a/IconPerks_unbreakable.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/23/IconPerks_wiretap.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/41/IconPerks_distortion.png" alt="" srcset="" /></a>
                </div>
            </div>

            <div className="build1">
                <p className="build_name">Gen-Kick & Stall Build</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/91/IconPerks_clairvoyance.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/df/IconPerks_innerHealing.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/8e/IconPerks_soleSurvivor.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/a8/IconPerks_kindred.png" alt="" srcset="" /></a>
                </div>
            </div>

            <div className="build2">
                <p className="build_name">Build with Basic Perks</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/f7/IconPerks_adrenaline.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/9e/IconPerks_offTheRecord.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/ee/IconPerks_decisiveStrike.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/75/IconPerks_deadHard.png" alt="" srcset="" /></a>
                </div>
            </div>               
        </div>
    </div>
</div>

<div className="killer_card">
    <p className="killer_frame_txt1">The Cannibal</p>

    <div className="flex_card">

        <div>
            <img className="killer_card_logo_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/c6/K09_charSelect_portrait.png" alt="" />
        </div> 

        <div className="killer_card_build">

            <div className="build1">
                <p className="build_name">Generic Build</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/ee/IconPerks_resilience.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/c0/IconPerks_madeForThis.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/18/IconPerks_hope.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/9e/IconPerks_offTheRecord.png" alt="" srcset="" /></a>
                </div>
            </div>

            <div className="build2">
                <p className="build_name">Aggressive Build</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/7e/IconPerks_deliverance.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/4a/IconPerks_unbreakable.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/23/IconPerks_wiretap.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/41/IconPerks_distortion.png" alt="" srcset="" /></a>
                </div>
            </div>

            <div className="build1">
                <p className="build_name">Hex Heavy Build</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/91/IconPerks_clairvoyance.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/df/IconPerks_innerHealing.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/8e/IconPerks_soleSurvivor.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/a8/IconPerks_kindred.png" alt="" srcset="" /></a>
                </div>
            </div>

            <div className="build2">
                <p className="build_name">Build with Basic Perks</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/f7/IconPerks_adrenaline.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/9e/IconPerks_offTheRecord.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/ee/IconPerks_decisiveStrike.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/75/IconPerks_deadHard.png" alt="" srcset="" /></a>
                </div>
            </div>               
        </div>
    </div>
</div>

<div className="killer_card">
    <p className="killer_frame_txt1">The Nightmare</p>

    <div className="flex_card">

        <div>
            <img className="killer_card_logo_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/f7/K10_charSelect_portrait.png" alt="" />
        </div> 

        <div className="killer_card_build">

            <div className="build1">
                <p className="build_name">Generic Build</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"> <img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/ee/IconPerks_resilience.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/c0/IconPerks_madeForThis.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/18/IconPerks_hope.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/9e/IconPerks_offTheRecord.png" alt="" srcset="" /></a>
                </div>
            </div>

            <div className="build2">
                <p className="build_name">Skill-check Build</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"> <img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/7e/IconPerks_deliverance.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"> <img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/4a/IconPerks_unbreakable.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/23/IconPerks_wiretap.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/41/IconPerks_distortion.png" alt="" srcset="" /></a>
                </div>
            </div>

            <div className="build1">
                <p className="build_name">Simple Chase Build</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/91/IconPerks_clairvoyance.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/df/IconPerks_innerHealing.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/8e/IconPerks_soleSurvivor.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/a8/IconPerks_kindred.png" alt="" srcset="" /></a>
                </div>
            </div>

            <div className="build2">
                <p className="build_name">Build with Basic Perks</p>

                <div className="build_imgs">
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/f7/IconPerks_adrenaline.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/9e/IconPerks_offTheRecord.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/ee/IconPerks_decisiveStrike.png" alt="" srcset="" /></a>
                <a href="https://dead-by-daylight.fandom.com/ru/wiki/%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8_%D1%83%D0%B1%D0%B8%D0%B9%D1%86" target="_blank" rel="noopener noreferrer"><img title="Кровные узы" className="build_img" src="https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/75/IconPerks_deadHard.png" alt="" srcset="" /></a>
                </div>
            </div>               
        </div>
    </div>
</div>
</div> 
        </div>
    )
}
export default Killer;