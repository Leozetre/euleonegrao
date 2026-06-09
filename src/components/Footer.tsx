import minimalMarketingLogo from "@/assets/minimal-marketing-logo.png";
import { MessageCircle } from "lucide-react";
import { handleTrackedClick } from "@/lib/tracking";

const Footer = () => {
  return (
    <footer className="mt-10 pb-8 flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="text-sm font-semibold text-foreground">Pronto para começar?</p>
        <button
          onClick={() =>
            handleTrackedClick(
              "https://wa.me/5512997289339?text=Ol%C3%A1!%20Tenho%20interesse%20na%20sua%20assessoria%20de%20marketing.%20Pode%20me%20ajudar%3F",
              "footer_whatsapp_click",
              "footer"
            )
          }
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-primary-foreground transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          style={{
            background: "linear-gradient(135deg, hsl(168 100% 33%), hsl(168 80% 28%))",
            boxShadow: "0 6px 24px -6px hsl(168 100% 33% / 0.35)",
          }}
        >
          <MessageCircle size={16} />
          Falar no WhatsApp
        </button>
      </div>
      <img
        src={minimalMarketingLogo}
        alt="Minimal Marketing"
        className="h-6 opacity-50 hover:opacity-80 transition-opacity duration-300"
      />
    </footer>
  );
};

export default Footer;
