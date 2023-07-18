const toggleSection = (sectionId) => {
  const section = document.getElementById(sectionId);

  const sections = document.getElementsByTagName('section');

  for (let i = 0; i < sections.length; i += 1) {
    sections[i].style.display = 'none';
  }

  section.style.display = 'block';
};

export default toggleSection;
