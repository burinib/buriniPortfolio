import "./Navbar.css";

const menuOptions = [
  { id: "about", label: "About me" },
  { id: "proyects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "info", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

const Navbar = ({ isScrolling }) => {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : ""}`}>
      <div className="navbarContainer">
        <div className="navbar-logo" onClick={toTheTop}>
          HOME
        </div>
        <ul className="navbarSecond">
          {menuOptions.map((option) => (
            <li key={option.id}>
              <a href={`#${option.id}`}>{option.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
