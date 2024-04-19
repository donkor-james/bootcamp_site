const Options = () => {
  return (
    <>
      <div className=" mt-5 py-4">
        <h1 className="text-center">Bootcamp Options</h1>
        <div className="container px-5 py-1">
          <div className="row mt-3 g-4">
            <div className="col-md">
              <div className="card bg-dark">
                <div className="card-body text-center text-light">
                  <div className="h1 mb-3">
                    <i className="bi bi-laptop"></i>
                  </div>

                  <div className="card-title h3">Virtual</div>
                  <div className="my-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    nesciunt suscipit voluptatum perspiciatis nulla sint fugiat
                    voluptas ipsum quis eos corrupti. it amet consectetur
                  </div>
                  <button type="" className="btn btn-primary btn-md">
                    Read More
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md">
              <div className="card">
                <div className="card-body bg-secondary text-center text-light">
                  <div className="h1 mb-3">
                    <i className="bi bi-person-square"></i>
                  </div>
                  <div className="card-title h3">Hybrid</div>

                  <div className="my-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    nesciunt suscipit voluptatum perspiciatis nulla sint fugiat
                    voluptas ipsum quis eos corrupti. it amet consectetur
                  </div>
                  <button type="" className="btn btn-dark btn-md">
                    Read More
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md">
              <div className="card">
                <div className="card-body bg-dark text-center text-light">
                  <div className="h1 mb-3">
                    <i className="bi bi-people"></i>
                  </div>
                  <div className="card-title h3">In Person</div>

                  <div className="my-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    nesciunt suscipit voluptatum perspiciatis nulla sint fugiat
                    voluptas ipsum quis. it amet consectetur
                  </div>
                  <button type="" className="btn btn-primary btn-md">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Options;
