import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaDownload, FaPlus, FaMinus, FaArrowLeft } from "react-icons/fa";
import document from "/src/assets/documents/cv.svg"
import downloadable from "/src/assets/documents/cv.pdf"

const SVG = () => {
    const element = useRef<HTMLObjectElement>(null);
    const navigate = useNavigate();
    const [scale, setScale] = useState(2.0);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const object = element.current;

        const setColor = (svg: SVGSVGElement) => {
            svg.querySelectorAll('path').forEach((path: SVGPathElement) => path.style.fill = "#e0def4");
            svg.querySelectorAll('tspan').forEach((tspan: SVGTSpanElement) => tspan.style.fill = "#e0def4");
            svg.querySelectorAll('text').forEach((text: SVGTextElement) => text.style.fill = "#e0def4");
            svg.querySelectorAll('rect').forEach((rect: SVGRectElement) => rect.style.fill = "#e0def4");
        };

        const setSize = (svg: SVGSVGElement) => {
            if (!dimensions.width || !dimensions.height) {
                setDimensions({ width: svg.viewBox.baseVal.width, height: svg.viewBox.baseVal.height });
            }
        };

        const onLoad = () => {
            if (object) {
                const cv = object.contentDocument;

                if (cv) {
                    const svg = cv.querySelector("svg");

                    if (svg) {
                        setSize(svg);
                        setColor(svg);
                    }
                }
            }
        };

        if (object) {
            object.addEventListener("load", onLoad);
        }

        return () => {
            if (object) {
                object.removeEventListener("load", onLoad);
            }
        };
    }, [scale, dimensions]);

    const zoomIn = () => setScale(scale => Math.min(3.0, parseFloat((scale + 0.20).toFixed(2))));
    const zoomOut = () => setScale(scale => Math.max(1.0, parseFloat((scale - 0.20).toFixed(2))));

    const back = () => navigate(-1);
    const download = () => window.location.href = downloadable;

    return (
        <div id="cv" className="py-8 bg-rose-pine-surface">
            <div className="fixed top-0 left-0 right-0 bg-rose-pine-base text-rose-pine-text flex justify-between items-center p-4 z-10">
                <button onClick={back} className="hover:text-rose-pine-love text-rose-pine-text py-2 px-4 rounded">
                    <FaArrowLeft size={20} />
                </button>

                <div className="flex items-center">
                    <button onClick={zoomOut} className="hover:text-rose-pine-love text-rose-pine-text py-2 px-4 rounded">
                        <FaMinus size={20} />
                    </button>
                    <span className="mx-2 text-lg">Scale: {(scale - 1).toFixed(2)}</span>
                    <button onClick={zoomIn} className="hover:text-rose-pine-love text-rose-pine-text py-2 px-4 rounded">
                        <FaPlus size={20} />
                    </button>
                </div>

                <button onClick={download} className="hover:text-rose-pine-love text-rose-pine-text py-2 px-4 rounded">
                    <FaDownload size={20} />
                </button>
            </div>

            <div className="overflow-hidden relative mx-auto mt-20 mb-20" style={{
                width: `${dimensions.width * scale}px`,
                height: `${dimensions.height * scale}px`
            }}>
                <object type="image/svg+xml" style={{ width: "100%", height: "100%" }} data={document} ref={element}>SVG not supported.</object>
            </div>
        </div>
    );
};

export default SVG;
