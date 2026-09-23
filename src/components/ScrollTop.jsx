import {useState, useEffect} from "react";

function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleVisible = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleVisible);
    return () => window.removeEventListener("scroll", handleVisible);
  }, []);
  
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    if (window.location.pathname !== "/") {
      window.history.replaceState(null, "", "/");
    }
  }
  
  return (
    <button
      type="button"
      onClick={ScrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 p-2.5 md:p-3 rounded-full border radius-sm border-mono-border bg-mono-bg/80 backdrop-blur-sm text-mono-primary shadow-lg hover:border-mono-secondary hover:bg-mono-surface transition-all duration-300 transform active:scale-95 ${isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  )
}
export default ScrollTop;