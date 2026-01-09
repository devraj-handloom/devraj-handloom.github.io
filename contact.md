---
layout: default
title: Contact DevRaj
permalink: /contact/
---

<main class="contact-page">
  <!-- Map Section -->
  <section class="contact-map">
    <div class="section-heading">
      <h1>Visit Us in Bhopal</h1>
      <p class="section-sub">New Market, Bhopal, Madhya Pradesh 462003</p>
    </div>
    
    <!-- Interactive Map Placeholder (Google Maps embed) -->
    <div class="map-container">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d396.1963968429443!2d77.43004764051723!3d23.171514419101207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43000c3c0d5b%3A0x28aff1617cb03157!2sN%20Block!5e0!3m2!1sen!2sin!4v1767977478504!5m2!1sen!2sin" 
        width="100%" 
        height="400" 
        style="border:0; border-radius: 16px;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
    
    <div class="map-info">
      <div class="info-item">
        <span class="info-icon">📍</span>
        <div>
          <strong>Danish Kunj Kolar Rd</strong><br>
          Bhopal, MP 462042
        </div>
      </div>
      <div class="info-item">
        <span class="info-icon">🕒</span>
        <div>
          <strong>Open</strong><br>
          Mon-Sat: 10AM - 8PM
        </div>
      </div>
      <div class="info-item">
        <span class="info-icon">🚗</span>
        <div>
          <strong>Parking</strong><br>
          Available
        </div>
      </div>
    </div>
  </section>

  <!-- Business Card Section -->
  <section class="contact-card">
    <div class="section-heading centered">
      <h2>Get In Touch</h2>
      <p>Book home visits, consultations, or custom orders</p>
    </div>
    
    <div class="business-cards">
      <!-- Call Card -->
      <div class="business-card call-card">
        <div class="card-icon">📞</div>
        <div class="card-content">
          <h3>Call Us</h3>
          <a href="tel:+918871083704" class="card-link large">
            +91 88710 83704
          </a>
          <p>Immediate queries & orders</p>
        </div>
      </div>

      <!-- WhatsApp Card -->
      <div class="business-card whatsapp-card">
        <div class="card-icon">💬</div>
        <div class="card-content">
          <h3>WhatsApp</h3>
          <a href="https://wa.me/918871083704" class="card-link large" target="_blank">
            Message Now
          </a>
          <p>Share saree preferences</p>
        </div>
      </div>

      <!-- Home Visit Card -->
      <div class="business-card visit-card">
        <div class="card-icon">🏠</div>
        <div class="card-content">
          <h3>Home Visit</h3>
          <a href="#visit-form" class="card-link large">
            Book Visit
          </a>
          <p>Personal consultation at home</p>
        </div>
      </div>
    </div>

    <!-- Home Visit Form -->
    <div class="visit-form-container" id="visit-form">
      <div class="hero-card">
        <h3>Book Home Visit</h3>
        <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="visit-form">
          <div class="form-row">
            <input type="text" name="name" placeholder="Full Name" required>
            <input type="tel" name="phone" placeholder="Phone Number" required>
          </div>
          <input type="email" name="email" placeholder="Email (optional)">
          <textarea name="preferences" placeholder="Saree preferences, occasion, budget" rows="4"></textarea>
          <div class="form-row form-actions">
            <button type="submit" class="btn-primary">
              Book Visit <span>→</span>
            </button>
            <button type="reset" class="btn-outline">Clear</button>
          </div>
        </form>
        <p class="form-note">
          We'll call within 24 hours to confirm. Free for orders above ₹15,000.
        </p>
      </div>
    </div>
  </section>
</main>
