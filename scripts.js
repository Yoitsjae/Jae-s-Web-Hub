document.getElementById('contact-button').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'flex';
});

document.getElementById('email-link').addEventListener('click', function() {
  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  window.location.href = `mailto:jaewebhub896@gmail.com?subject=Contact from ${name} ${surname}&body=Name: ${name} ${surname}%0AEmail: ${email}%0APhone: ${phone}`;
});

document.getElementById('whatsapp-call').addEventListener('click', function() {
  const phone = '+27621180490';
  navigator.clipboard.writeText(phone);
  alert(`Phone number copied: ${phone}`);
});

// Close the popup when the X button is clicked
document.getElementById('close-popup').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});
