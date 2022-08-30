import React from 'react'

export const ContactSection = () => {
  return (
    <section className="contact-one pt-5">
    <div className="container">
      <div className="row">
        <div className="col-xl-7">
          <div className="contact-one__form__wrap">
            <div className="block-title text-left">
              <p>contact with us</p>
              <h3>write us a message</h3>
              <div className="leaf">
                <img src="assets/images/resources/leaf.png" alt="" />
              </div>
            </div>
            <form
              action="inc/sendemail.php"
              className="contact-one__form"
            >
              <div className="row low-gutters">
                <div className="col-md-6">
                  <div className="input-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-group">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-group">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="input-group">
                    <textarea
                      name="message"
                      placeholder="Write Message"
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="input-group contact__btn">
                    <button
                      type="submit"
                      className="thm-btn contact-one__btn"
                    >
                      Send message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-xl-5">
          <div className="have_questions">
            <div className="image_box">
              <img
                src="assets/images/resources/contact_img.jpg"
                alt=""
              />
            </div>
            <div className="block-title text-center">
              <p>get in touch with us</p>
              <h3>Have question?</h3>
              <div className="leaf">
                <img src="assets/images/resources/leaf.png" alt="" />
              </div>
            </div>
            <div className="have_questions_text">
              <p>
                There are many variations of passages available but
                the majority have suffered alteration in some form by
                inject humour or donec vel erat sollicitudin, dapibus
                dui at, porttitor sem.
              </p>
            </div>
            <div className="have_questions_btn">
              <a href="#" className="thm-btn">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
