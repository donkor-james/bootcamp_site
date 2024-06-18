import Showcase from "../assets/images/showcase.svg";
const Hero = () => {
  return (
    <>
      {/* hero section */}
      <div className="bg-dark text-light p-5 hero">
        <div className="container d-sm-flex text-sm-start text-center align-items-center justify-content-center">
          <div className="">
            <div className="h2 text-lg">
              Become a <span className="text-warning"> Web Developer</span>
            </div>
            <div className="lead my-4">
              We focus on teaching our students the fundamentals of the latest
              and greatest technologies to prepare them for their first dev role
            </div>
            <button className="btn btn-primary btn-lg">
              Start The Enrollment
            </button>
          </div>
          <img className=" w-50 d-sm-flex d-none" src={Showcase} />
        </div>
      </div>

      <div className=" bg-primary h-30 py-5">
        <div className="container d-md-flex justify-content-between align-items-center">
          <div className="text-light h5 mb-md-0 mb-4">
            Sign Up For Our Newsletter
          </div>
          <div className="input-group news">
            <input
              className="form-control"
              type="email"
              placeholder="Enter email"
            />
            <button className="btn btn-dark btn-lg">Sign Up</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
