import { Button } from "../Button/Button";
import "./StartedLink.scss";

export const StartedLink: React.FC = () => {
    const clickHandler = () => {
        window.scroll(200,200);
    }
    return (
        <div className="started-link-wrapper">
            <h2>Boost your links today</h2>
            <Button type="button" text="Get Started" onClick={clickHandler}/>
        </div>
    )
}