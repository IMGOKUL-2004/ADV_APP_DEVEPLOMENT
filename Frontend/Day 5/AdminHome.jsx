// import React from 'react'

// import AdminDashboard from "./AdminDashboard"
import AdminDashboard from "./AdminDashboard"
import AdminNav from "./AdminNav"
import '../../assets/css/admindashboard.css'

function AdminHome() {
  return (
    <div>
    <div>
        <AdminNav/>
        <div className="adh">

        <AdminDashboard/>
        </div>
    </div>
    </div>
  )
}

export default AdminHome