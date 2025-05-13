// Initialisation des animations AOS
AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-in-out',
  });
  
  // Gestion du mode sombre
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  
  // Vérifier la préférence système
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
  
  // Basculer entre les thèmes
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    
    // Sauvegarder la préférence
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
  
  // Restaurer le thème sauvegardé
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else if (savedTheme === 'light') {
    body.classList.remove('dark');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
  
  // Gestion de la traduction
  const translations = {
    fr: {
      "header.title": "Bonjour, je suis <span class=\"highlight\">Mathis Lebel</span>",
      "header.subtitle": "Développeur Full-Stack & Architecte IoT",
      "about.title": "À propos de moi",
      "about.content": "Étudiant en informatique passionné par le développement logiciel et matériel. Je combine des compétences en programmation (C++, Python, Flutter), en électronique (Arduino, FPGA) et en développement web pour créer des solutions innovantes. Mon expérience en alternance et en compétitions entrepreneuriales m'a permis de développer une approche pratique et orientée résultats.",
      "education.title": "Formation",
      "education.item1.degree": "Bachelor informatique en alternance",
      "education.item1.details": "Mathematics, Machine learning, Programming and Software Development, Computer Architecture and Systems",
      "education.item2.degree": "Architecte Internet des objets",
      "education.item2.details": "Computer Science, Electronics, English, Soft skills",
      "experience.title": "Expérience Professionnelle",
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
      "skills.category1": "Langages de programmation",
      "skills.category2": "Développement Mobile & Web",
      "skills.category3": "Électronique & IoT",
      "achievements.title": "Réalisations",
      "achievements.item1.title": "Compétitions entrepreneuriales",
      "achievements.item1.content": "4 participations avec 1ère place sur un projet innovant et 2ème place dans deux autres challenges",
      "achievements.item2.title": "Gestion d'équipe",
      "achievements.item2.content": "Ancien Project Manager pour une équipe de 7 étudiants",
      "footer.rights": "Tous droits réservés"
    },
    en: {
      "header.title": "Hello, I'm <span class=\"highlight\">Mathis Lebel</span>",
      "header.subtitle": "Full-Stack Developer & IoT Architect",
      "about.title": "About me",
      "about.content": "Computer science student passionate about software and hardware development. I combine programming skills (C++, Python, Flutter), electronics (Arduino, FPGA) and web development to create innovative solutions. My experience in work-study programs and entrepreneurial competitions has allowed me to develop a practical and results-oriented approach.",
      "education.title": "Education",
      "education.item1.degree": "Computer science bachelor's degree (work-study)",
      "education.item1.details": "Mathematics, Machine learning, Programming and Software Development, Computer Architecture and Systems",
      "education.item2.degree": "Internet of Things Architect",
      "education.item2.details": "Computer Science, Electronics, English, Soft skills",
      "experience.title": "Professional Experience",
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
      "skills.category1": "Programming Languages",
      "skills.category2": "Mobile & Web Development",
      "skills.category3": "Electronics & IoT",
      "achievements.title": "Achievements",
      "achievements.item1.title": "Entrepreneurial competitions",
      "achievements.item1.content": "4 participations with 1st place in an innovative project and 2nd place in two other challenges",
      "achievements.item2.title": "Team Management",
      "achievements.item2.content": "Former Project Manager for a team of 7 students",
      "footer.rights": "All rights reserved"
    }
  };
  
  function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang][key]) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = translations[lang][key];
        } else {
          element.innerHTML = translations[lang][key];
        }
      }
    });
    
    // Mettre à jour les boutons de langue
    document.getElementById('lang-fr').classList.toggle('active', lang === 'fr');
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    
    // Sauvegarder la préférence
    localStorage.setItem('language', lang);
  }
  
  // Écouteurs pour les boutons de langue
  document.getElementById('lang-fr').addEventListener('click', () => setLanguage('fr'));
  document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
  
  // Restaurer la langue sauvegardée ou utiliser le français par défaut
  const savedLanguage = localStorage.getItem('language') || 'fr';
  setLanguage(savedLanguage);