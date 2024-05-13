import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaDownload, FaMinus, FaPlus } from "react-icons/fa";

import cv from "/src/assets/documents/cv.svg";
import downloadable from "/src/assets/documents/cv.pdf";

const SVG = () => {
    const element = useRef<HTMLObjectElement>(null);
    const navigate = useNavigate();
    const [baseScale, setBaseScale] = useState(1.0);
    const [manualScale, setManualScale] = useState(1.0);
    const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
    const [opacity, setOpacity] = useState(false);

    useEffect(() => {
        const updateScale = () => {
            const width = window.innerWidth;

            if (width < 1200) {
                const factor = width / 800;
                setBaseScale(factor);
                setManualScale(1.3);
            } else {
                setBaseScale(1.0);
                setManualScale(2.0);
            }
        };

        window.addEventListener("resize", updateScale);
        updateScale();

        return () => {
            window.removeEventListener("resize", updateScale);
        };
    }, []);

    useEffect(() => {
        const load = () => {
            const current = element.current?.contentDocument;

            if (current) {
                const svg = current.querySelector("svg");

                if (svg) {
                    setDimensions({
                        width: svg.viewBox.baseVal.width,
                        height: svg.viewBox.baseVal.height
                    });

                    svg.querySelectorAll("path").forEach((path: SVGPathElement) => path.style.fill = "#e0def4");
                    svg.querySelectorAll("tspan").forEach((tspan: SVGTSpanElement) => tspan.style.fill = "#e0def4");
                    svg.querySelectorAll("text").forEach((text: SVGTextElement) => text.style.fill = "#e0def4");
                    svg.querySelectorAll("rect").forEach((rect: SVGRectElement) => rect.style.fill = "#e0def4");
                }
            }

            setOpacity(true);
        };

        element.current?.addEventListener("load", load);

        return () => {
            element.current?.removeEventListener("load", load);
        };
    }, []);

    const zoomIn = () => setManualScale(scale => Math.min(3.0, scale + 0.2));
    const zoomOut = () => setManualScale(scale => Math.max(1.0, scale - 0.2));

    const back = () => navigate(-1);
    const download = () => window.location.href = downloadable;

    return (
        <div id="cv" className="py-8 bg-rose-pine-surface">
            <div className="fixed top-0 left-0 right-0 px-0 bg-rose-pine-base text-rose-pine-text flex justify-between items-center p-2 z-10">
                <button onClick={back} className="hover:text-rose-pine-iris text-rose-pine-text py-2 px-4 rounded">
                    <FaArrowLeft size={20} />
                </button>

                <div className="flex items-center">
                    <button onClick={zoomOut} className="hover:text-rose-pine-iris text-rose-pine-text py-2 px-4 rounded">
                        <FaMinus size={20} />
                    </button>
                    <button onClick={zoomIn} className="hover:text-rose-pine-iris text-rose-pine-text py-2 px-4 rounded">
                        <FaPlus size={20} />
                    </button>
                </div>

                <button onClick={download} className="hover:text-rose-pine-iris text-rose-pine-text py-2 px-4 rounded">
                    <FaDownload size={20} />
                </button>
            </div>

            <div className={`select-none relative mx-auto mt-10 mb-2 md:mt-20 md:mb-20 overflow-hidden transition-opacity duration-500 ease-in-out ${opacity ? "opacity-100" : "opacity-0"}`} style={{
                width: `${dimensions.width * baseScale * manualScale}px`,
                height: `${dimensions.height * baseScale * manualScale}px`
            }}>
                <object type="image/svg+xml" style={{ width: "100%", height: "100%" }} data={cv} ref={element}>SVG not supported.</object>
            </div>
        </div>
    );
};

export default SVG;
