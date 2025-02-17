import { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "YOUR_SERVICE_ID",
            "YOUR_TEMPLATE_ID",
            e.target,
            "YOUR_PUBLIC_KEY"
        ).then(
            () => {
                toast.success("✅ Mesajul a fost trimis!", { position: "bottom-center", autoClose: 3000 });
                setFormData({ name: "", email: "", message: "" });
            },
            
            (error) => {
                
                    toast.error("❌ Eroare la trimiterea mesajului.", { position: "bottom-center", autoClose: 3000 });
                
            }
        );
    };

    return (
        <form className="form" onSubmit={sendEmail}>
            <div className="form-content">
                <div className="form-field">
                    <label>Nume:</label>
                    <input className="input-form" type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-field">
                    <label>Email:</label>
                    <input className="input-form" type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-field">
                    <label>Mesaj:</label>
                    <textarea className="input-form" name="message" value={formData.message} onChange={handleChange} required />
                </div>
            </div>
            <button className="btn-standard secondary" type="submit">Trimite</button>
        </form>
    );
};

export default ContactForm;