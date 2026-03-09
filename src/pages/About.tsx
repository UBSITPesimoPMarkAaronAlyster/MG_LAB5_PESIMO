function About() {
  return (
    <div>

      <h1 className="page-title">About the University of Baguio Student Portal</h1>

      <p className="page-subtitle">
        The University of Baguio Student Services Portal was created to give students
        fast and convenient access to key campus services. Its purpose is to provide
        a centralized platform where students can find information, request support,
        and stay connected with university resources.
      </p>

      <div className="row mt-5">

        <div className="col-md-4">
          <div className="portal-card">
            <h4>Our Mission</h4>
            <p>
              To deliver an efficient online platform that assists students throughout
              their academic journey by making University of Baguio services easily accessible.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="portal-card">
            <h4>Our Vision</h4>
            <p>
              To foster a connected UB community where students can access information,
              services, and support through a modern digital portal.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="portal-card">
            <h4>Why This Portal Exists</h4>
            <p>
              The portal streamlines access to services such as enrollment, advising,
              IT support, and academic resources, while enhancing communication
              between students and the university.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About