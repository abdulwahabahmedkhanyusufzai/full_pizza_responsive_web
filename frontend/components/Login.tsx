import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const formData = new FormData();
        formData.append("username", email);
        formData.append("password", password);

        try {
            const response = await fetch("http://localhost:8000/api/login", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Login failed");
            }

            const data = await response.json();
            login(data.access_token);
        } catch (err) {
            setError("Invalid email or password");
        }
    };

    return (
        <section className="section" style={{ paddingTop: "120px", display: "flex", justifyContent: "center" }}>
            <div className="contact__container container">
                <div className="contact__content">
                    <h2 className="section__title">Login</h2>
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
                            Login
                        </button>
                        <p style={{ marginTop: "15px", textAlign: "center" }}>
                            Don't have an account? <a href="/register" style={{ color: "var(--first-color)" }}>Register</a>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;
