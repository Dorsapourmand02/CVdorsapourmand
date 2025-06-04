import React from "react";
import "../Form/Form.css";

function Form() {
  return (
    <div className="form-container">
      <form className="form" action="http://localhost/contact-form/send_email.php" method="POST">
        <div className="form-title">
            <h6>Contact me</h6>
        </div>
       <div className="form-detail">
       <p>Name</p>
        <input name="name" type="text" required />
        <p>Email</p>
        <input name="email" type="email" required />
        <p>Details</p>

        <textarea
          className="detail"
          name="description"
          placeholder="Right your message here please"
          rows={5}
          required
          
        ></textarea>

       </div>
        <div className="submit-btn">
          <button type="submit" className="sub-btn" >
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
