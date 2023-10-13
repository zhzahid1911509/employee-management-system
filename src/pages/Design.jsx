
const Design = () => {
  
  return (
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-1/3">
    <img src="https://i.ibb.co/1d4PH4b/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      {/* <a href="#slide2" className="btn btn-circle">❯</a> */}
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-1/3">
    <img src="https://i.ibb.co/VJ60VTF/young-bearded-man-with-striped-shirt.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      {/* <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a> */}
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-1/3">
    <img src="https://i.ibb.co/6HNPLSB/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-we.jpg" className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
      {/* <a href="#slide2" className="btn btn-circle">❮</a>  */}
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
  );
};

export default Design;
