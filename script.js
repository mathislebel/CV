// Dictionnaires de traduction pour les deux langues : français et anglais
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
      "education.item1.details": "Mathematics, Machine learning, Programming and Software Development, Computer Architecture and Systems",
      "education.item2.degree": "Architecte Internet des objets",
      "education.item2.details": "Computer Science, Electronics, English, Soft skills",
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
      "footer.subtitle": "Développeur Full-Stack & Architecte IoT",
      "footer.about": "À propos",
      "footer.experience": "Expérience",
      "footer.projects": "Projets",
      "footer.rights": "Tous droits réservés",
      "projects.item1.title": "Application Flutter",
      "projects.item1.description": "Application mobile multiplateforme développée avec Flutter",
      "projects.item1.technologies": "Flutter, Dart, Firebase",
      "projects.item2.title": "Émulateur FPGA",
      "projects.item2.description": "Site web éducatif avec émulateur FPGA intégré",
      "projects.item2.technologies": "React, Verilog, WebAssembly"
    },
    en: {
      "header.title": "Hello, I'm <span>Mathis Lebel</span>",
      "header.subtitle": "Full-Stack Developer & IoT Architect",
      "header.projects": "See my projects",
      "about.title": "About",
      "about.text1": "Computer science student passionate about software and hardware development. I combine skills in programming (C++, Python, Flutter), electronics (Arduino, FPGA), and web development to create innovative solutions.",
      "about.text2": "My experience in work-study programs and entrepreneurial competitions has allowed me to develop a practical, results-oriented approach.",
      "education.title": "Education",
      "education.item1.degree": "Bachelor in Computer Science (Work-study program)",
      "education.item1.details": "Mathematics, Machine learning, Programming and Software Development, Computer Architecture and Systems",
      "education.item2.degree": "IoT Architect",
      "education.item2.details": "Computer Science, Electronics, English, Soft skills",
      "experience.title": "Experience",
      "experience.item1.role": "Flutter and React Development",
      "experience.item1.detail1": "Development of a custom mobile application and website",
      "experience.item1.detail2": "Meeting client deadlines and technical requirements",
      "experience.item2.role": "WEB FPGA Development",
      "experience.item2.detail1": "Creation of a website with FPGA emulator",
      "experience.item2.detail2": "Simplifying learning of this technology",
      "experience.item3.role": "Arduino Development",
      "experience.item3.detail1": "Optimization of an electronic anti-theft system",
      "experience.item3.detail2": "Recoding for CORIS INNOVATION",
      "skills.title": "Skills",
      "skills.category1": "Languages",
      "skills.category2": "Mobile & Web",
      "skills.category3": "Electronics",
      "footer.subtitle": "Full-Stack Developer & IoT Architect",
      "footer.about": "About",
      "footer.experience": "Experience",
      "footer.projects": "Projects",
      "footer.rights": "All rights reserved",
      "projects.item1.title": "Flutter Application",
      "projects.item1.description": "Cross-platform mobile application developed with Flutter",
      "projects.item1.technologies": "Flutter, Dart, Firebase",
      "projects.item2.title": "FPGA Emulator",
      "projects.item2.description": "Educational website with integrated FPGA emulator",
      "projects.item2.technologies": "React, Verilog, WebAssembly"
    }
  };
  
  // Fonction pour appliquer la traduction
  function applyTranslation(language) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
      const translationKey = element.getAttribute('data-i18n');
      if (translations[language] && translations[language][translationKey]) {
        element.innerHTML = translations[language][translationKey];
      }
    });
  }
  
  // Gérer le changement de langue
  document.querySelectorAll('.language-switcher .control-btn').forEach(button => {
    button.addEventListener('click', (event) => {
      const language = event.target.getAttribute('data-lang');
      localStorage.setItem('language', language); // Sauvegarder la langue choisie dans le localStorage
      applyTranslation(language);
  
      // Mettre à jour l'état actif du bouton de langue
      document.querySelectorAll('.language-switcher .control-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      event.target.classList.add('active');
    });
  });
  
  // Vérifier et appliquer la langue préférée de l'utilisateur
  window.addEventListener('load', () => {
    const savedLanguage = localStorage.getItem('language') || navigator.language.split('-')[0] || 'fr'; // Par défaut en français
    applyTranslation(savedLanguage);
  
    // Mettre à jour l'état actif du bouton de langue en fonction de la langue sauvegardée
    document.querySelectorAll('.language-switcher .control-btn').forEach(button => {
      if (button.getAttribute('data-lang') === savedLanguage) {
        button.classList.add('active');
      }
    });
  });
  
  // Gestion du toggle pour le thème
  const themeToggle = document.querySelector('#theme-toggle');
  const savedTheme = localStorage.getItem('theme') || 'light'; // Par défaut en thème clair
  
  // Appliquer le thème sauvegardé
  document.body.classList.add(savedTheme);
  
  // Fonction pour changer le thème
  function changeTheme() {
    const currentTheme = document.body.classList.contains('light') ? 'light' : 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
    document.body.classList.remove(currentTheme);
    document.body.classList.add(newTheme);
  
    localStorage.setItem('theme', newTheme); // Sauvegarder le thème choisi dans le localStorage
  }
  
  // Écouter le changement de thème
  themeToggle.addEventListener('click', changeTheme);
  