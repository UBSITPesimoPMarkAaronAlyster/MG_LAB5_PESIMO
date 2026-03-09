function Home() {
  return (
    <div>

      <h1 className="page-title">University of Baguio Student Portal</h1>

      <p className="page-text">
        Welcome to the University of Baguio Student Services Portal. This platform provides students
        with easy access to key services such as enrollment support, academic guidance, IT assistance,
        and other campus resources.
      </p>

      <div className="row mt-4">

        <div className="col-md-4">
          <div className="card portal-card">
            <h4>Academic Support</h4>
            <p>
              Connect with academic advisors and utilize available resources to help you excel
              in your courses at the University of Baguio.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card portal-card">
            <h4>Student Services</h4>
            <p>
              Easily access essential student services including enrollment guidance,
              transcript requests, and other student-related documentation.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card portal-card">
            <h4>Technical Help</h4>
            <p>
              Experiencing issues with university systems? Reach out to the UB IT support team
              for prompt assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home