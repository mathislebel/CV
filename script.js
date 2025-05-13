// Mode sombre/clair
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Appliquer la préférence système
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  body.classList.add('dark');
  icon.classList.replace('fa-moon', 'fa-sun');
}

// Basculer le thème manuellement
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    icon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'dark');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'light');
  }
});

// Restaurer le thème sauvegardé
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark');
  icon.classList.replace('fa-moon', 'fa-sun');
} else if (savedTheme === 'light') {
  body.classList.remove('dark');
  icon.classList.replace('fa-sun', 'fa-moon');
}

// Traductions
const translations = {
  fr: {
    "header.title": "Bonjour, je suis <span>Mathis Lebel</span>",
    "header.subtitle": "Développeur Full-Stack & Architecte IoT",
    "header.projects": "Voir mes projets",
    "about.title": "À propos",
    "about.text1": "Étudiant en informatique passionné par le développement logiciel et matériel. Je combine des compétences en programmation (C++, Python, Flutter), en électronique (Arduino, FPGA) et en développement web pour créer des solutions innovantes.",
    "about.text2": "Mon expérience en alternance et en compétitions entrepreneuriales m'a permis de développer une approche pratique et orientée résultats.",
    "education.title": "Formation",
    "education.item1.degree": "Bachelor informatique en alternance",
    "education.item1.details": "Mathématiques, apprentissage automatique, programmation et développement logiciel, architecture et systèmes informatiques",
    "education.item2.degree": "Architecte Internet des objets",
    "education.item2.details": "Informatique, électronique, anglais, compétences relationnelles",
    "experience.title": "Expérience",
    "experience.item1.role": "Développement Flutter et React",
    "experience.item1.detail1": "Développement d'une application mobile et d'un site web sur mesure",
    "experience.item1.detail2": "Respect des délais et exigences techniques clients",
    "experience.item2.role": "Développement WEB FPGA",
    "experience.item2.detail1": "Création d'un site web avec émulateur FPGA",
    "experience.item2.detail2": "Simplification de l'apprentissage de cette technologie",
    "experience.item3.role": "Développement Arduino",
    "experience.item3.detail1": "Optimisation d'un système antivol électronique",
    "experience.item3.detail2": "Recodage pour CORIS INNOVATION",
    "skills.title": "Compétences",
    "skills.category1": "Langages",
    "skills.category2": "Mobile & Web",
    "skills.category3": "Électronique",
    "projects.title": "Projets",
    "projects.item1.title": "Application Flutter",
    "projects.item1.description": "Application mobile multiplateforme développée avec Flutter",
    "projects.item2.title": "Émulateur FPGA",
    "projects.item2.description": "Site web éducatif avec émulateur FPGA intégré",
    "footer.subtitle": "Développeur Full-Stack & Architecte IoT",
    "footer.about": "À propos",
    "footer.experience": "Expérience",
    "footer.projects": "Projets",
    "footer.rights": "Tous droits réservés"
  },
  en: {
    "header.title": "Hello, I'm <span>Mathis Lebel</span>",
    "header.subtitle": "Full-Stack Developer & IoT Architect",
    "header.projects": "View my projects",
    "about.title": "About",
    "about.text1": "Computer science student passionate about software and hardware development. I combine programming skills (C++, Python, Flutter), electronics (Arduino, FPGA) and web development to create innovative solutions.",
    "about.text2": "My experience in work-study programs and entrepreneurial competitions has allowed me to develop a practical and results-oriented approach.",
    "education.title": "Education",
    "education.item1.degree": "Computer science bachelor's degree (work-study)",
    "education.item1.details": "Mathematics, Machine learning, Programming and Software Development, Computer Architecture and Systems",
    "education.item2.degree": "Internet of Things Architect",
    "education.item2.details": "Computer Science, Electronics, English, Soft skills",
    "experience.title": "Experience",
    "experience.item1.role": "Flutter and React Development",
    "experience.item1.detail1": "Development of a custom mobile application and website",
    "experience.item1.detail2": "Meeting deadlines and technical requirements",
    "experience.item2.role": "FPGA Web Development",
    "experience.item2.detail1": "Creation of a website with FPGA emulator",
    "experience.item2.detail2": "Simplifying learning of this technology",
    "experience.item3.role": "Arduino Development",
    "experience.item3.detail1": "Optimization of an electronic anti-theft system",
    "experience.item3.detail2": "Recoding for CORIS INNOVATION",
    "skills.title": "Skills",
    "skills.category1": "Languages",
    "skills.category2": "Mobile & Web",
    "skills.category3": "Electronics",
    "projects.title": "Projects",
    "projects.item1.title": "Flutter App",
    "projects.item1.description": "Cross-platform mobile application developed with Flutter",
    "projects.item2.title": "FPGA Emulator",
    "projects.item2.description": "Educational website with integrated FPGA emulator",
    "footer.subtitle": "Full-Stack Developer & IoT Architect",
    "footer.about": "About",
    "footer.experience": "Experience",
    "footer.projects": "Projects",
    "footer.rights": "All rights reserved"
  }
};

// Appliquer la traduction en fonction de la langue
function applyTranslations(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  localStorage.setItem('lang', lang); // Sauvegarde de la langue
}

// Restaurer la langue sauvegardée
const savedLang = localStorage.getItem('lang') || 'fr';
applyTranslations(savedLang);

// Exemple de bouton de changement de langue
document.getElementById('lang-fr').addEventListener('click', () => applyTranslations('fr'));
document.getElementById('lang-en').addEventListener('click', () => applyTranslations('en'));
