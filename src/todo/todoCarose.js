import Carousel from "react-bootstrap/Carousel";

function TodoCarose() {
  return (
    <div className="row ">
      <div className="col-4 g-2">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.sodapdf.com/blog/wp-content/uploads/2019/08/best-to-do-lists.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
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
              className="d-block w-100"
              src="https://www.sodapdf.com/blog/wp-content/uploads/2019/08/best-to-do-lists.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
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
              className="d-block w-100"
              src="https://www.sodapdf.com/blog/wp-content/uploads/2019/08/best-to-do-lists.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://blog.planview.com/wp-content/uploads/2020/02/file-attachments.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default TodoCarose;
