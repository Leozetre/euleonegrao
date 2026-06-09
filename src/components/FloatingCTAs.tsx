import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { handleTrackedClick } from "@/lib/tracking";

const FloatingCTAs = () => {
  const [visible, setVisible] = useState(false);
  const [isLovableDomain, setIsLovableDomain] = useState(false);

  useEffect(() => {
    setIsLovableDomain(window.location.hostname.includes("lovable.app"));
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappUrl = "https://wa.me/5512997289339?text=Ol%C3%A1!%20Tenho%20interesse%20na%20sua%20assessoria%20de%20marketing.%20Pode%20me%20ajudar%3F";

  return (
    <AnimatePresence>
      {visible && (
        <div key="floating-ctas">
          {/* Mobile: sticky bottom bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed left-0 right-0 z-50 px-3 pt-2"
            style={{
              bottom: isLovableDomain ? "72px" : "0px",
              paddingBottom: isLovableDomain ? "8px" : "12px",
              background: "linear-gradient(to top, hsl(var(--background) / 0.95), transparent)",
            }}
          >
            <button
              onClick={() => handleTrackedClick(whatsappUrl, "primary_whatsapp_click", "floating")}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-primary-foreground"
              style={{
                background: "linear-gradient(135deg, hsl(168 100% 33%), hsl(168 80% 28%))",
                boxShadow: "0 6px 20px -4px hsl(168 100% 33% / 0.4)",
              }}
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </button>
          </motion.div>

          {/* Desktop: floating FAB */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="hidden lg:flex fixed bottom-6 right-6 z-50"
          >
            <button
              onClick={() => handleTrackedClick(whatsappUrl, "primary_whatsapp_click", "floating")}
              className="h-14 w-14 rounded-full flex items-center justify-center text-primary-foreground shadow-xl transition-transform hover:scale-110 active:scale-95"
              style={{
                background: "linear-gradient(135deg, hsl(168 100% 33%), hsl(168 80% 28%))",
                boxShadow: "0 8px 30px -6px hsl(168 100% 33% / 0.5)",
              }}
              aria-label="WhatsApp"
            >
              <MessageCircle size={24} />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTAs;
