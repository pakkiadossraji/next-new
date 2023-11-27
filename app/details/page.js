import ProdDetName from "../components/detProdName";
import DetailImg from "../components/detailsimg";
import styles from "../details.module.css";
import DetBtnbar from "../components/DetailBtnbar";

export default function Details(){
    return(
        <div className={`${styles.pdetFlex} gap48`}>
            <div>
                <DetailImg />
            </div>
                <ProdDetName/>
                <DetBtnbar/>
        </div>
        
    )
}

