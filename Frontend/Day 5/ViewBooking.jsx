// ViewBooking.js
import  { useState } from 'react';
import '../../assets/css/viewbooking.css';
import AdminNav from './AdminNav';

const ViewBooking = () => {
  const [bookings, setBookings] = useState([
    { id: 1, fullName: 'John Doe', email: 'john@example.com', phoneNumber: '123-456-7890', eventDate: '2024-03-15', eventLocation: 'Coimbatore', eventName: 'Wedding' },
    { id: 2, fullName: 'Jane Smith', email: 'jane@example.com', phoneNumber: '987-654-3210', eventDate: '2024-04-20', eventLocation: 'Coimbatore', eventName: 'Birthday' },
    { id: 3, fullName: 'Alice Johnson', email: 'alice@example.com', phoneNumber: '111-222-3333', eventDate: '2024-05-10', eventLocation: 'Coimbatore', eventName: 'Corporate Party' },
    { id: 4, fullName: 'Bob Brown', email: 'bob@example.com', phoneNumber: '444-555-6666', eventDate: '2024-06-25', eventLocation: 'Coimbatore', eventName: 'Anniversary' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleEdit = (id) => {
    const bookingToEdit = bookings.find(booking => booking.id === id);
    setSelectedBooking(bookingToEdit);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    const updatedBookings = bookings.filter(booking => booking.id !== id);
    setBookings(updatedBookings);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveChanges = (updatedBooking) => {
    const updatedBookings = bookings.map(booking =>
      booking.id === updatedBooking.id ? updatedBooking : booking
    );
    setBookings(updatedBookings);
    setIsModalOpen(false);
  };

  return (
    <div>
      <AdminNav/>
      <div className="view-booking">
        <table className="booking-table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Event Date</th>
              <th>Event Location</th>
              <th>Event Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(booking => (
              <tr key={booking.id}>
                <td>{booking.fullName}</td>
                <td>{booking.email}</td>
                <td>{booking.phoneNumber}</td>
                <td>{booking.eventDate}</td>
                <td>{booking.eventLocation}</td>
                <td>{booking.eventName}</td>
                <td className="booking-actions">
                  <button onClick={() => handleEdit(booking.id)}>Edit</button>
                  <button onClick={() => handleDelete(booking.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <EditBookingModal
          booking={selectedBooking}
          onSaveChanges={handleSaveChanges}
          onCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

const EditBookingModal = ({ booking, onSaveChanges, onCloseModal }) => {
  const [updatedBooking, setUpdatedBooking] = useState({ ...booking });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBooking(prevBooking => ({
      ...prevBooking,
      [name]: value
    }));
  };

  const handleSave = () => {
    onSaveChanges(updatedBooking);
  };

  return (
    <div className="modal-wrapper">
      <div className="modal-card">
        <span className="close" onClick={onCloseModal}>&times;</span>
        <h2>Edit Booking</h2>
        <label>Full Name:</label>
        <input type="text" name="fullName" value={updatedBooking.fullName} onChange={handleInputChange} />
        <label>Email:</label>
        <input type="email" name="email" value={updatedBooking.email} onChange={handleInputChange} />
        <label>Phone Number:</label>
        <input type="tel" name="phoneNumber" value={updatedBooking.phoneNumber} onChange={handleInputChange} />
        <label>Event Date:</label>
        <input type="date" name="eventDate" value={updatedBooking.eventDate} onChange={handleInputChange} />
        <label>Event Location:</label>
        <input type="text" name="eventLocation" value={updatedBooking.eventLocation} onChange={handleInputChange} />
        <label>Event Name:</label>
        <input type="text" name="eventName" value={updatedBooking.eventName} onChange={handleInputChange} />
        <button onClick={handleSave}>Save Changes</button>
      </div>
    </div>
  );
};

export default ViewBooking;
