import imgLogoFooter from '../images/logoFooter.svg'
import facebookImg from '../images/icon-facebook.svg'
import youtubeImg from '../images/icon-youtube.svg'
import twitterImg from '../images/icon-twitter.svg'
import pinterestImg from '../images/icon-pinterest.svg'
import instagramImg from '../images/icon-instagram.svg'

export default function FooterPage() {
    return (
        <div className="containerFooter">
            <div className="wrapperFooter">
                <div className="parteEsqFooter">
                    <div className="logoFooter">
                        <img src={imgLogoFooter} />
                    </div>
                    <div className="socialMedias">
                        <img className='socialM' src={facebookImg} />
                        <img className='socialM' src={youtubeImg} />
                        <img className='socialM' src={twitterImg} />
                        <img className='socialM' src={pinterestImg} />
                        <img className='socialM' src={instagramImg} />
                    </div>
                </div>
                <div className="parteMeioFooter">
                    <div className="meioFooter1">
                        <div className="optionsF1">
                            About us
                        </div>
                        <div className="optionsF1">
                            Contact
                        </div>
                        <div className="optionsF1">
                            Blog
                        </div>
                    </div>
                    <div className="meioFooter2">
                        <div className="optionsF1">
                            Careers
                        </div>
                        <div className="optionsF1">
                            Support
                        </div>
                        <div className="optionsF1">
                            Privacy Policy
                        </div>
                    </div>
                </div>
                <div className="parteDirFooter">
                    <div className="buttonFooter">
                        <button id='buttonFooter'>Request Invite</button>
                    </div>
                    <div className="rightsFooter">
                        © Easybank. All Rights Reserved
                    </div>
                </div>
            </div>
            <div className="wrapperFooterMobile">
                <div className="logoFooterM">
                    <img src={imgLogoFooter} />
                </div>
                <div className="socialMediasM">
                    <img className='socialM' src={facebookImg} />
                    <img className='socialM' src={youtubeImg} />
                    <img className='socialM' src={twitterImg} />
                    <img className='socialM' src={pinterestImg} />
                    <img className='socialM' src={instagramImg} />
                </div>
                <div className="optionsF1">
                    About us
                </div>
                <div className="optionsF1">
                    Contact
                </div>
                <div className="optionsF1">
                    Blog
                </div>
                <div className="optionsF1">
                    Careers
                </div>
                <div className="optionsF1">
                    Support
                </div>
                <div id='lastOp' className="optionsF1">
                    Privacy Policy
                </div>
                <div className="buttonFooterM">
                    <button id='buttonFooter'>Request Invite</button>
                </div>
                <div className="rightsFooterM">
                    © Easybank. All Rights Reserved
                </div>
            </div>
        </div>

    )
}