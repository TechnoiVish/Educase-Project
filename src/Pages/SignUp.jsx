import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stop default form submission
    console.log(formData);

    alert("Account Created Successfully!");

    navigate("/login");
  };

  return (
    <div className="container">
      <h2>Create your PopX account</h2>

      <form onSubmit={handleSubmit}>
        
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        
        />

        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          required
          
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        
        />

        <input
          type="text"
          name="company"
          placeholder="Company name"
          value={formData.company}
          onChange={handleChange}
        />
        

        <p >Are you an Agency?</p>
      <div>
        <label>
          <input
            type="radio"
            name="agency"
            value="Yes"
            checked={formData.agency === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>

        <label>
          <input
            type="radio"
            name="agency"
            value="No"
            checked={formData.agency === "No"}
            onChange={handleChange}
          />
          No
        </label>
        </div>

        <button type="submit" className="primary">
          Create Account
        </button>

      </form>
    </div>
  );
}