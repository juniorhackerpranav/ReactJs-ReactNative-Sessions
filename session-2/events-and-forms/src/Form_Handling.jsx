import { useState } from "react";

export default function Form_Handling() {

  // Store form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh, prevents default behaviour

    // The custom data validation is applied here in this function
    console.log("Name:", name);
    console.log("Email:", email);
  };

  return (
    <div>
      <h2>Form Handling</h2>

      <form onSubmit={handleSubmit}>

        {/* Name Input */}
        <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />

        <br /><br />

        {/* Email Input */}
        {/* Applying the state change with using the onChange event */}
        <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <br /><br />

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}