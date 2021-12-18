import React from "react";

const HomePage = () => {
  return (
    <div className="container mt-5 mb-3 home">
      <h3 className="heading text-light">Home</h3>
      <div className="row">
        <div className="col-md-4">
          <div className="card p-3 mb-2">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <div className="icon">
                  {" "}
                  <i className="bx bxl-mailchimp" />{" "}
                </div>
                <div className="ms-2 c-details">
                  <h6 className="mb-0">Mailchimp</h6> <span>1 days ago</span>
                </div>
              </div>
              <div className="badge">
                {" "}
                <span>Design</span>{" "}
              </div>
            </div>
            <div className="mt-5">
              <h3 className="heading">
                Senior Product
                <br />
                Designer-Singapore
              </h3>
              <div className="mt-5">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <div className="mt-3">
                  {" "}
                  <span className="text1">
                    32 Applied <span className="text2">of 50 capacity</span>
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 mb-2">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <div className="icon">
                  {" "}
                  <i className="bx bxl-dribbble" />{" "}
                </div>
                <div className="ms-2 c-details">
                  <h6 className="mb-0">Dribbble</h6> <span>4 days ago</span>
                </div>
              </div>
              <div className="badge">
                {" "}
                <span>Product</span>{" "}
              </div>
            </div>
            <div className="mt-5">
              <h3 className="heading">
                Junior Product
                <br />
                Designer-Singapore
              </h3>
              <div className="mt-5">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <div className="mt-3">
                  {" "}
                  <span className="text1">
                    42 Applied <span className="text2">of 70 capacity</span>
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 mb-2">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <div className="icon">
                  {" "}
                  <i className="bx bxl-reddit" />{" "}
                </div>
                <div className="ms-2 c-details">
                  <h6 className="mb-0">Reddit</h6> <span>2 days ago</span>
                </div>
              </div>
              <div className="badge">
                {" "}
                <span>Design</span>{" "}
              </div>
            </div>
            <div className="mt-5">
              <h3 className="heading">
                Software Architect <br />
                Java - USA
              </h3>
              <div className="mt-5">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <div className="mt-3">
                  {" "}
                  <span className="text1">
                    52 Applied <span className="text2">of 100 capacity</span>
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
