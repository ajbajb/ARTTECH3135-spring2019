---
layout: page
title: Assignments
permalink: /assignments/
---

<div class="home">

  <!-- <h1 class="page-heading">{{ page.title }}</h1> -->

  <ul class="post-list">
    {% for assignment in site.assignments %}
      <li>
        <!-- <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span> -->
        <a class="post-link" href="{{ assignment.url | prepend: site.baseurl }}">{{ assignment.title }}</a>
      </li>
    {% endfor %}
  </ul>
</div>
