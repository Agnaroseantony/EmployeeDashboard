
import { useState } from "react";

function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    location: "",
    salary: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="container py-5">
      <div className="form-container mx-auto">
        <h2 className="fw-bold mb-2">Employee Form</h2>
        <p className="text-muted mb-4">
          Enter the employee details below.
        </p>

        {submitted && (
          <div className="alert alert-success">
            Form submitted successfully! No data was sent to an API.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter employee name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="designation" className="form-label">
              Designation
            </label>
            <input
              id="designation"
              type="text"
              name="designation"
              className="form-control"
              placeholder="Enter designation"
              value={formData.designation}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <input
              id="location"
              type="text"
              name="location"
              className="form-control"
              placeholder="Enter location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="salary" className="form-label">Salary</label>
            <input
              id="salary"
              type="number"
              name="salary"
              className="form-control"
              placeholder="Enter salary"
              min="0"
              value={formData.salary}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default EmployeeForm;
