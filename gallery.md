---
title: Photo Gallery
menu: Gallery
og_image: /assets/images/shenandoah.jpg
interval: 4000          # carousel transition interval: seconds x 1000
autostart: true
---

# Photo Gallery #

This is a selection of Seabreeze pictures contributed by their proud owners. We try to update this every
season. More pictures are online in the [Facebook Group](https://www.facebook.com/groups/1381759918520532).

Have your own pictures to share? Contact <{{site.email}}>.

<div id="carousel" class="carousel slide" data-bs-ride="{% if page.autostart %}carousel{% else %}true{% endif %}">
  <div class="carousel-inner">
{% assign n = 0 -%}
{% for slide in site.data.gallery %}
{% if slide.skip != true -%}
{% assign path = slide.img -%}
{% assign s = path | split: '://' -%}
{% assign z = s[0] -%}
{% if site.gallery_src[z] -%}
{% assign path = site.gallery_src[z] | append: s[1] -%}
{% endif -%}
{% assign styles = slide.style | normalize_whitespace | split: ' ' -%}
    <div class="carousel-item{% if n == 0 %} active{% endif %}" data-bs-interval="{{ page.interval }}">
      <img src="{{ path }}" class="d-block" alt="{{ slide.desc }}">
      <div class="carousel-caption{% for i in styles %}{{ i | prepend: ' caption-' }}{% endfor %}">
      <h5>{{ slide.name }} (#{{ slide.hull }})</h5>
{% if slide.desc -%}
      <p class="desc">{{ slide.desc }}</p>
{% endif -%}
{% if slide.attr -%}
      <p class="attr">Credit: {{ slide.attr }}</p>
{% endif .%}
      </div>
    </div>
{% assign n = n | plus: 1 -%}
{% endif -%}
{% endfor %}
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
