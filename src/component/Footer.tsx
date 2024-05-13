import { Link } from "react-router-dom";
import { FaBehance, FaEnvelope, FaFileAlt, FaGithub, FaLinkedinIn } from "react-icons/fa";

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
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center md:grid md:grid-cols-12 md:gap-4">
                <div className="md:col-span-8 lg:col-span-6 md:text-left">
                    <p className="md:text-xl text-lg mb-4 md:mb-0">© 2024 Brayden Carlson. All rights reserved.</p>
                </div>

                <div className="md:col-span-4 lg:col-span-6 flex flex-wrap justify-center md:justify-end items-center space-x-6">
                    <Link to="/cv" className="text-rose-pine-iris hover:text-rose-pine-love transition duration-300">
                        <FaFileAlt size={20} />
                    </Link>
                    <button onClick={onClick} className="text-rose-pine-iris hover:text-rose-pine-love transition duration-300">
                        <FaEnvelope size={20} />
                    </button>
                    <a href="https://linkedin.com/in/braycarlson" className="text-rose-pine-iris hover:text-rose-pine-love transition duration-300">
                        <FaLinkedinIn size={24} />
                    </a>
                    <a href="https://github.com/braycarlson" className="text-rose-pine-iris hover:text-rose-pine-love transition duration-300">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://behance.net/braycarlson" className="text-rose-pine-iris hover:text-rose-pine-love transition duration-300">
                        <FaBehance size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
