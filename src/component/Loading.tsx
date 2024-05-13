import React from "react";

interface LoadingScreenProps {
    message: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ message }) => {
    return (
        <div className="flex items-center justify-center h-screen bg-rose-pine-base text-rose-pine-text">
            <div className="text-center pb-20">
                <div className="mb-5 w-20 h-20 mx-auto border-8 border-t-rose-pine-iris border-rose-pine-text rounded-full animate-spin"></div>
                <div className="text-2xl font-medium mt-4">{message}</div>
            </div>
        </div>
    );
};

export default LoadingScreen;
