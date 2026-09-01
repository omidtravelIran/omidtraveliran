const WHATSAPP_NUMBER = "989397162609";
const messages = {
  default: "مرحباً، أريد الاستفسار عن برامج السياحة في إيران.",
  currency: "مرحباً، أريد الاستفسار عن خدمة صرافة العملات.",
  hotel: "مرحباً، أريد الاستفسار عن حجز فندق في إيران.",
  villa: "مرحباً، أريد الاستفسار عن حجز فيلا أو كوخ في إيران.",
  car: "مرحباً، أريد الاستفسار عن حجز سيارة وسائق في إيران."
};
document.querySelectorAll("[data-wa]").forEach(a => {
  const key = a.dataset.waService || "default";
  a.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messages[key] || messages.default)}`;
  a.target = "_blank";
  a.rel = "noopener";
});
