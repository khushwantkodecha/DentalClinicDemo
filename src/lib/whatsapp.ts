export const WHATSAPP_CONFIG = {
    // Use international format without '+' or spaces. Example: 15551234567
    phoneNumber: "15551234567",
    defaultMessage: "Hello, I would like to book a dental appointment. Please share available timings.",
};

export const createWhatsAppLink = (message?: string) => {
    const text = encodeURIComponent(message || WHATSAPP_CONFIG.defaultMessage);
    return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${text}`;
};
