import { Link } from "react-router-dom";
import "./Directory-item.scss";

export default function DirectoriesItem({ category }) {
  const { imageUrl, title } = category;
  return (
    <div className="directory-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <Link to={`shop/${title}`}>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Link>
      </div>
    </div>
  );
}
