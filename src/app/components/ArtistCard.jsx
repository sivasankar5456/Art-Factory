import React from 'react'

const ArtistCard = ({item}) => {
  
  return (
    <div className='artist-card'>
      <div className="shady-image"></div>
      <img src={item.coverPhoto} alt="image1" className='artist-background-img'/>
      <div className="user-text-image-container">
      <div className='profile-image-wrapper'>
      <img src={item.profilePic} alt="profileImage1" className='artist-profile-img' />
      <div className="online"></div>
      </div>
      <div>
      <p>{item.name}</p>
      <span>{item.text}</span>
      </div>
      </div>
    </div>
  )
}

export default ArtistCard
