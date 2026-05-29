---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

Welcome to my personal projects blog.

## Posts

{% if site.posts.size > 0 %}
{% for post in site.posts %}
- [{{ post.title }}]({{ post.url | relative_url }}) <small>{{ post.date | date: "%B %-d, %Y" }}</small>
{% endfor %}
{% else %}
No posts yet.
{% endif %}
