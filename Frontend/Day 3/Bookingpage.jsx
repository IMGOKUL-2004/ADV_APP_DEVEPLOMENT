import React, { useState } from 'react';
import '../../assets/css/bookingform.css';
import Footer from '../Footer/Footer';
import Nav from "./navbar";

const BookingForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        eventDate: '',
        eventName: '',
        eventLocation: '',
        payment: 0 // New field for payment amount
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        // Update payment amount based on selected event name
        if (name === 'eventName') {
            const eventCosts = {
                Wedding: 100000,
                Birthday: 50000,
                CorporateEvent: 75000,
                BabyShower: 40000,
                Anniversary: 60000,
                Concert: 80000,
                // Add more event costs here if needed
            };
            setFormData(prevState => ({
                ...prevState,
                payment: eventCosts[value] || 0
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, including payment
        console.log(formData);
    };

    return (
        <div>
            <Nav />
            <div className="booking-form-container">
                <h2 className='book-h'>Book Your Event</h2>
                <form onSubmit={handleSubmit} className="booking-form">
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventDate">Event Date</label>
                        <input type="date" id="eventDate" name="eventDate" value={formData.eventDate} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventName">Event Name</label>
                        <select id="eventName" name="eventName" value={formData.eventName} onChange={handleChange} required>
                            <option value="">Select Event</option>
                            <option value="Wedding">Wedding</option>
                            <option value="Birthday">Birthday</option>
                            <option value="CorporateEvent">Corporate Event</option>
                            <option value="BabyShower">Baby Shower</option>
                            <option value="Anniversary">Anniversary</option>
                            <option value="Concert">Concert</option>
                            {/* Add more event options here */}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventLocation">Event Location</label>
                        <select id="eventLocation" name="eventLocation" value={formData.eventLocation} onChange={handleChange} required>
                            <option value="">Select Location</option>
                            <option value="Coimbatore">Coimbatore</option>
                            {/* Add more location options here if needed */}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="payment">Payment</label>
                        <input type="text" id="payment" name="payment" value={formData.payment} disabled />
                    </div>
                    <button type="submit">Book Now</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default BookingForm;
