import React from "react";
import galleryImages from "./imageGallery.js";
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const MasonryImageGallery = () => {
    return (
        <ResponsiveMasonry>
            <Masonry gutter="1rem">
                {
                    galleryImages.map((item, index) => (
                        <img src={item} 
                        className="masonry__img"
                        key={index} 
                        alt="" 
                        style={{ width: '100%', display: 'block', borderRadius: '10px'}}/>
                    ))
                }
            </Masonry>
        </ResponsiveMasonry>
    )
}
export default MasonryImageGallery;