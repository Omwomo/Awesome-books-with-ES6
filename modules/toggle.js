export default function toggleSection(sectionId) {
  const section = document.getElementById(sectionId);

  const sections = document.getElementsByTagName('section');

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = 'none';
  }

  section.style.display = 'block';
}

document.getElementById('list').addEventListener('click', () => {
  toggleSection('lists');
});

document.getElementById('add-new').addEventListener('click', () => {
  toggleSection('forms');
});

document.getElementById('contact').addEventListener('click', () => {
  toggleSection('contact-section');
});
