import { useEffect } from "react";

export default function Header() {
    useEffect(() => {
        const links = document.querySelectorAll(".navbar a");
        const sections = Array.from(links).map(link => {
            const id = link.getAttribute("href").replace("#", "");
            return document.getElementById(id);
        });

        function handleClick(e) {
            links.forEach(link => link.classList.remove("active"));
            e.target.classList.add("active");
        }

        function handleScroll() {
            const scrollPos = window.scrollY + 100;
            sections.forEach((section, idx) => {
                if (
                    section &&
                    section.offsetTop <= scrollPos &&
                    section.offsetTop + section.offsetHeight > scrollPos
                ) {
                    links.forEach(link => link.classList.remove("active"));
                    links[idx].classList.add("active");
                }
            });
        }

        links.forEach(link => link.addEventListener("click", handleClick));
        window.addEventListener("scroll", handleScroll);

        return () => {
            links.forEach(link => link.removeEventListener("click", handleClick));
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header>
            <a className="logo" href="#home">Portfolio</a>
            <nav className="navbar">
                <a href="#home" style={{ "--i": 1 }} className="active">Home</a>
                <a href="#about" style={{ "--i": 2 }}>About</a>
                <a href="#skill" style={{ "--i": 3 }}>Skill</a>
                <a href="#contact" style={{ "--i": 4 }}>Contact</a>
            </nav>
        </header>
    );
}