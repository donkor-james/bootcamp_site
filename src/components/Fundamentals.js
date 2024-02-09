import Fundamentals_pic from "../assets/images/fundamentals.svg";

const Fundamentals = () => {
  return (
    <>
      <div className="container py-5 mt-5 " id="learn/ ">
        <div className=" row align-items-center justify-content-between gy-md-0 gy-5 ">
          <div className=" col-md">
            <img
              className="img-fluid"
              src={Fundamentals_pic}
              alt="Fundamentals"
            />
          </div>

          <div className="col-md">
            <h2>Learn The Fundamentals</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. nesciunt
              suscipit voluptatum os corru!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. nesciunt
              suscipit voluptatum perspiciatis nulla sint fugiat voluptas ipsum
              quis eos corrupti. it amet consectetur suscipit voluptatum
              perspiciatis nulla sint fugiat voluptas ipsum quis eos corrupti.
              it amet consectetur suscipit voluptatum perspiciatis nulla sint
              fugiat voluptas ipsum quis eos corrupti. it amet consectetur
            </p>

            <a href="" className="btn btn-secondary">
              <i className="bi bi-chevron-right"></i>
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fundamentals;
