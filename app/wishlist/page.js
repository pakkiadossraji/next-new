import WishlistCard from "../components/wishlistCard";

export default function Wishlist(){
    return(
        <section>
            <div>
                <h1 class="checkout-header text-center mb-48 rsp-m16">WISHLIST</h1>
                <div class="wish-border1 mx-auto"></div>
             </div>
            <div>
            <WishlistCard/>
           </div>
        </section>
        
    )
}