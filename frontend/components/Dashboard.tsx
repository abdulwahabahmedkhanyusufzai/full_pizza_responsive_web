import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

interface UserProfile {
    id: number;
    email: string;
    full_name?: string;
    phone_number?: string;
}

const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);
    const [profile, setProfile] = useState<UserProfile | null>(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem("token");
            try {
                const res = await fetch("http://localhost:8000/api/users/me", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (res.ok) {
                    const data = await res.json();
                    setProfile(data);
                }
            } catch (e) {
                console.error("Failed to fetch profile", e);
            }
        };

        if (user) {
            fetchProfile();
        }
    }, [user]);

    if (!user) {
        return (
            <section className="section" style={{ paddingTop: "8rem", textAlign: "center" }}>
                <h2>Please log in to view the dashboard.</h2>
                <Link to="/login" className="button">Login</Link>
            </section>
        )
    }

    return (
        <section className="section" style={{ paddingTop: "8rem" }}>
            <div className="container">
                <h2 className="section__title">Welcome, {profile?.full_name || user.email}!</h2>

                <div style={{
                    backgroundColor: "var(--container-color)",
                    padding: "2rem",
                    borderRadius: "1.5rem",
                    maxWidth: "600px",
                    margin: "0 auto",
                    boxShadow: "0 8px 24px hsla(353, 100%, 8%, .1)"
                }}>
                    <h3 style={{ marginBottom: "1.5rem", color: "var(--first-color)" }}>My Profile</h3>

                    <div style={{ display: "grid", gap: "1rem", textAlign: "left" }}>
                        <div>
                            <strong>Email:</strong> {profile?.email}
                        </div>
                        {profile?.full_name && (
                            <div>
                                <strong>Full Name:</strong> {profile.full_name}
                            </div>
                        )}
                        {profile?.phone_number && (
                            <div>
                                <strong>Phone:</strong> {profile.phone_number}
                            </div>
                        )}
                    </div>

                    <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center" }}>
                        <Link to="/" className="button">
                            Order Pizza
                        </Link>
                        <button onClick={logout} className="button" style={{ backgroundColor: "var(--first-color-dark)" }}>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
