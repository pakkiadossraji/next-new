'use client';
import { useEffect, useState } from "react";
import styles from "../details.module.css";
import ShareIcon from "./shareIcon";
import Link from "next/link";


const ProdDetName = () =>{
// const [prodPage ,setProdPage] = useState({});

// useEffect(()=>{
//     getData();
// },[])

// async function getData() {
//     const res = await fetch('https://classicivory.zemuria.io/get_shop_products?order=DESC&term=&limit=9')
//     const data = await res.json();
//    setProdPage(data.data)
//    console.log((data.data))

//     if (!res.ok) {
//       throw new Error('Failed to fetch data')
//     }
   
//     return res.json()
//   }
   
   
    return(
        <div className="dflex flexcolumn gap16">
            <div className="dflex justify justifyspacebetween">
                <h1 className={`${styles.pddetH1} fw600 fs24`}>T Shirt</h1>
                <ShareIcon/>
            </div>
                    <div className="dflex flexcolumn gap16">
                        <p className={`${styles.prodDesc} clr69 fw400 fs16`}>
                            Product Description:Lorem ipsum dolor sit amet. Et provident 
                            ratione ea voluptas eligendi sed corporis accusantium et eius
                            deleniti id excepturi ratione. 
                        </p>
                        <div className={`${styles.starBorder} mt16 borderea`}>
                            <div className="dflex">
                                <div className="ml8">
                                    <span className="clr000 fs24">★</span>
                                    <span className="clr000 fs24">★</span>
                                    <span className="clr000 fs24">★</span>
                                    <span className="clr000 fs24">★</span>
                                    <span className="clr000 fs24">★</span>

                                </div>
                                <div className={styles.starno}>
                                    <span className={`${styles.starRateCount} clr000 fs16`}>3.0</span>
                                </div>
                            </div>
                        </div>
                        <h3>
                            <del>₹500.00</del>
                            
                            {/* <div > { Object.values(prodPage).map((prod)=>
                                    <h1 key={prod.id}>{prod.title}</h1>)
                               }
                            </div> */}
                        </h3>
                        <span className={`${styles.detQty} mt16 mb8`}>
                                <div>Available Quantity
                                </div>
                        </span>
                        <div className="dflex flexcolumn gap8 mb48">
                            <span>Color :</span>
                                <div className="dflex gap8">
                                    <label className={`${styles.varientBtn} clr20 bgf8`}>black</label>
                                    <label className={`${styles.varientBtn} clr20 bgf8`}>White</label>
                                </div>
                         </div>
                         <div className="dflex flexcolumn gap8 mb48">
                            <span>Size :</span>
                                <div className="dflex gap8">
                                    <label className={`${styles.varientBtn} clr20 bgf8`}>Small</label>
                                    <label className={`${styles.varientBtn} clr20 bgf8`}>Medium</label>
                                </div>
                         </div>
                         <div className=" dflex flexcolumn mt8">    
                             <span className="mb8">CUSTOMIZATION DETAILS</span>
                             <label className="mt8">notes </label>
                             <input type="text"  className={`${styles.customInput} borderea fw400 fs16`} name="customization_value[]" placeholder="Enter Text"/>                                                           
                        </div>
                        <div>
                            <span className="mt16 fw500 fs14">SHIPPING AVAILABILITY</span>
                            <div className="dflex flexcolumn">
                                <p className="fw400 fs16 clr69">Enter your pincode and check whether this product can be delivered to your location</p>
                                <div className="dflex gap8 mt16 ">
                                    <input type="number" name="" placeholder="Enter Pincode" className={`${styles.checkAvilBtn} borderea fw400 fs16`}/>
                                    <button className={`${styles.verifyBtn} btnprimary bg20 clrfff`}>VERIFY</button>
                                </div>
                                <span className="" id="shipping_state_err"></span>
                            </div>
                        </div>
                        <div className="mt56">
                            <div className="pb24">
                                <button className={`${styles.accordionOpen} dflex justifyspacebetween aligncenter fw500 fs14 bordernone`}>
                                    <h1 className={`${styles.accheaderBtn} fw500 fs14`}>PRODUCT INFORMATION</h1><span className={styles.detArrow}></span>
                                </button>
                                <div className="dflex flexcolumn">
                                    <div>
                                        <div>
                                            <p><span >Product details</span></p>
                                            <p>Material Composition: 100% Cotton</p>
                                            <p>Pattern: Solid</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                     <div>
                        <div className="pb-24">
                            <button className={`${styles.accordionOpen} dflex justifyspacebetween aligncenter fw500 fs14 bordernone`}>
                                <h2 className={`${styles.accheaderBtn} fw500 fs14`}>REVIEWS</h2>
                                <span></span>
                            </button>
                                <div>
                                    <form>
                                        <input type="hidden" name="_token" value="iZGOC6A8rARmpufr3SeGj32XYyie38YPlfPvYOOV"/>                      
                                        <p className="fs16 fw400 clr69">Star Rate This Product</p>
                                            <div>
                                                <div>
                                                <input type="radio" name="rating" required="" value="1" id="st1" className={styles.starRadio} />
                                                    <span className={styles.reviewStar}>★</span>
                                                <input type="radio" name="rating"  id="st2" className={styles.starRadio}/>
                                                    <span  className={styles.reviewStar}>★</span>
                                                <input type="radio" name="rating"  id="st3" className={styles.starRadio}/>
                                                    <span  className={styles.reviewStar} >★</span>
                                                <input type="radio" name="rating"  id="st4"className={styles.starRadio}/>
                                                    <span  className={styles.reviewStar}>★</span>
                                                <input type="radio" name="rating"  id="st5" className={styles.starRadio}/>
                                                    <span  className={styles.reviewStar}>★</span>
                                                </div>
                                            </div>
                                            <div className={`${styles.dettextReview} dflex gap16 aligncenter justifycenter mb32 mt32`}>
                                                <input type="text"  name="name" placeholder="Your name"/>

                                                <input type="email" name="email" placeholder="Your email" />
                                            </div>
                                            <p className="fw400 fs16 clr40">Write your review</p>

                                            <textarea className={`${styles.textarea} fw400 fs16 clr40`} name="comment" required=""   cols="30" rows="5" placeholder="Write your review"></textarea>

                                                <div className="mt32">
                                                        <Link href="">
                                                            Please Login
                                                        </Link>
                                                </div>
                                    </form>
                            
                                </div>
                        
                        </div>
                            <div></div>
                   </div>
                        
                </div>
        </div>
    )
}
 export default ProdDetName;