import logoSite from '../images/logo.svg'
import hamburgerMenu from '../images/icon-hamburger.svg'
import closeMenu from '../images/icon-close.svg'
import { useState } from 'react'


export default function HeaderPage({openMenu, setOpenMenu}) {

    


    return (
        <div className="containerHeader">
            <div className="wrapperHeader">
                <div className="logoSite">
                    <img src={logoSite} />
                </div>
                <div className="optionsMenu">
                    <div id="homeMenu" className='opMenu'>
                        Home
                    </div>
                    <div id="aboutMenu" className='opMenu'>
                        About
                    </div>
                    <div id="contactMenu" className='opMenu'>
                        Contact
                    </div>
                    <div id="blogMenu" className='opMenu'>
                        Blog
                    </div>
                    <div id="careersMenu" className='opMenu'>
                        Careers
                    </div>
                </div>
                <div className={`hamburgerMenu ${openMenu == true ? 'active' : ''}`} onClick={() => setOpenMenu(prevState => !prevState) }>
                    <img src={hamburgerMenu} />
                </div>
                <div className={`closeMenu ${openMenu == true ? 'active' : ''}`} onClick={() => setOpenMenu(prevState => !prevState) } >
                    <img src={closeMenu} />
                </div>
                <div className="requestInvite">
                    <button id='buttonHeader'>Request Invite</button>
                </div>
            </div>
            <div className={`containerOpenMenu ${openMenu == true ? 'active' : ''}`}>
                <div className="wrapperOpenMenu">
                    <div className="containerOptinosMenuM">
                        <div id="homeMenu" className='opMenu'>
                            Home
                        </div>
                        <div id="aboutMenu" className='opMenu'>
                            About
                        </div>
                        <div id="contactMenu" className='opMenu'>
                            Contact
                        </div>
                        <div id="blogMenu" className='opMenu'>
                            Blog
                        </div>
                        <div id="careersMenu" className='opMenu'>
                            Careers
                        </div>
                    </div>

                </div>
                <div className="teste">

                </div>

            </div>
        </div>
    )

}