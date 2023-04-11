import imgCurrency from '../images/image-currency.jpg'
import imgRestaurant from '../images/image-restaurant.jpg'
import imgPlane from '../images/image-plane.jpg'
import imgConfetti from '../images/image-confetti.jpg'


export default function Parte3() {
    return (
        <div className="containerParte3">
            <div className="wrapperParte3">
                <div className="titleParte3">
                    Latest Articles
                </div>
                <div className="containerArticles">
                    <div className="article1">
                        <div className="imageArticle">
                            <img id='imgCurr' src={imgCurrency} />
                        </div>
                        <div className="byAuthor">
                            By Claire Robinson
                        </div>
                        <div className="titleA">
                            Receive money in any currency with no fees
                        </div>
                        <div className="textA">
                            The world is getting smaller and we’re becoming more mobile. So why should you be
                            forced to only receive money in a single …
                        </div>
                    </div>
                    <div className="article1">
                        <div className="imageArticle">
                            <img id='imgRest' src={imgRestaurant} />
                        </div>
                        <div className="byAuthor">
                            By Wilson Hutton
                        </div>
                        <div className="titleA">
                            Treat yourself without worrying about money
                        </div>
                        <div className="textA">
                            Our simple budgeting feature allows you to separate out your spending and set
                            realistic limits each month. That means you …
                        </div>
                    </div>
                    <div className="article1">
                        <div className="imageArticle">
                            <img id='imgPlane' src={imgPlane} />
                        </div>
                        <div className="byAuthor">
                            By Wilson Hutton
                        </div>
                        <div className="titleA">
                            Take your Easybank card wherever you go
                        </div>
                        <div className="textA">
                            We want you to enjoy your travels. This is why we don’t charge any fees on purchases
                            while you’re abroad. We’ll even show you …
                        </div>
                    </div>
                    <div className="article1">
                        <div className="imageArticle">
                            <img id='imgConf' src={imgConfetti} />
                        </div>
                        <div className="byAuthor">
                            By Claire Robinson
                        </div>
                        <div className="titleA">
                            Our invite-only Beta accounts are now live!
                        </div>
                        <div className="textA">
                            After a lot of hard work by the whole team, we’re excited to launch our closed beta.
                            It’s easy to request an invite through the site ...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}