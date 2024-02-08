import { Link } from "react-router-dom";
import logo from "../assets/StudySyn.svg";
import menu from "../assets/Hamburger.svg";

const Navbar = () => {
	return (
		<>
			<header className="max-w-7xl m-auto p-4 flex justify-between items-center">
				{/* Logo */}
				<Link to="/" className="gap-1 flex justify-center items-center">
					<img className="w-7 h-24" src={logo} alt="Logo" />
					<span className="font-bold text-4xl">StudySync</span>
				</Link>

				{/* Navbar */}
				<nav className="gap-6 flex-none md:flex">
					<Link
						to="/"
						className="text-[#718096] text-xl font-semibold hover:text-link-color"
					>
						Home
					</Link>
					<Link
						to="/"
						className="text-[#718096] text-xl font-semibold hover:text-link-color"
					>
						Feature
					</Link>
					<Link
						to="/"
						className="text-[#718096] text-xl font-semibold hover:text-link-color"
					>
						Pricing
					</Link>
					<Link
						to="/"
						className="text-[#718096] text-xl font-semibold hover:text-link-color"
					>
						Blog
					</Link>
					<Link
						to="/"
						className="text-[#718096] text-xl font-semibold hover:text-link-color"
					>
						About
					</Link>
				</nav>

				{/* Contact Us*/}
				<Link
					to="/"
					className="hidden md:block border-none border rounded-md bg-primary-color text-background-color p-2 transform hover:bg-[#5254f8]"
				>
					Contact Us
				</Link>

				<button
					type="button"
					className="hidden border-none rounded-md bg-background-color text-xl font-semibold pt-2 pb-3 hover:block"
				>
					<img className="h-2 w-2" src={menu} alt="menuButton" />
				</button>
			</header>
		</>
	);
};

export default Navbar;
