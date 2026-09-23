import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  const scrollToContact = (e) => {
    e.preventDefault();
    navigate("/contact");
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className={"min-h-[80vh] md:min-h-screen flex flex-col justify-center p-8 md:p-6 lg:p-24 border-b border-mono-border"}>
      <h1 className=" text-7xl md:text-7xl lg:text-8xl font-medium tracking-tight text-mono-primary mb-4 md:mb-6">
        Pav Khemerak
      </h1>
      <h2 className="text-xl md:text-2xl font-light text-mono-secondary tracking-wide">
        Full-Stack & Cloud Engineer
      </h2>
      <div className="flex gap-4">
        <a
          href="#contact"
          onClick={scrollToContact}
          className="w-fit mt-6 px-3 py-1 text-sm font-medium border border-mono-border bg-mono-surface text-mono-primary hover:border-mono-secondary hover:text-mono-primary transition-colors duration-200 cursor-pointer"
        >
          Contact
        </a>
        <a
          href="https://drive.google.com/file/d/12XH6tA7RzNHoujgL56qJg5HGLRHPoUjc/view?usp=sharing"
          className="w-fit mt-6 px-3 py-1 text-sm font-medium border border-mono-border bg-mono-surface text-mono-primary hover:border-mono-secondary hover:text-mono-primary transition-colors duration-200 cursor-pointer"
        >
          Resume
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
