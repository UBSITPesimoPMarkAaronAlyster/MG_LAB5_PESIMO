function Services() {
  return (
    <div>

      <h1 className="page-title">University of Baguio Student Services</h1>

      <p className="page-text">
        The University of Baguio offers a variety of services to assist students throughout their academic journey.
      </p>

      <div className="row mt-4">

        <div className="col-md-6">
          <div className="card portal-card">
            <h4>Enrollment Assistance</h4>
            <p>Guidance and support for subject registration and enrollment-related concerns.</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card portal-card">
            <h4>Academic Advising</h4>
            <p>Consult with University of Baguio advisors on course planning and academic progress.</p>
          </div>
        </div>

        <div className="col-md-6 mt-3">
          <div className="card portal-card">
            <h4>Library Access</h4>
            <p>Explore digital resources and utilize UB library services.</p>
          </div>
        </div>

        <div className="col-md-6 mt-3">
          <div className="card portal-card">
            <h4>Technical Support</h4>
            <p>Assistance with University of Baguio systems and online platforms.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services