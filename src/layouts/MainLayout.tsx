import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import ChatSupport from "@/components/ChatSupport";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VideoModal from "@/components/ui/VideoModal";
import { scrollToTop } from "@/lib/scroll";

const MainLayout = () => {
  const [showButton, setShowButton] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Outlet context={{ openVideo: () => setIsVideoOpen(true) }} />
      </main>
      <Footer />
      {isVideoOpen && <VideoModal isOpen={isVideoOpen} setIsOpen={setIsVideoOpen} />}
      {!isVideoOpen && (
        <div
          className="fixed right-6 z-50 flex flex-col items-end gap-4"
          style={{ bottom: showButton ? "5rem" : "1.5rem" }}
        >
          <ChatSupport />
          {showButton && (
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-secondary text-white shadow-lg hover:bg-primary/90 transition duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default MainLayout;
