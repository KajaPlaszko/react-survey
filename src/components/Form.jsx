import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const initialFormData = {
  logo: "",
  timeSpent: [],
  review: "",
  username: "",
  email: "",
};

export function Form({ onSubmit, initialData }) {
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    setFormData(initialFormData); 
  };

  const handleChange = (event) => {
    const { name, value, checked } = event.target;

    if (name === "logo") {
      setFormData({ ...formData, logo: value });
    }

    if (name === "timeSpent") {
      if (checked) {
        setFormData((previousFormData) => ({
          ...previousFormData,
          [name]: [...previousFormData[name], value],
        }));
      } else {
        setFormData((previousFormData) => ({
          ...previousFormData,
          [name]: previousFormData[name].filter((item) => item !== value),
        }));
      }
    }

    if (name === "review") {
      setFormData({ ...formData, review: value });
    }

    if (name === "username") {
      setFormData({ ...formData, username: value });
    }

    if (name === "email") {
      setFormData({ ...formData, email: value });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck logo?</h3>
        <ul>
          <li>
            <input
              id="logo-one"
              type="radio"
              name="logo"
              value="1"
              checked={formData.logo === "1"}
              onChange={handleChange}
            />
            <label htmlFor="logo-one">1</label>
          </li>
          <li>
            <input
              id="logo-two"
              type="radio"
              name="logo"
              value="2"
              checked={formData.logo === "2"}
              onChange={handleChange}
            />
            <label htmlFor="logo-two">2</label>
          </li>
          <li>
            <input
              id="logo-three"
              type="radio"
              name="logo"
              value="3"
              checked={formData.logo === "3"}
              onChange={handleChange}
            />
            <label htmlFor="logo-three">3</label>
          </li>
          <li>
            <input
              id="logo-four"
              type="radio"
              name="logo"
              value="4"
              checked={formData.logo === "4"}
              onChange={handleChange}
            />
            <label htmlFor="logo-four">4</label>
          </li>
        </ul>
      </div>
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck?</h3>
        <ul>
          <li>
            <label>
              <input
                name="timeSpent"
                type="checkbox"
                value="swimming"
                checked={formData.timeSpent.includes("swimming")}
                onChange={handleChange}
              />
              Swimming
            </label>
          </li>
          <li>
            <label>
              <input
                name="timeSpent"
                type="checkbox"
                value="bathing"
                checked={formData.timeSpent.includes("bathing")}
                onChange={handleChange}
              />
              Bathing
            </label>
          </li>
          <li>
            <label>
              <input
                name="timeSpent"
                type="checkbox"
                value="chatting"
                checked={formData.timeSpent.includes("chatting")}
                onChange={handleChange}
              />
              Chatting
            </label>
          </li>
          <li>
            <label>
              <input
                name="timeSpent"
                type="checkbox"
                value="noTime"
                checked={formData.timeSpent.includes("noTime")}
                onChange={handleChange}
              />
              I don&apos;t like to spend time with it
            </label>
          </li>
        </ul>
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea
          name="review"
          cols="30"
          rows="10"
          value={formData.review}
          onChange={handleChange}
        />
      </label>
      <label>
        Put your name here (if you feel like it):
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Leave us your email pretty please??
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.object,
};