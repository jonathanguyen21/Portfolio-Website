function NavBar() {
  function ScrollAbout() {
    const element = document.getElementById("about--section");
    element.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  function ScrollProjects() {
    const element = document.getElementById("projects--section");
    element.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  function ScrollContact() {
    const element = document.getElementById("contact");
    element.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  return (
    <section className="navbar">
      <ul className="navbar__list">
        <a onClick={ScrollAbout} className="navbar__list__item">
          About
        </a>
        <a onClick={ScrollProjects} className="navbar__list__item">
          Projects
        </a>
        <a onClick={ScrollContact} className="navbar__list__item">
          Contact
        </a>
        <a
          href="https://drive.google.com/file/d/1qngUOGtAuBKxPS-vIkf-3ic_VC_BRwfb/view?usp=sharing"
          target="_blank"
          className="navbar__list__item"
        >
          Resume
        </a>
      </ul>
    </section>
  );
}

export default NavBar;
