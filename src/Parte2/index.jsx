import imgOnline from '../images/icon-online.svg'
import imgBud from '../images/icon-budgeting.svg' 
import imgOn from '../images/icon-onboarding.svg'
import imgApi from '../images/icon-api.svg'


export default function Parte2() {
    return (
        <div className="containerParte2">
            <div className="wrapperParte2">
                <div className="titleParte2">
                    Why choose EasyBank?
                </div>
                <div className="textParte2">
                    We leverage Open Banking to turn your bank account into your financial hub. Control 
                    your finances like never before.
                </div>
                <div className="containerVarieties">
                    <div className="varieties1">
                        <div className="imageParte2">
                            <img src={imgOnline} />
                        </div>
                        <div className="titleV">
                            Online Banking
                        </div>
                        <div className="textV">
                            Our modern web and mobile applications allow you to keep track of your finances 
                            wherever you are in the world.
                        </div>
                    </div>
                    <div className="varieties1">
                        <div className="imageParte2">
                            <img src={imgBud} />
                        </div>
                        <div className="titleV">
                            Simple Budgeting
                        </div>
                        <div className="textV">
                            See exactly where your money goes each month. Receive notifications when you’re 
                            close to hitting your limits.
                        </div>
                    </div>
                    <div className="varieties1">
                        <div className="imageParte2">
                            <img src={imgOn} />
                        </div>
                        <div className="titleV">
                            Fast Onboarding
                        </div>
                        <div className="textV">
                            We don’t do branches. Open your account in minutes online and start taking control 
                            of your finances right away.
                        </div>
                    </div>
                    <div className="varieties1">
                        <div className="imageParte2">
                            <img src={imgApi} />
                        </div>
                        <div className="titleV">
                            Open API
                        </div>
                        <div id='lastTextV' className="textV">
                            Manage your savings, investments, pension, and much more from one account. Tracking 
                            your money has never been easier.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}