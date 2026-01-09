---
layout: default
title: Sitemap
permalink: /sitemap/
---

<main class="sitemap">
  <h1>Site Map</h1>

  <div class="sitemap-grid">
    <div class="sitemap-group">
      <h3>Main Pages</h3>
      <ul>
        <li><a href="{{ '/' | relative_url }}">Home</a></li>
        <li><a href="{{ '/shop/' | relative_url }}">Shop</a></li>
        {% for item in site.data.navigation %}
          {% unless item.url == '/' or item.url == '/shop/' %}
            <li><a href="{{ item.url | relative_url }}">{{ item.name }}</a></li>
          {% endunless %}
        {% endfor %}
      </ul>
    </div>

    <div class="sitemap-group">
      <h3>Products</h3>
      <ul>
        {% for p in site.data.products %}
          <li><a href="{{ '/shop/' | append: p.handle | append: '/' | relative_url }}">
            {{ p.name }}
          </li>
        {% endfor %}
      </ul>
    </div>
  </div>

  <div class="sitemap-updated">
    Last updated: {{ "now" | date: "%B %d, %Y" }}
  </div>
</div>
