import Carousel from "react-bootstrap/Carousel";

function TodoCarose() {
  return (
    <div className="row m-0">
      <div className="col-4 g-2">
        <Carousel>
          <Carousel.Item>
            <img
              id="carousal-img"
              className="d-block w-100"
              src="https://www.infographicdesignteam.com/blog/wp-content/uploads/2018/01/why-graphic-designing-is-ideal-for-digital-marketing-today.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              id="carousal-img"
              className="d-block w-100"
              src="https://webleodesign.com/wp-content/uploads/2020/05/Small-Business-Web-Development-1042x665-1-1024x654.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              id="carousal-img"
              className="d-block w-100"
              src="https://image.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="col-md-4 g-2">
        <Carousel>
          <Carousel.Item>
            <img
              id="carousal-img"
              className="d-block w-100"
              src="https://miro.medium.com/max/1400/1*aTYOTFS4Vkr-nwHNML3GvQ.jpeg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              id="carousal-img"
              className="d-block w-100"
              src="https://www.rankbyfocus.com/wp-content/uploads/2021/10/Emerging-web-design-trends-for-2021.jpeg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              id="carousal-img"
              className="d-block w-100"
              src="https://blog.planview.com/wp-content/uploads/2020/02/file-attachments.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="col-md-4 g-2">
        <Carousel>
          <Carousel.Item>
            <img
              id="carousal-img"
              className="d-block w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaWSb8onivsCTv65RGW7tvHtncz43cG-2cvMNjh8d9JdFI9RjpibKMDul6s6davDTOLb4&usqp=CAU"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              id="carousal-img"
              className="d-block w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OepKj_5jHY_o3_H0QzElmFwPXuSc9Dk82A&usqp=CAU"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              id="carousal-img"
              className="d-block w-100"
              src="https://smallbusinessbonfire.com/wp-content/uploads/2020/12/graphic-design-digital-marketing.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default TodoCarose;
