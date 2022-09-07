import Lottie from "react-lottie";
import { LottieProps } from "react-lottie";
import * as animationData from "../../assets/animationData.json";

import "./loading.css";

const Loading: React.FC = () => {
    const animationProps: LottieProps["options"] = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <div className="loading__wrapper">
            <Lottie options={animationProps} width={400} height={400} />
        </div>
    );
};

export default Loading;
