import imageCells from '../images/image-mockups.png'
import bgIntroD from '../images/bg-intro-desktop.svg'

export default function Parte1({openMenu}) {
    return (
        <>
        <div className="containerParte1">
            <div className="containerEsqP1">
                <div className="titleParte1Esq">
                    Next Generation digital banking
                </div>
                <div className="textParte1Esq">
                    Take your financial life online. Your Easybank account will be a one-stop-shop 
                    for spending, saving, budgeting, investing, and much more.
                </div>
                <div className="buttonParte1">
                    <button id='buttonParte1'>Request Invite</button>
                </div>
            </div>
            <div className="containerDirP1">
                <div className="imagesCell">
                    
                </div>
                <div className="backgParte1">
                    
                </div>
            </div>
            <div className="containerP1Mobile">
                <div className="backgMobileH">

                </div>
                <div className="imagesCellMobile">
                    {!openMenu && (<img id='imageCells' src={imageCells} />)}
                    {/* se o lado esq for true ele vai pro direito */}
                </div>
            </div>
        </div>
        </>
    )
}