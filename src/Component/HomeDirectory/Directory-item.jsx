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
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}
