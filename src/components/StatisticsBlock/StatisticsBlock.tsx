import { getStatisticsIcon, statisticsInfo } from "./helper";
import "./StatisticsBlock.scss";

export const StatisticsBlock: React.FC = () => {
  return (
    <div className="statistics-wrapper">
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="statistics-blocks">
        {statisticsInfo.map((info) => (
          <div className="statistics-block" key={info.id}>
            <div className="statistics-block-icon">
              {getStatisticsIcon(info.icon)}
            </div>
            <h3>{info.title}</h3>
            <p>{info.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
