import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch("http://localhost:8000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
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
        <section className="section" style={{ paddingTop: "120px", display: "flex", justifyContent: "center" }}>
            <div className="contact__container container">
                <div className="contact__content">
                    <h2 className="section__title">Register</h2>
                    <form onSubmit={handleSubmit} className="contact__form" style={{ maxWidth: "400px", margin: "0 auto" }}>
                        <div className="contact__inputs">
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="contact__input"
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="contact__input"
                                required
                            />
                        </div>
                        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
                        <button type="submit" className="button" style={{ marginTop: "20px", width: "100%" }}>
                            Register
                        </button>
                        <p style={{ marginTop: "15px", textAlign: "center" }}>
                            Already have an account? <a href="/login" style={{ color: "var(--first-color)" }}>Login</a>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Register;
