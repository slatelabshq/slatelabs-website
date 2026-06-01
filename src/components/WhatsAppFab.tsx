import { trackEvent } from "@/lib/analytics";

const WA_URL =
  "https://wa.me/2347026036554?text=Hi%20Slate%20Labs%2C%20I%20want%20to%20discuss%20a%20project";

export function WhatsAppFab() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { location: "fab" })}
      aria-label="Chat with Slate Labs on WhatsApp"
      className="md:hidden fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg active:scale-95 transition-transform"
      style={{ backgroundColor: "#25D366" }}
    >
      <svg
        viewBox="0 0 32 32"
        className="w-7 h-7"
        fill="white"
        aria-hidden="true"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.045 2.264v.114c-.015.99.405 1.976.832 2.834 1.36 2.493 3.864 4.795 6.616 5.798.717.288 2.044.66 2.832.66.99 0 2.176-.59 2.59-1.55.13-.297.187-.622.187-.95 0-.187 0-.348-.044-.516-.115-.387-1.504-.985-1.847-1.146-.215-.115-.402-.215-.616-.215zM16.32 0c-8.696 0-15.747 7.05-15.747 15.747 0 2.79.732 5.51 2.107 7.916L0 32l8.532-2.234a15.61 15.61 0 0 0 7.788 1.974c8.696 0 15.747-7.05 15.747-15.748C32.067 7.052 25.017 0 16.32 0z" />
      </svg>
    </a>
  );
}
