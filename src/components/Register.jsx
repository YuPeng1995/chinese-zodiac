import { useState } from 'react';
import './../styles/Register.css';

export default function Register() {
    // Form state management
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        confirmEmail: "",
        animal: "",
        wantsResults: false,
    });

    // Error state management
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        confirmEmail: "",
        animal: "",
    });

    const [formError, setFormError] = useState("");

    // Validation logic for each field
    const validateField = (name, value) => {
        let error = "";

        switch (name) {
            case "name":
                if (value === "") {
                    error = "This field cannot be empty.";
                }
                break;

            case "email":
                if (value === "") {
                    error = "This field cannot be empty.";
                } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
                    error = "Please enter a valid email address.";
                }
                break;

            case "confirmEmail":
                if (value === "") {
                    error = "This field cannot be empty.";
                } else if (value !== formData.email) {
                    error = "Emails do not match.";
                }
                break;

            case "animal":
                if (value === "") {
                    error = "Please select an option.";
                }
                break;

            default:
                break;
        }

        return error;
    };

    // Handle input changes and validate in real-time
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });

        const error = validateField(name, value);
        setErrors({ ...errors, [name]: error });

        setFormError("");
    };

    // Form submission handler with validation
    const handleOnSubmit = (e) => {
        e.preventDefault();

        const newErrors = {
            name: validateField("name", formData.name),
            email: validateField("email", formData.email),
            confirmEmail: validateField("confirmEmail", formData.confirmEmail),
            animal: validateField("animal", formData.animal),
        };

        setErrors(newErrors);

        let hasErrors = false;
        for (const error of Object.values(newErrors)) {
            if (error) {
                hasErrors = true;
                break;
            }
        }
        if (hasErrors) {
            setFormError("Please fix the errors above before submitting the form.");
        } else {
            setFormData({
                name: "",
                email: "",
                confirmEmail: "",
                animal: "",
            });
            setErrors({
                name: "",
                email: "",
                confirmEmail: "",
                animal: "",
            });
            setFormError("");

            // Send form data to server
            fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
        }
    };

    return (<>
        <div id="register-main">
            {/* noValidate prevents default browser validation to use custom validation */}
            <form id='register-form' onSubmit={handleOnSubmit} noValidate>
                {/* Form-level error message */}
                {formError && <p className="form-error" role="alert">{formError}</p>}
                <div className='form-container'>
                    <label className="form-input-label" htmlFor="name">
                        Enter your name: <span className="required">*required</span>
                    </label>
                    <div className='form-input-container'>
                        {/* Field-level error message */}
                        {errors.name && <span className="error" role="alert">{errors.name}</span>}
                        <input className="form-input" type="text" name="name" id="name" value={formData.name}
                            onChange={handleInputChange} required
                        />
                    </div>
                </div>
                <div className='form-container'>
                    <label className="form-input-label" htmlFor="email">
                        Enter your email: <span className="required">*required</span>
                    </label>
                    <div className='form-input-container'>
                        {errors.email && <span className="error" role="alert">{errors.email}</span>}
                        <input className="form-input" type="email" name="email" id="email" value={formData.email}
                            onChange={handleInputChange} required
                        />
                    </div>
                </div>
                <div className='form-container'>
                    <label className="form-input-label" htmlFor="confirmEmail">
                        Confirm your email: <span className="required">*required</span>
                    </label>
                    <div className='form-input-container'>
                        {errors.confirmEmail && (
                            <span className="error" role="alert">{errors.confirmEmail}</span>
                        )}
                        <input className="form-input" type="email" name="confirmEmail" id="confirmEmail" value={formData.confirmEmail}
                            onChange={handleInputChange} required
                        />
                    </div>
                </div>
                <div className="checkbox-label">
                    <label className="form-input-label" htmlFor="wantsResults">
                        Do you want us to send you vote results?
                    </label>
                    <input
                        className="form-input"
                        type="checkbox"
                        name="wantsResults"
                        id="wantsResults"
                        checked={formData.wantsResults}
                        onChange={(e) => setFormData({
                            ...formData,
                            wantsResults: e.target.checked
                        })}
                    />
                </div>
                <div className='form-container'>
                    <label className="form-input-label" htmlFor="menu">
                        Which animal would you like to choose? <span className="required">*required</span>
                    </label>
                    <div className='form-input-container'>
                        {errors.animal && <span className="error" role="alert">{errors.animal}</span>}
                        <select className="form-input" name="animal" id="menu" value={formData.animal}
                            onChange={handleInputChange} required
                        >
                            <option value="">Please select</option>
                            <option value="Rat">Rat</option>
                            <option value="Ox">Ox</option>
                            <option value="Tiger">Tiger</option>
                            <option value="Rabbit">Rabbit</option>
                            <option value="Dragon">Dragon</option>
                            <option value="Snake">Snake</option>
                            <option value="Horse">Horse</option>
                            <option value="Goat">Goat</option>
                            <option value="Monkey">Monkey</option>
                            <option value="Rooster">Rooster</option>
                            <option value="Dog">Dog</option>
                            <option value="Pig">Pig</option>
                        </select>
                    </div>
                </div>
                <button className='form-submit-button' type="submit">Register</button>
            </form>
        </div>
    </>);
}