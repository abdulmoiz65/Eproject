// code to print the navbar and footer .


document.addEventListener("DOMContentLoaded", function () {
    var navbarHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container">
      <div class="logo">
        <img src="./assets/logo.jpg" alt="">
    </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
          </li>
   
          <li class="nav-item dropdown">
          <a class="nav-link " href="#" id="productsDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Products
          </a>
          <div class="dropdown-menu" aria-labelledby="productsDropdown">
              <a class="dropdown-item" href="floppy.html">Floppy disk</a>
              <a class="dropdown-item" href="CD.html">CD Rom's</a>
              <a class="dropdown-item" href="DVD.html">DvD Rom's</a>
              <a class="dropdown-item" href="usb.html">USB Flash Drives</a>
              <a class="dropdown-item" href="SSD.html">Solid State Drives</a>
          </div>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="comparision.html">Compare Products</a>
    </li>
          <li class="nav-item">
            <a class="nav-link " href="ABTus.html">About Us</a>
          </li>
        
          <li class="nav-item">
            <a class="nav-link" href="contactUS.html">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    `;
    var footerHTML = `
    <div class="container">
    <div class="row">

        <div class="col-lg-3 col-md-3 col-sm-6">
            <h3>Company</h3>
            <ul>
                <li><a href="ABTus.html">About Us</a></li>
                <li><a href="">Our services</a></li>
                <li><a href="">Privacy policy</a></li>
                <li><a href="">Reviews</a></li>
            </ul>
        </div>

        <div class="col-lg-3  col-md-3 col-sm-6">
            <h3>Get help</h3>
            <ul>
                <li><a href="">Faqs</a></li>
                <li><a href="">shipping</a></li>
                <li><a href="">return</a></li>
                <li><a href="">Order status</a></li>
                <li><a href="">Payment Options</a></li>
            </ul>
        </div>
  
        <div class="col-lg-3  col-md-3 col-sm-6">
            <h3>Online Shop</h3>
            <ul>
                <li><a href="floppy.html">Floppy disk</a></li>
                <li><a href="DVD.html">DvD Rom's</a></li>
                <li><a href="SSD.html">Solid-state drives</a></li>
                <li><a href="CD.html">compact disk</a></li>
                <li><a href="usb.html">USB flash drives</a></li>
            </ul>
        </div>
   

        <div class="col-lg-3  col-md-3 col-sm-6 px-0">
            <h3>Follow Us</h3>
            <ul id="follow">
                <li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
                <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href=""><i class="fa-brands fa-linkedin"></i></a></li>
            </ul>
        </div>

    </div>
</div>
    `
    document.querySelector("#FOOT").innerHTML = footerHTML;
    document.querySelector("#NAV").innerHTML = navbarHTML;
  });
  