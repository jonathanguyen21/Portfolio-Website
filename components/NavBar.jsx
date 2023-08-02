function NavBar() {
  function ScrollAbout() {
    const element = document.getElementById("about--section");
    element.scrollIntoView({ behavior: "smooth" });
  }

  function ScrollProjects() {
    const element = document.getElementById("projects--section");
    element.scrollIntoView({ behavior: "smooth" });
  }

  function ScrollContact() {
    const element = document.getElementById("contact");
    element.scrollIntoView({ behavior: "smooth" });
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
          href="https://docs.google.com/document/d/1tnCklbnH17hHW5gAsIj1t1LGo5UsfNXw/edit?usp=sharing&ouid=106471855305774167176&rtpof=true&sd=true"
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
