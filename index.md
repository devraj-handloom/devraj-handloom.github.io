---
layout: default
title: DevRaj Maheshwari Handloom
permalink: /
---

<main>
  <section class="hero">
    <div class="hero-card">
      <div class="hero-label">New drop</div>
      <h1 class="hero-title">Hand‑woven Maheshwari edit</h1>
      <p class="hero-sub">
        Lightweight silks and cotton‑silks in deep wine, sand, and antique gold borders.
      </p>
      <div class="hero-cta-row">
        <button class="btn-primary" id="shopNowBtn">
          Shop sarees
          <span>→</span>
        </button>
        <p class="hero-note">Express shipping across India.</p>
      </div>
    </div>
  </section>


  <section>
    <div class="section-heading">
      <h2>Sarees</h2>
      <a href="{{ '/shop/' | relative_url }}">View all</a>
    </div>

  {% include shop-page.html %}

  </section>


  <section>
    <div class="section-heading">
      <h2>About</h2>
      <a href="{{ '/about/' | relative_url }}">About</a>
    </div>

  {% include about.html %}

  </section>
 

  <section>
    <div class="section-heading">
      <h2>About</h2>
      <a href="{{ '/about/' | relative_url }}">About</a>
    </div>

  {% include contact.html %}

  </section>
  
</main>
