import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10,}$/; // At least 10 digits
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum 8 chars, at least one letter and one number

        if (!email.match(emailRegex)) {
            return "Invalid email format.";
        }
        if (!phoneNumber.match(phoneRegex)) {
            return "Phone number must be at least 10 digits.";
        }
        if (!password.match(passwordRegex)) {
            return "Password must be at least 8 characters, with letters and numbers.";
        }
        if (password !== confirmPassword) {
            return "Passwords do not match.";
        }
        return null;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

        try {
            const response = await fetch("http://localhost:8000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    full_name: fullName,
                    phone_number: phoneNumber,
                    email,
                    password
                }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.detail || "Registration failed");
            }

            navigate("/login");
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <section className="auth__container">
            <div className="auth__content" style={{ maxWidth: "500px" }}> {/* Wider card for more fields */}
                <h2 className="auth__title">Register</h2>
                <form onSubmit={handleSubmit} className="auth__form">
                    <div className="auth__inputs">
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="auth__input"
                            required
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="auth__input"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="auth__input"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="auth__input"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="auth__input"
                            required
                        />
                    </div>
                    {error && <p style={{ color: "red", marginTop: "10px", fontSize: "0.875rem" }}>{error}</p>}
                    <button type="submit" className="button auth__button">
                        Register
                    </button>
                    <p className="auth__switch">
                        Already have an account? <a href="/login">Login</a>
                    </p>
                </form>
            </div>
        </section>
    );
};

export default Register;
