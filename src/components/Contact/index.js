import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers"; // add this after you have the handle change and submit functions working properly

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  }); // set the initial state to empty strings

  const [errorMessage, setErrorMessage] = useState(""); // Hook to handle the error state. set to empty
  const { name, email, message } = formState; // deconstructing formState into named properties. Now we can use these constants to assign the initial state, which are empty strings, to the defaultValue

  // handle form input change
  function handleChange(e) {
    if (e.target.name === "email") {
      //console.log(e.target.value);
      const isValid = validateEmail(e.target.value);

      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      // checking the message and name form element values
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      console.log("form is valid!");
      setFormState({ ...formState, [e.target.name]: e.target.value }); // The name property of target in the expression actually refers to the name attribute of the form element.
    }
  }

  // The function that'll handle the submission of the form data
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  //console.log(formState); used to handleChange on the tageted form names

  return (
    <section>
      <h1> Contact me </h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            defaultValue={name}
            onBlur={handleChange}
            name="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            defaultValue={email}
            onBlur={handleChange}
            name="email"
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={message}
            onBlur={handleChange}
            rows="5"
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text" style={{color: "red", fontSize: "25px"}} >{errorMessage}</p>
          </div>
        )}

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
