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
      body: JSON.stringify({ formData }),
    });
    //polling demo (fetch request for adding new data /add-brain)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Username"
            required
            value={formData.username}
            // defaultValue={} for autofilling
            onChange={handleInputChange}
          />
          <label htmlFor="type">Entry Type: </label>
          <input
            type="text"
            name="type"
            required
            value={formData.type}
            onChange={handleInputChange}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="entry">Entry: </label>
          <input
            type="text"
            name="entry"
            required
            value={formData.entry}
            onChange={handleInputChange}
          />
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
