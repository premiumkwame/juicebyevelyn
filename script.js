
document.addEventListener('DOMContentLoaded', function () {
    const buyButtons = document.querySelectorAll(".buy-now-btn");
    const purchaseForm = document.getElementById("purchaseForm");
    const thankYou = document.getElementById("thankYou");
    const selectedProductImage = document.getElementById("selectedProductImage");
    const selectedProductName = document.getElementById("selectedProductName");
    const selectedProductPrice = document.getElementById("selectedProductPrice");
    const checkoutForm = document.getElementById("checkoutForm");

    let selectedProduct = '';
    let selectedPrice = '';
    let selectedImage = '';

    //Buy Now buttons
    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
          selectedProduct = this.getAttribute("data-product");
          selectedPrice = this.getAttribute("data-price");
          selectedImage = this.getAttribute("data-image");

          //update form with product details
          selectedProductImage.src = selectedImage;
          selectedProductImage.alt = selectedProduct;
          selectedProductName.textContent = selectedProduct;
          selectedProductPrice.textContent = `Price: $${selectedPrice}`;

          //Show form
          purchaseForm.style.display = 'block';
          purchaseForm.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Handle form submission
    checkoutForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;

        const subject = `order for: ${selectedProduct}`;
        const body = `
          Hello Juice by Evelyn store,

          I would like to place an order for the following items;

          Product: ${selectedProduct}
          Price: ${selectedPrice}


          My details:
          - Name: ${name}
          - Email: ${email}
          - Shipping Address: ${address}
          - Phone: ${phone}

          Please process my order and let me know the next steps.
        `.trim();

        const mailtoLink = `mailto:kransly007@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
     
        window.location.href = mailtoLink;

        purchaseForm.style.display = 'none';
        thankYou.style.display = 'block';
        thankYou.scrollIntoView({ behavior: "smooth" });
    });
 });        

 // Footer
 // Dynamic Year
 document.getElementById('year').textContent = new Date().getFullYear();

// ============> Cookies <================
 const banner = document.getElementById("cookie-banner");
 const acceptBtn = document.getElementById("accept-btn");
 const declineBtn = document.getElementById("decline-btn");

//  Check if user has already made a choice
  const consent = localStorage.getItem("cookieConsent");

  if (consent === "accepted") {
    banner.style.display = "none";
    loadAnalytics(); // Load analytics only if accepted 
  } else if (consent === "declined") {
    banner.style.display = 'none';
  }

  // Accept cookies
  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "accepted");
    banner.style.display = "none";
    loadAnalytics(); // IMPORTANT
  });

  // Decline cookies
  declineBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "declined");
    banner.style.display = "none";
  });

  // on page load, check past choise 

  window.onload = function() {

    if(localStorage.getItem("cookiesAccepted")==="true"){
      loadAnalytics();
      document.getElementById("cookie-banner").style.display="none";

    } else if (localStorage.getItem("cookiesAccepted")==="false"){
      document.getElementById("cookie-banner").style.display="none";
    }
  }


