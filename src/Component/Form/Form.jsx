import React from "react";
import "../Form/Form.css";

function Form() {
  return (
    <div className="form-container">
      <form className="form" action="">
        <div className="form-title">
            <h6>Contact me</h6>
        </div>
       <div className="form-detail">
       <p>Name</p>
        <input type="text" required />
        <p>Email</p>
        <input type="email" required />
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
          <button className="sub-btn" action="submit">
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
