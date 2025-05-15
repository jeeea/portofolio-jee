function loadSection(id, path) {
  fetch(path)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
}

loadSection('about', 'sections/about.html');
loadSection('projects', 'sections/projects.html');
loadSection('contact', 'sections/contact.html');
