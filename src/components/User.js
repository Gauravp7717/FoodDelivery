import React, { useEffect, useState } from "react";

const User = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const data = await fetch("https://api.github.com/users/Gauravp7717");
    const json = await data.json();
    console.log(json);
    setUserData(json);
  };

  const {
    avatar_url,
    name,
    location,
    followers,
    following,
    html_url,
    twitter_username,
    public_repos,
  } = userData;

  return (
    <div className="user-container">
      <img src={avatar_url} alt={name} className="avatar" />
      <h1 className="name">{name}</h1>
      <p className="location">{location || "Location not available"}</p>

      <div className="stats">
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
        <p>Repositories: {public_repos}</p>
      </div>

      <div className="links">
        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <i className="fa fa-github"></i> GitHub Profile
        </a>
        {twitter_username && (
          <a
            href={`https://twitter.com/${twitter_username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <i className="fa fa-twitter"></i> Twitter
          </a>
        )}
        <a href="#" className="link">
          <i className="fa fa-instagram"></i> Instagram
        </a>
        <a href="https://www.youtube.com/@gauravdg7" className="link">
          <i className="fa fa-youtube"></i> YouTube
        </a>
      </div>
    </div>
  );
};

export default User;
