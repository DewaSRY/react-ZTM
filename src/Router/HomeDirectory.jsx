import { CATAGORIES } from "../Assets/CATAGORIES";
import DirectoriesItem from "../Component/HomeDirectory/Directory-item";
import "./HomeDirectory.styles.scss";

export default function HomeDirectory() {
  return (
    <div className="Directories-container">
      {CATAGORIES.map((category) => (
        <DirectoriesItem key={category.id} category={category} />
      ))}
    </div>
  );
}
