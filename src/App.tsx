import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./component/About";
import CV from "./component/CV";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import { ParticlesProvider } from './component/ParticlesContext';
import Portfolio from "./component/Portfolio";

function App() {
    return (
        <BrowserRouter>
            <ParticlesProvider>
                <div className="flex flex-col min-h-screen">
                    <div className="flex-grow">
                        <Routes>
                            <Route path="/" element={
                                <>
                                    <Hero />
                                    <About />
                                    <Portfolio />
                                </>
                            } />
                            <Route path="/cv" element={<CV />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </ParticlesProvider>
        </BrowserRouter>
    );
}

export default App;
