import React_img from "../assets/images/react.svg";

const Learn = () => {
  return (
    <>
      <div className="bg-dark p-5 mt-5">
        <div className="container my-5">
          <div className=" row align-items-center justify-content-between gy-md-0 gy-5 ">
            <div className="col-md text-light">
              <h2>Learn React</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                nesciunt suscipit voluptatum os corru!
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                nesciunt suscipit voluptatum perspiciatis nulla sint fugiat
                voluptas ipsum quis eos corrupti. it amet consectetur suscipit
                voluptatum perspiciatis nulla sint fugiat voluptas ipsum quis
                eos corrupti. it amet consectetur suscipit voluptatum
                perspiciatis nulla sint fugiat voluptas ipsum quis eos corrupti.
                it amet consectetur
              </p>

              <a href="" className="btn btn-secondary">
                <i className="bi bi-chevron-right"></i>
                Read More
              </a>
            </div>

            <div className=" col-md">
              <img className="img-fluid" src={React_img} alt="Fundamentals" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Learn;
