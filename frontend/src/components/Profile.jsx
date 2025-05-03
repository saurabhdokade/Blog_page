import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Profile.css'

const Profile = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState('')


    const fetchData = () => {
        axios.post('http://localhost:3000/user/profile', {}, { withCredentials: true })
            .then((res) => {
                setLoading(false)
                setData(res.data.data)
                console.log("User data fetched", res);
            })
            .catch((err) => {
                console.log("Error while fetch data", err)
                setLoading(false)
            })
    }

    console.log("data", data)

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
          <p className="loading-message">{loading && "Data is loading..."}</p>
          <div className="profile-container">
            <div className="profile-content">
              <h2 className="profile-title">Name: {data.name}</h2>
              <p className="profile-text">Email: {data.email}</p>
              <p className="profile-text">ID: {data.id}</p>
            </div>
          </div>
        </div>
      );
      
}

export default Profile