"use client";

import { useEffect,useState } from "react";
import Image from "next/image";
import styles from "../details.module.css";
import SingleThumb from "./singlethumb";
import OverlaySpan from "./OverlaySpan";

// export default function DetailImg() {
  const DetailImg = ({ product }) => {
    const [zoomImage ,setZoomImage] = useState(false);
    
    useEffect(() => {
        if (!zoomImage) {
          document.querySelector("body").classList.remove(styles.noscroll);
        } else {
          document.querySelector("body").classList.add(styles.noscroll);
        //   document.querySelector("body").classList.remove(styles.noscroll);
        }
      }, [zoomImage]);
    const updateIsClosed = (value) => {
        console.log(value)
        setZoomImage(value);
    };
    
    return(
        <>
        <div>
        <div className={`${styles.detImgCont}`}>
      {/* <p style={{ display: display ? "block" : "none" }}>something here</p> */}
            <div onClick={()=>setZoomImage(!zoomImage)} 
             className = {zoomImage ? `${styles.zoom} ${styles.detimgflex}` : `${styles.detimgflex}`} >
                <Image className={`${styles.detailsImage}`}
                    src= "/detailsimage.svg"
                    width={521}
                    height={521}
                    priority
                    alt="product details image"
                    style={{ width: '100%'}}
                    // className={styles.detailsImage}
                />
            </div>
            <div>
                {/* <SingleThumb /> */}
            </div>
        </div>
        <OverlaySpan props={zoomImage} updateIsClosed={updateIsClosed}/>
        </div>
        </>
        
    )
}
export default DetailImg;