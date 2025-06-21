function sendToWhatsApp(e) {
  e.preventDefault();
  const message = document.getElementById('whatsapp-message').value;
  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = "2349012737241"; // Your actual number
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, '_blank');
}