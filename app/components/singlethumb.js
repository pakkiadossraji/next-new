import Image from "next/image";

const SingleThumb = () =>{
    return(
        <div className="dflex gap4">
            <Image 
                        src= "/detailsimage.svg"
                        width={107}
                        height={107}
                        priority
                        alt="single thumb image"
                    />
            <Image 
                    src= "/detailsimage.svg"
                    width={107}
                    height={107}
                    priority
                    alt="single thumb image"
                    />
        </div>
    )
}
export default SingleThumb;