document.addEventListener("DOMContentLoaded", function () {
  
    const posForm = document.getElementById('pos-form');

    posForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent page reload

       
        const product = document.getElementById('product').value;
        const quantity = document.getElementById('quantity').value;
        const price = document.getElementById('price').value;
        const paymentMethod = document.getElementById('payment-method').value;

        if (product && quantity && price) {
          
            alert(Sale Processed: \nProduct: ${product}\nQuantity: ${quantity}\nPrice: $${price}\nPayment Method: ${paymentMethod});
        } else {
            alert('Please fill in all fields.');
        }

    
        posForm.reset();
    });

   
    const statBoxes = document.querySelectorAll('.stat-box');
    let delay = 0;

    statBoxes.forEach((box) => {
        setTimeout(() => {
            box.style.opacity = '1';
            box.style.transform = 'translateY(0)';
        }, delay);
        delay += 500;
    });

   
    const advertTitle = document.getElementById('advert-title');
    const advertText = document.getElementById('advert-text');

    
    const adverts = [
        { title: "Special Offer!", text: "Get 20% off on all products. Limited time only." },
        { title: "Buy One Get One Free!", text: "Applies to selected items. Offer ends soon!" },
        { title: "Clearance Sale!", text: "Up to 50% off on clearance items. Don't miss out!" },
        { title: "Fresh Arrivals!", text: "New stock of fresh produce now available!" },
        { title: "Seasonal Discount!", text: "Save 15% on winter clothing this month." },
        { title: "Loyalty Program!", text: "Join our loyalty program and earn rewards." },
        { title: "Weekly Deals!", text: "Check out our weekly deals on electronics." },
        { title: "Gift Cards!", text: "Buy gift cards for friends and family. Available in-store and online." }
    ];

    let currentAdvertIndex = 0;

    function changeAdvert() {
        currentAdvertIndex = (currentAdvertIndex + 1) % adverts.length; 
        advertTitle.textContent = adverts[currentAdvertIndex].title;
        advertText.textContent = adverts[currentAdvertIndex].text;
    }

   
    setInterval(changeAdvert, 5000);
});