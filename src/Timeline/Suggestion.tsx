import { Avatar } from "@mui/material";
import "../Timeline/Suggestion.css";

const suggestionData = [
  { username: "redian_", relation: "New to Instagram", avatar: "R" },
  { username: "redian_", relation: "New to Instagram", avatar: "R" },
  { username: "redian_", relation: "New to Instagram", avatar: "R" },
  { username: "redian_", relation: "New to Instagram", avatar: "R" },
];

function SuggestionItem({ username, relation, avatar }) {
  return (
    <div className="suggestions__username">
      <div className="username__left">
        <span className="avatar">
          <Avatar>{avatar}</Avatar>
        </span>
        <div className="username__info">
          <span className="username">{username}</span>
          <span className="relation">{relation}</span>
        </div>
      </div>
      <button className="follow__button">Follow</button>
    </div>
  );
}

function Suggestion() {
  return (
    <div className="suggestions">
      <div className="suggestions__title">Suggestions for you</div>
      <button className="seeall_button">See All</button>
      <div className="suggestions__usernames">
        {suggestionData.map((item, index) => (
          <SuggestionItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Suggestion;