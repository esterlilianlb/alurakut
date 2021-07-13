import { useState, useEffect } from "react";
import { ProfileRelationsBoxWrapper } from '../components/ProfileRelations';

function GetFriends({ githubUser }) {
  const [follower, setFollower] = useState([]);

  useEffect(async () => {
    const url = `https://api.github.com/users/${githubUser}/followers`;
    const response = await fetch(url);
    setFollower(await response.json());
  }, []);

  const followers = follower.slice(0, 9);

  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">Amigos ({follower.length})</h2>

      <ul>
        {followers.map((follower) => {
          return (
            <li key={follower.id}>
              <a href={follower.html_url}>
                <img
                  src={`https://github.com/${follower.login}.png`}
                  style={{ borderRadius: "8px" }}
                />
                <span>{follower.login}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </ProfileRelationsBoxWrapper>
  );
}
export default GetFriends;