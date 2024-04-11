const Contacts = () => {
  return (
    <>
      <div className="container my-md-5 py-md-5 pt-5">
        <div className=" row g-4">
          <div className="col-md mb-sm-4 mb-0">
            <h2 className=" text-center mb-4">Contact Info</h2>
            <ul className="list-group list-group-flush lead">
              <li className="list-group-item">
                <span className="fw-bold me-2">Main Location:</span>
                Kumasi KNUST Campus
              </li>
              <li className="list-group-item">
                <span className="fw-bold me-2">Enrollment Phone:</span>
                (+233) 55-130-5555
              </li>
              <li className="list-group-item">
                <span className="fw-bold me-2">Student Phone:</span>
                (+233) 54-123-4454
              </li>
              <li className="list-group-item">
                <span className="fw-bold me-2">Enrollment Email:</span>
                (+233) enroll@info
              </li>
              <li className="list-group-item">
                <span className="fw-bold me-2">Student Email:</span>
                students@frontendbc.test
              </li>
            </ul>
          </div>
          <div className=" col-md">
            <iframe
              className=" w-md-50 w-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63404.303934939344!2d-1.616246917490835!3d6.675517648673008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb946c39956a09%3A0x67868ca2b098015f!2sKwame%20Nkrumah%20University%20of%20Science%20and%20Technology%2C%20Kumasi!5e0!3m2!1sen!2sgh!4v1707427053286!5m2!1sen!2sgh"
              height="350"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
