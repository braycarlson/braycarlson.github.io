import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ParticlesContextType {
    initialized: boolean;
    setInitialized: (initialized: boolean) => void;
}

const ParticlesContext = createContext<ParticlesContextType | undefined>(undefined);

export const useParticles = (): ParticlesContextType => {
    const context = useContext(ParticlesContext);

    if (context === undefined) {
        throw new Error('useParticles must be used within a ParticlesProvider');
    }
    return context;
};

interface ParticlesProviderProps {
    children: ReactNode;
}

export const ParticlesProvider: React.FC<ParticlesProviderProps> = ({ children }) => {
    const [initialized, setInitialized] = useState(false);

    return (
        <ParticlesContext.Provider value={{ initialized, setInitialized }}>
            {children}
        </ParticlesContext.Provider>
    );
};
