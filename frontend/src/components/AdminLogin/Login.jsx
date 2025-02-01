import React, { useEffect, useState } from "react";
import logo from "../../assets/icons/logo_only.png";
import logoText from "../../assets/icons/logo-text.png";
import Swal from "sweetalert2";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    useEffect(()=>{
        const isAuthenticated = localStorage.getItem("DefenderauthToken");
        if(isAuthenticated){
            navigate("/admin/dashboard")
        }
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await api.login(formData)
            if (!response.error) {
                Swal.fire({
                    icon: "success",
                    title: "Login Successful",
                    showConfirmButton: false,
                    timer: 1500,
                });
                localStorage.setItem('DefenderauthToken','token')
                navigate("/admin/dashboard"); // Redirect after successful login
            }
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: error.response ? error.response.data.message : "An error occurred",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>

            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="flex flex-col absolute top-7 left-10 items-center ">
                    <img className="h-[2.5vw] pt-[0.5vw]" src={logo} alt="Logo" />
                    <img className="h-[3vw] w-auto" src={logoText} alt="Logo Text" />
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6"
                >
                    <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-600 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            placeholder="Enter your password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </>
    );
};

export default Login;
