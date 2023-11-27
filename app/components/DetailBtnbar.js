import Image from "next/image";
import styles from "../details.module.css";

const DetBtnbar = ()=>{
    return(
        <div className={`${styles.buttonBar} dflex justifycenter gap16`}>
            <div>
                <div className="dflex gap8">
                    <button value="-1" className={styles.counterBtn}>
                        <span className="dflex justifycenter">
                            <Image 
                             src="https://classicivory.zemuria.io/frontend/grand/images/minus.svg"
                             alt="minus image"
                             width={10} 
                             height={2}
                             />
                        </span>
                    </button>
                    <div className={`${styles.counterDisplay} dflex justifycenter fw400 fs16 bgf8 aligncenter clr20`}>1</div>
                    <button value="1"  className={styles.counterBtn}>
                        <span className="dflex justifycenter">
                            <Image 
                             src="https://classicivory.zemuria.io/frontend/grand/images/plus.svg" 
                             alt="plus image"
                             width={10}
                             height={10}
                             />
                        </span>
                    </button>
                </div>
            </div>
                <button className={`${styles.detbtn} btnprimary bg20 clrfff`}>BUY NOW</button>
                <button className= {`${styles.detbtn} btnprimary bgf8 clr40`}>Add to Cart</button>
        </div>
    )
}
 export default DetBtnbar;