import { useState } from 'react';
import '../../assets/css/profilepage.css'
import Footer from '../Footer/Footer';
import AdminNav from "./AdminNav"


const AdminProfile = () => {
    const [profileData, setProfileData] = useState({
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '123-456-7890'
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        // Add logic here to save changes, such as making an API call
    };

    return (
        <div className='proc'>
            <AdminNav/>
        <div className="profile-container">
            <h2 className='pro'>Admin Profile</h2>
            <div className="profile-details">
                <div className="profile-field">
                    <label htmlFor="name">Name:</label>
                    {isEditing ? (
                        <input type="text" id="name" name="name" value={profileData.name} onChange={handleInputChange} />
                    ) : (
                        <span>{profileData.name}</span>
                    )}
                </div>
                <div className="profile-field">
                    <label htmlFor="email">Email:</label>
                    {isEditing ? (
                        <input type="email" id="email" name="email" value={profileData.email} onChange={handleInputChange} />
                    ) : (
                        <span>{profileData.email}</span>
                    )}
                </div>
                <div className="profile-field">
                    <label htmlFor="phone">Phone:</label>
                    {isEditing ? (
                        <input type="tel" id="phone" name="phone" value={profileData.phone} onChange={handleInputChange} />
                    ) : (
                        <span>{profileData.phone}</span>
                    )}
                </div>
                {isEditing ? (
                    <button className='pro-but'
                    onClick={handleSaveClick}>Save</button>
                ) : (
                    <button className='pro-but' 
                    onClick={handleEditClick}>Edit</button>
                )}
            </div>
            </div>  
            <Footer />
            </div>
    );
};

export default AdminProfile;
