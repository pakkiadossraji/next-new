import Image from "next/image"
import Link from "next/link";
import wishstyles from "../wishlist.module.css";


const WishlistCard =()=>{
    return(
        <div>
            <div className={`${wishstyles.wishlistItem} mt16 borderea`}>
                    <div className="dflex">
                    <div>
                        <Link href="">
                            <Image 
                                src= "/WishlistImg.svg"
                                width={149}
                                height={149}
                                priority
                                alt="wishlist image"
                            />
                        </Link>
                    </div> 
                        <div className={`${wishstyles.wishwt} p16`}>
                            <div className={wishstyles.wishgrid}>
                                <div>
                                    <div>
                                        <p className="fw400 fs16 txtellipsis">
                                            <Link href="" className="clr20">Oversized T shirt  hjsdfhj hhjd jhsh jhsgfh gkjhsgf jkgksgdhf 
                                            hjhsgdf jhgsjhgfhjgfhg jghjfghg Oversized T shirtgkjhghfg hgdfhg hgh hgh kg hgkg
                                            hgfhgf  gfh jhgj gf g
                                            </Link>
                                        </p>
                                        <span className="fw600 fs16 clr20 mt4">₹450</span>
                                    </div>

                                </div>
                                <div className="ml64">
                                    <div className={`${wishstyles.wishend} dflex flexcolumn gap40`}>
                                        <button className={`${wishstyles.wishCart} btnprimary bg20 clrfff`}>ADD TO CART</button>
                                        <div>
                                            <button className= {`${wishstyles.removeBtn} fw500 fs14 clr69 uppercase bnone bordernone`}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default WishlistCard;