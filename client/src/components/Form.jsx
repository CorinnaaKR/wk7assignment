//TODO: SET UP A FORM, COLLECT USERS DATA, SEND DATA TO SERVER
//STORE DATA IN STATE (FORMVALUES)
//SUBMIT EVENT --> HANDLER AND LISTENEER
//CHANGE EVENT --> HANDLER AND LISTENER
//COLLECT THE DATA AND UPDATE STATE
//FETCH SERVER POST ROUTE & SEND FORM VALUES

// fetch("https://localhost:8080/endpoint", {
//     headers:
//     body:
// })

//SET UP AN ACCESSIBLE, VALIDATED FORM. REMEMBER TO TRACK THE CHANGES
//BE CONSIST WITH NAMING CONVENTIONS

import { useState } from "react";
import "./Form.css";

<>
  <h1>Penny for your thoughts?</h1>
</>;

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    entry: "",
  });

  function handleInputChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    //STEP 4
    //fetch POST server route

    fetch("http://localhost:8080/add-brain", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), //suggested change by ChatGPT from ({formDaata}) - ask Bertie the signifcant as I only partially understand.

      //added in code from group project, vaguely understand its purpose but double check with Bertie
    }).then((response) => {
      if (response.ok) {
        window.location.reload();
      } else {
        console.error("Failed to submit the review.");
      }
    });

    //polling demo (fetch request for adding new data /add-brain)
  }
  return (
    <>
      {/* <main className="form"> */}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Username"
            required
            value={formData.name}
            // defaultValue={} for autofilling
            onChange={handleInputChange}
          />
          <label htmlFor="type">Entry Type: </label>
          <input
            type="text"
            name="type"
            placeholder="Thought? Confession? Secret?"
            required
            value={formData.type}
            onChange={handleInputChange}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="entry">Entry: </label>
          <textarea
            className="textarea"
            rows="20"
            cols="50"
            type="text"
            name="entry"
            placeholder="Unload your brain here!"
            required
            value={formData.entry}
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
      {/* </main> */}
    </>
  );
}
