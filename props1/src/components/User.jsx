import React from 'react'

const User = (props) => {
    return (
        <div>
            <div className="card">
        <div className="top-section">
          <div className="left">
            <img
              src={props.img}
              alt="profile"
              className="profile-img"
            />

            <span className="status">{props.btn}</span>
          </div>

          <div className="center">
            <h2>{props.name}</h2>
            <h4>{props.detail}</h4>
            <p>{props.sdeatil}</p>

            <div className="stats">
              <div>
                <h3>{props.project}</h3>
                <span>Projects</span>
              </div>

              <div>
                <h3>{props.following}</h3>
                <span>Following</span>
              </div>

              <div>
                <h3>{props.followers}</h3>
                <span>Followers</span>
              </div>
            </div>
          </div>

          <button className="edit-btn">Edit</button>
        </div>

        <div className="bottom-section">
          <button>Follow</button>
          <button>Message</button>
          <button>Share</button>
        </div>
      </div>
      
        </div>
    )
}

export default User
