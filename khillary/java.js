<script>
document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents the page from refreshing

    // 1. REPLACE THIS WITH YOUR REAL WHATSAPP NUMBER (with Uganda country code 256, no plus sign)
    const whatsappNumber = "256700000000"; 

    // 2. Grab the information the user typed in
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const interest = document.getElementById('interest').value;

    // 3. Format the message into a professional layout
    const message = `Hello Verv Grubs! I would like to request a quote.%0A%0A` +
                    `*Name:* ${encodeURIComponent(name)}%0A` +
                    `*Phone:* ${encodeURIComponent(phone)}%0A` +
                    `*Interested In:* ${encodeURIComponent(interest)}`;

    // 4. Open the WhatsApp link in a clean new tab
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
});
</script>