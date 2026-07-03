---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

I'm a embedded software engineer and here is a description of some projects and problem solving techniques on my daily tasks.

## Posts

{% if site.posts.size > 0 %}
{% for post in site.posts %}
- [{{ post.title }}]({{ post.url | relative_url }}) <small>{{ post.date | date: "%B %-d, %Y" }}</small>
{% endfor %}
{% else %}
No posts yet.
{% endif %}
