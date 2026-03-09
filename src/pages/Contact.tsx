function Contact() {
  return (
    <div>

      <h1 className="page-title">Contact University Services</h1>

      <p className="page-subtitle">
        If you have any questions or need support, you can reach the University of Baguio Services Department 
        using the contact details below or send a message through the form provided.
      </p>

      <div className="row mt-5">

        <div className="col-md-6">

          <div className="portal-card">
            <h4>Contact Information</h4>

            <p><strong>Email:</strong> 20246896@s.ubaguio.edu</p>
            <p><strong>Phone:</strong> +63 967 128 8007</p>
            <p><strong>Office Hours:</strong> Monday – Friday, 8:00 AM – 5:00 PM</p>
            <p><strong>Office Location:</strong> University of Baguio F building</p>
          </div>

        </div>

        <div className="col-md-6">

          <div className="contact-form">

            <h4>Send a Message</h4>

            <input
              type="text"
              className="form-control"
              placeholder="Your Full Name"
            />

            <input
              type="email"
              className="form-control"
              placeholder="Your Email Address"
            />

            <textarea
              className="form-control"
              rows={4}
              placeholder="Your Message"
            ></textarea>

            <button className="btn btn-primary mt-2">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact