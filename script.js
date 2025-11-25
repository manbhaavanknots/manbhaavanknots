/* File: assets/script.js */
/* Minimal JS: mobile menu toggle and a small helper to prefill whatsapp text (if you want) */

document.addEventListener('DOMContentLoaded', function(){
  // mobile menu simple toggle - shows nav links as an alert fallback (simple static site)
  const btns = document.querySelectorAll('.mobile-menu-btn');
  btns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      // simple mobile nav: show quick links prompt (this is minimal and safe for static sites)
      const menu = "Home: index.html\nShop: shop.html\nAbout: about.html\nContact: contact.html\n\nOpen the page you want.";
      alert(menu);
    });
  });

  // optional: auto-format WA links (samples already have encoded text)
});
