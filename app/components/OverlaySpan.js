"use client";
import { useEffect, useState } from "react";
import styles from "../details.module.css";
const OverlaySpan = ({props,updateIsClosed})=>{
    console.log(updateIsClosed)
    const [isClosed ,setIsClosed] = useState(false)
    useEffect(() => {
        if (!isClosed) {
        //   document.querySelector("body").classList.remove(styles.noscroll);
          document.querySelector("body").classList.add(styles.noscroll);
        } else {
        //   document.querySelector("body").classList.add(styles.noscroll);
          document.querySelector("body").classList.remove(styles.noscroll);
        }
      }, [isClosed]);
        
      const handleOverlay = () =>{
            updateIsClosed(false);
            setIsClosed(isClosed)
        }
    return(
        <div
        style={{ visibility: props ? "visible" : "hidden" }}
        className={styles.overlayClose}
        onClick={handleOverlay}
        >
        </div>
    )
}
export default OverlaySpan;

