const footerHTML = `
  <footer class="section-footer">
    <div class="footer-container container">
      <div class="content_1">
        <img src="public/jhalogofooter.png" alt="logo" />
        <p>
          Welcome to Jha EcomStore, <br />
          your ultimate destination for
          <br />
          cutting-edge gadgets!
        </p>
        <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
      </div>
      <div class="content_2">
        <h4>SHOPPING</h4>
        <a href="#">Computer Store</a>
        <a href="#">Laptop Store</a>
        <a href="#">Accessories</a>
        <a href="#">Sales & Discount</a>
      </div>
      <div class="content_3">
        <h4>Experience</h4>
        <a href="./contact.html">Contact Us</a>
        <a href="" target="_blank"> Payment Method </a>
        <a href="" target="_blank"> Delivery </a>
        <a href="" target="_blank"> Return and Exchange </a>
      </div>
      <div class="content_4">
        <h4>NEWSLETTER</h4>
        <p>
          Be the first to know about new
          <br />
          arrivals, sales & promos!
        </p>
        <form action="#" >
        <div class="f-mail">
          <input type="email" placeholder="Your Email" name="email"
                  id="email"
                  required
                  autocomplete="off" />
           
          
          
        </div>
        <div class="footercontact-3">
              <button type="submit" class=" footercontact-btn">
                Submit
              </button>
            </div>
         </form>
         
        
      </div>
    </div>
    <div class="f-design">
      <div class="f-design-txt">
        <p>Design and Code by Apurva Kumar</p>
      </div>
    </div>
  </footer>`;

const footerElem = document.querySelector(".section-footer");
footerElem.insertAdjacentHTML("afterbegin", footerHTML);
