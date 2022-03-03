import image from "../assets/img/gallery_1.png";

export const Gallery = (props) => {
  return (
    <div id='portfolio'>
      <div className='service_img'>
        <img src={image} alt="" onLoad={props.onLoad}></img>
      </div>
    </div>
  )
}
