import { SiWhatsapp } from "react-icons/si";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/61488841883"
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="whatsapp.button"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-card-lg transition-transform hover:scale-110 active:scale-95"
      style={{ backgroundColor: "#25D366" }}
      aria-label="Contact Tru Bond Back Cleaning Perth on WhatsApp"
      title="Chat on WhatsApp — 0488 841 883"
    >
      <SiWhatsapp className="w-7 h-7 text-white" aria-hidden="true" />
    </a>
  );
}
