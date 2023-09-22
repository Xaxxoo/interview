import Post from "../post/Post";
import Share from "../share/Share";
import { useState, useEffect } from "react";

import "./feed.css";

export default function Feed({Post}) {
  const [users, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      fetch("https://randomuser.me/api/")
        .then((response) => response.json())
        .then((users) => console.log(users));
    };

   setInterval(() => {
      // fetchUsers();
    }, 5000);
  }, []);
  return (
    <div className="feed">
      <div className="feedWrapper">
        
        <Share />
        {users.map((user) => (
          <Post key={user.id} post={user} />
        ))}
      </div>
    </div>
  );
}