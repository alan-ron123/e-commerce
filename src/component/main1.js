import React from "react";
import "../index.css";

function main() {
  return (
    <div>
      <h1>The Team</h1>
      <p>
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit..." "There is no one who loves pain itself,
        <br />
        who seeks after it and wants to hav it is pain..."
      </p>
      <div className="mainflex">
        <div>
          <img
            className="image"
            src="https://image.shutterstock.com/image-photo/portrait-handsome-ceo-smiling-260nw-251320138.jpg"
          />
          <h2>Robert</h2>

          <p>Engineer</p>
        </div>

        <div>
          <img
            className="image"
            src="https://imageio.forbes.com/specials-images/imageserve/653651737/960x0.jpg?format=jpg&width=960"
          />

          <h2 id="sara">sarah smith</h2>
          <p>Doctor</p>
        </div>
        <div>
          <img
            className="image"
            src="https://cdn.ceoworld.biz/wp-content/uploads/2021/11/Tim-Cook-2.jpg"
          />
          <h2>Daniel</h2>
          <p>builder</p>
        </div>
        <div>
          <img
            className="image"
            src="https://images.livemint.com/img/2022/03/29/1600x900/Raj_Subramaniam_Prosperity_fedEx_1648511884794_1648529320245.jpg"
          />
          <h2>mike</h2>
          <p>junior builder</p>
        </div>
      </div>
    </div>
  );
}

export default main;
