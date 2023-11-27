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
                            <div>
                                <div>
                                    <div>
                                        <p>
                                            <Link href="">Oversized T shirt 
                                            </Link>
                                        </p>
                                        <span>₹450</span>
                                    </div>

                                </div>
                                <div>
                                    <div>
                                        <div>
                                            <button>Remove</button>
                                        </div>
                                        <button>ADD TO CART</button>
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