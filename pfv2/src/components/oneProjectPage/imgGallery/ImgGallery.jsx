import ImgGalleryItem from "./ImgGalleryItem";
import "./ImgGallery";

function ImgGallery({ project }) {

    return (
        <>
        <div>
            {project && project.imgGallery && project.imgGallery.map((item) =>
                <ImgGalleryItem
                    key={item.id}
                    imgGalleryItemMob={item.imgGalleryItemMob}
                    imgGalleryItemDesk={item.imgGalleryItemDesk}
                    imgGalleryItemAltText={item.imgGalleryItemAltText}
                />
            )}
        </div>
        </>
    )
}

export default ImgGallery
