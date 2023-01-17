import React, { useState } from "react";
import axios from "axios";

const Unfollow = ({ leader_id }) => {
  const [message, setMessage] = useState("");

  const handleUnfollow = async () => {
    try {
      const access_token = localStorage.getItem("access-token");
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      };
      const url = `https://haley-capstone.fly.dev/followerships/${leader_id}`;
      await axios.delete(url, { headers });
      setMessage("Unfollowed");
    } catch (err) {
      setMessage("Error");
    }
  };

  return (
    <>
      <button className="follow-btn" onClick={handleUnfollow}>-</button>
      <p className="unfollowed-msg">{message}</p>
    </>
  );
};

export default Unfollow;
