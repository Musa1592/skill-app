import React, { useState } from "react";

const Batches = () => {
  const [formData, setFormData] = useState({
    skillName: "",
    skillCategory: "physical",
    skillImage: null
  });
  const [successMessage, setSuccessMessage] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.skillName && formData.skillCategory && formData.skillImage) {
      setSuccessMessage(true);
      setFormData({
        skillName: "",
        skillCategory: "physical",
        skillImage: null
      });
      document.getElementById("skillsForm").reset(); // Reset the form visually
    }
  };

  return (
    <div>
      <div className="container">
        <h1>Add a Skill/Course</h1>
        <form id="skillsForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="skillName">Skill/Course Name:</label>
            <input
              type="text"
              id="skillName"
              name="skillName"
              value={formData.skillName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="skillCategory">Skill Category:</label>
            <select
              id="skillCategory"
              name="skillCategory"
              value={formData.skillCategory}
              onChange={handleInputChange}
            >
              <option value="physical">Physical</option>
              <option value="digital">Digital</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="skillImage">Upload Skill Image:</label>
            <input
              type="file"
              id="skillImage"
              name="skillImage"
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Add Skill/Course</button>
        </form>
        {successMessage && (
          <p id="successMessage" style={{ display: "block" }}>
            Skill/Course successfully added!
          </p>
        )}
      </div>
    </div>
  );
};

export default Batches;
