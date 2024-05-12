import { Link } from "react-router-dom";
import { FaFileAlt, FaLinkedinIn, FaGithub, FaBehance, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    const getUser = () => "braydencarlson";
    const getHost = () => "gmail.com";

    const onClick = () => {
        const user = getUser();
        const host = getHost();
        window.location.href = `mailto:${user}@${host}`;
    };

    return (
        <footer className="bg-rose-pine-base text-rose-pine-text py-8 px-10 w-full">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-6">
                    <p className="text-xl">© 2024 Brayden Carlson. All rights reserved.</p>
                </div>

                <div className="md:col-span-6 flex justify-end items-center space-x-6">
                    <Link to="/cv" className="text-rose-pine-iris hover:text-rose-pine-iris-lighter transition duration-300">
                        <FaFileAlt size={20} />
                    </Link>
                    <button onClick={onClick} className="text-rose-pine-iris hover:text-rose-pine-iris-lighter transition duration-300">
                        <FaEnvelope size={20} />
                    </button>
                    <a href="https://linkedin.com/in/braycarlson" className="text-rose-pine-iris hover:text-rose-pine-iris-lighter transition duration-300">
                        <FaLinkedinIn size={24} />
                    </a>
                    <a href="https://github.com/braycarlson" className="text-rose-pine-iris hover:text-rose-pine-iris-lighter transition duration-300">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://behance.net/braycarlson" className="text-rose-pine-iris hover:text-rose-pine-iris-lighter transition duration-300">
                        <FaBehance size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
