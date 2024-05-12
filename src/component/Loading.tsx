import { useEffect, useState } from "react";

interface LoadingScreenProps {
    estimated: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ estimated }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = estimated / 20;
        const increment = 100 / 20;

        const interval = setInterval(() => {
            setProgress((progress) => {
                const time = progress + increment;

                if (time >= 100) {
                    clearInterval(interval);
                    return 100;
                }

                return time;
            });
        }, duration);

        return () => clearInterval(interval);
    }, [estimated]);

    return (
        <div className="flex items-center justify-center h-screen bg-rose-pine-base text-rose-pine-text">
            <div className="text-center w-1/2 mx-auto">
                <div className="text-2xl font-work">Loading...</div>

                <div className="w-full bg-rose-pine-overlay-lighter mt-6 p-1">
                    <div style={{ width: `${progress}%` }} className="font-work bg-rose-pine-iris transition-width duration-300 h-3"></div>
                </div>

                <div className="text-lg font-medium text-rose-pine-iris mt-4">{progress}%</div>
            </div>
        </div>
    );
};

export default LoadingScreen;
