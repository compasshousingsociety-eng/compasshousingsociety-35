const footer = `
<footer class="site-footer">
    <div class="footer-inner container-max">
        <div class="brand" aria-hidden="false">
            <img src="images/colored-logo[1].png" alt="Compass Housing" class="brand-logo">
            <h4>Compass Housing Society</h4>
            <p class="brand-desc">Premium homes and investment opportunities built for lasting value.</p>
        </div>

  
      <div class="footer-bottom d-flex justify-content-center">
    <div class="container-max">
        © 2026 Compass Housing Society. All rights reserved.
    </div>
</div>
    </div>
</footer>

<style>
.site-footer{background:#603F83;color:#dbeafe;padding:48px 16px;font-family:inherit}
.site-footer .footer-inner{max-width:1100px;margin:auto}
.brand{text-align:center;margin-bottom:28px}
.brand-logo{width:80px;height:80px;object-fit:contain;display:block;margin:0 auto 12px}
.brand h4{margin:0;color:#fff}
.brand-desc{margin:8px auto 0;max-width:560px;color:white}
.footer-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:28px;align-items:start}
.footer-col h5{margin-bottom:12px;color:#fff}
.footer-col p{margin:6px 0;color:rgba(219,234,254,0.9)}
.footer-col ul{list-style:none;padding:0;margin:0}
.footer-col ul li{margin:8px 0}
.footer-col a{color:rgba(219,234,254,0.9);text-decoration:none}
.footer-col a:hover{text-decoration:underline}
.footer-bottom{background:transparent;color:#ffffff;border-top:none;margin-top:28px;padding:14px 0}
@media (max-width:900px){.footer-row{grid-template-columns:1fr}.brand-desc{padding:0 12px}}
</style>
`;

document.addEventListener('DOMContentLoaded', function () {
    const footerContainer = document.getElementById("side-footer");
    if (footerContainer) footerContainer.innerHTML = footer;
});




