import emailjs from "emailjs-com";
import '../Mailer/mailer.css'

// Website Used: https://www.emailjs.com/

const Mailer = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_2g1nywj",
      "template_8fzdr4s",
      e.target,
      "jKw7GysZ0WfXqo7rE"
    ).then(res => {
      console.log(res);
    }).catch(err => console.log(err));
  }


  // Contact
  return (
    <div
      className="container border"
      style={{
        marginTop: "150px",
        marginBottom: "180px",
        width: "40%",
        backgroundImage: `url('https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg?size=626&ext=jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* <h1 className="text-center" style={{ marginTop: "25px" }}>Contact Form</h1> */}
      <h1 className="bg-dark card text-white text-center mb-3" style={{ marginLeft: "100px", marginRight: "100px", marginTop: "50px" }}><strong>Contact Form</strong></h1>
      <form
        className="row"
        style={{ margin: "25px 85px 75px 100px" }}
        onSubmit={sendEmail}
      >
        <br />
        <label><h5>Name</h5></label>
        <input type="text" name="name" className="form-control" placeholder="Enter your name..." />

        <div style={{ marginTop: "20px" }}></div>
        <label><h5>Email</h5></label>
        <input type="email" name="user_email" className="form-control" placeholder="Enter your email..." />

        <div style={{ marginTop: "20px" }}></div>
        <label><h5>Message</h5></label>
        <textarea name="message" rows="4" className="form-control" placeholder="Enter you feedback..." />
        
        <div style={{ marginTop: "20px" }}></div>
        <input
          type="submit"
          value="Send"
          className="form-control btn btn-primary"
          style={{ marginTop: "30px"}}
        />
      </form>
    </div>
  );
};

export default Mailer;