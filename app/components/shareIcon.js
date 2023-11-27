import Image from "next/image";
import styles from "../details.module.css";

const ShareIcon = ()=>{
    return(
        <div>
            <div>
                <Image src="/shareIcon.svg" 
                width={20}
                height={30}
                alt="shareIcon"/>
            </div>
            <section className={styles.toggleModel}>
                <div>
                    <div className={styles.closeToggle}>✕</div>
                        <div className="textcenter">
                            <p className="fw500 fs16 clr000">Share Product </p>
                            <span className="fw400 fs14 clr69">Share this product to your friends/Families</span>

                            <div className={`${styles.socialFlex} dflex justifycenter gap8 pt32`}>
                                <div >
                                <a target="_blank" href=""><Image 
                                    src="https://classicivory.zemuria.io/frontend/grand/images/fb_bg.svg"
                                    width={70} 
                                    height={70}
                                    alt="facebook logo"/>
                                 </a>
                                </div>
                                <div>
                                    <a target="_blank" href="">
                                        <Image src="https://classicivory.zemuria.io/frontend/grand/images/twitter_bg.svg"
                                         width={70}
                                         height={70}
                                         alt="twitter logo"/>

                                    </a>
                                </div>
                                <div>
                                    <a target="_blank" href="">
                                        <Image src="https://classicivory.zemuria.io/frontend/grand/images/linkedin_bg.svg"
                                         width={70}
                                          height={70}
                                          alt="linkedin logo"/>
                                    </a>
                                </div>
                                <div>
                                    <a target="_blank" href="">
                                        <Image src="https://classicivory.zemuria.io/frontend/grand/images/whtsp_bg.svg"
                                         width={70}
                                          height={70}
                                          alt="whatsapp logo"/>
                                    </a>
                                </div>
                                <div>
                                    <a target="_blank" href="">
                                        <Image src="https://classicivory.zemuria.io/frontend/grand/images/pint_bg.svg"
                                         width={70}
                                          height={70}
                                          alt="pinterest logo"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                </div>
        </section>
        </div>
    )
}
 export default ShareIcon;