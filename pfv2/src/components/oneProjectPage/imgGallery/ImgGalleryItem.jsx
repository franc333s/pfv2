import "./ImgGalleryItem.scss"

function ImgGalleryItem({ imgGalleryItemMob, imgGalleryItemDesk, imgGalleryItemAltText, imgGalleryText }) {

    return (
        <>
        
        <div className="img-gallery__item">
            <picture>
                <source media="(min-width: 768px)" srcSet={imgGalleryItemDesk} />
                <img className="img-gallery__item__inner" src={imgGalleryItemMob} alt={imgGalleryItemAltText} />
            </picture>
            <p className="img-gallery__item__text  p--medium">{imgGalleryText}</p>
            
        </div>
        
        </>
    )
}

export default ImgGalleryItem

