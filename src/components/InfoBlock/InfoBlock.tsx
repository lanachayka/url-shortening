import { Working } from "../Icons";
import "./InfoBlock.scss";

export const InfoBlock: React.FC = () => {
  return (
    <div className="info-block-container">
      <div className="info-block-description">
        <h1 className="info-block-title">More than just shorter links</h1>
        <p className="info-block-text">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
      </div>
      <Working />
    </div>
  );
};
