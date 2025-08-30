/**
 * @component ScrollToTop
 * @description A floating button that scrolls to the top of the page when clicked.
 */
import { useState, useEffect } from "react";
import "./ScrollToTop.css";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Enhanced scroll to top with smooth animation
  const scrollToTop = () => {
    // Add a small delay for better UX
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }, 100);
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);



  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top"
          aria-label="Scroll to top"
          title="Scroll to top"
          data-tooltip="Scroll to top"
        >
          <svg 
            className="arrow-icon" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
          <span className="sr-only">Scroll to top</span>
        </button>
      )}
    </>
  );
}
