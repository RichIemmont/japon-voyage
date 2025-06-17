// Données du voyage
const voyageData = {
  "version1": {
    "nom": "Osaka 4j + Kyoto 3j",
    "description": "Version modifiée avec plus de temps à Osaka",
    "calendrier": [
      {"date": "03/10", "ville": "Tokyo", "nuit": true, "jour": 1},
      {"date": "04/10", "ville": "Tokyo", "nuit": true, "jour": 2},
      {"date": "05/10", "ville": "Tokyo", "nuit": true, "jour": 3},
      {"date": "06/10", "ville": "Hakone (optionnel)", "nuit": true, "jour": 4, "optionnel": true},
      {"date": "07/10", "ville": "Osaka", "nuit": true, "jour": 5},
      {"date": "08/10", "ville": "Osaka", "nuit": true, "jour": 6},
      {"date": "09/10", "ville": "Osaka", "nuit": true, "jour": 7},
      {"date": "10/10", "ville": "Osaka", "nuit": true, "jour": 8},
      {"date": "11/10", "ville": "Kyoto", "nuit": true, "jour": 9},
      {"date": "12/10", "ville": "Kyoto (Nara excursion)", "nuit": true, "jour": 10, "excursion": true},
      {"date": "13/10", "ville": "Kyoto", "nuit": true, "jour": 11},
      {"date": "14/10", "ville": "Tokyo", "nuit": true, "jour": 12},
      {"date": "15/10", "ville": "Tokyo", "nuit": true, "jour": 13},
      {"date": "16/10", "ville": "Tokyo", "nuit": true, "jour": 14},
      {"date": "17/10", "ville": "Tokyo (départ)", "nuit": false, "jour": 15}
    ],
    "avantages": [
      "Plus de temps pour Universal Studios Japan",
      "Meilleur accès à l'Expo Universelle Osaka",
      "Moins de trajets entre Osaka et Kyoto",
      "Idéal pour les priorités du Groupe A"
    ]
  },
  "version2": {
    "nom": "Osaka 3j + Kyoto 4j",
    "description": "Version originale avec plus de temps à Kyoto",
    "calendrier": [
      {"date": "03/10", "ville": "Tokyo", "nuit": true, "jour": 1},
      {"date": "04/10", "ville": "Tokyo", "nuit": true, "jour": 2},
      {"date": "05/10", "ville": "Tokyo", "nuit": true, "jour": 3},
      {"date": "06/10", "ville": "Hakone (optionnel)", "nuit": true, "jour": 4, "optionnel": true},
      {"date": "07/10", "ville": "Osaka", "nuit": true, "jour": 5},
      {"date": "08/10", "ville": "Osaka", "nuit": true, "jour": 6},
      {"date": "09/10", "ville": "Osaka", "nuit": true, "jour": 7},
      {"date": "10/10", "ville": "Kyoto", "nuit": true, "jour": 8},
      {"date": "11/10", "ville": "Kyoto", "nuit": true, "jour": 9},
      {"date": "12/10", "ville": "Kyoto (Nara excursion)", "nuit": true, "jour": 10, "excursion": true},
      {"date": "13/10", "ville": "Kyoto", "nuit": true, "jour": 11},
      {"date": "14/10", "ville": "Hiroshima", "nuit": true, "jour": 12},
      {"date": "15/10", "ville": "Hiroshima", "nuit": true, "jour": 13},
      {"date": "16/10", "ville": "Fukuoka", "nuit": true, "jour": 14},
      {"date": "17/10", "ville": "Fukuoka", "nuit": false, "jour": 15},
      {"date": "18/10", "ville": "Tokyo", "nuit": false, "jour": 16},
      {"date": "19/10", "ville": "Kawaguchiko", "nuit": false, "jour": 17},
      {"date": "20/10", "ville": "Tokyo", "nuit": false, "jour": 18},
      {"date": "21/10", "ville": "Tokyo", "nuit": false, "jour": 19},
      {"date": "22/10", "ville": "Tokyo", "nuit": false, "jour": 20},
      {"date": "23/10", "ville": "Tokyo", "nuit": false, "jour": 21},
    ],
    "avantages": [
      "Plus de temps pour découvrir Kyoto",
      "Immersion plus profonde dans le Japon traditionnel",
      "Exploration complète des temples et quartiers",
      "Préféré par le Groupe B"
    ]
  }
};

// Données des activités par ville
const activitesData = {
  "Tokyo": [
    {"nom": "Tokyo Skytree", "type": "Vue panoramique", "duree": "2-3h", "priorite": "Incontournable", "description": "Tour de 634m avec observatoires et vue exceptionnelle sur Tokyo", "icone": "🗼"},
    {"nom": "Temple Sensoji", "type": "Culture", "duree": "1-2h", "priorite": "Incontournable", "description": "Temple ancien d'Asakusa avec pagode et rue commerçante Nakamise", "icone": "⛩️"},
    {"nom": "Shibuya Crossing", "type": "Moderne", "duree": "1h", "priorite": "Incontournable", "description": "Carrefour le plus fréquenté au monde et Shibuya Sky", "icone": "🌆"},
    {"nom": "Quartier Harajuku", "type": "Culture", "duree": "2-3h", "priorite": "Recommandé", "description": "Centre de la mode et personnalités excentriques de Tokyo", "icone": "🎭"},
    {"nom": "Parc Ueno", "type": "Nature", "duree": "2-4h", "priorite": "Recommandé", "description": "Grand parc avec musées, zoo et beautés automnales", "icone": "🌳"},
    {"nom": "Meiji Jingu Gaien", "type": "Nature", "duree": "1-2h", "priorite": "Recommandé", "description": "Avenue de ginkgos dorés en automne - Festival en novembre", "icone": "🍂"},
    {"nom": "Marché Tsukiji", "type": "Gastronomie", "duree": "2-3h", "priorite": "Recommandé", "description": "Plus grand marché aux poissons au monde et dégustation", "icone": "🐟"},
    {"nom": "Quartier Ginza", "type": "Shopping", "duree": "2-3h", "priorite": "Optionnel", "description": "District le plus élitiste pour shopping de luxe", "icone": "💎"},
    {"nom": "TeamLab Planets", "type": "Art numérique", "duree": "2-3h", "priorite": "Recommandé", "description": "Expériences immersives d'art numérique - Extension 2025", "icone": "🎨"},
    {"nom": "Akihabara", "type": "Moderne", "duree": "2-3h", "priorite": "Optionnel", "description": "Quartier de l'électronique et des mangas", "icone": "🤖"},
    {"nom": "Observation momiji", "type": "Nature", "duree": "Variable", "priorite": "Recommandé", "description": "Chasse aux feuilles d'automne dans divers parcs", "icone": "🍁"},
    {"nom": "Roppongi", "type": "Vie nocturne", "duree": "Soirée", "priorite": "Optionnel", "description": "Quartier animé avec bars, restaurants et discothèques", "icone": "🌃"}
  ],
  "Hakone": [
    {"nom": "Onsen traditionnel", "type": "Détente", "duree": "2-4h", "priorite": "Incontournable", "description": "Sources chaudes naturelles avec vue sur montagne", "icone": "♨️"},
    {"nom": "Téléphérique Hakone", "type": "Vue panoramique", "duree": "1h", "priorite": "Incontournable", "description": "Vue spectaculaire sur Mont Fuji et vallée volcanique", "icone": "🚡"},
    {"nom": "Lac Ashi", "type": "Nature", "duree": "2-3h", "priorite": "Incontournable", "description": "Lac volcanique avec bateaux pirates et vue Mont Fuji", "icone": "🏔️"},
    {"nom": "Owakudani", "type": "Nature", "duree": "1-2h", "priorite": "Recommandé", "description": "Vallée volcanique active avec œufs noirs et fumerolles", "icone": "🌋"},
    {"nom": "Musée en plein air", "type": "Culture", "duree": "2-3h", "priorite": "Recommandé", "description": "Sculptures modernes avec pavillon Picasso", "icone": "🗿"},
    {"nom": "Hakone Shrine", "type": "Culture", "duree": "1h", "priorite": "Recommandé", "description": "Sanctuaire historique avec torii sur le lac", "icone": "⛩️"},
    {"nom": "Mont Kintoki", "type": "Randonnée", "duree": "6-8h", "priorite": "Optionnel", "description": "Randonnée avec vue imprenable sur Mont Fuji", "icone": "🥾"},
    {"nom": "Train Hakone Tozan", "type": "Transport", "duree": "1h", "priorite": "Recommandé", "description": "Train de montagne traversant paysages colorés", "icone": "🚂"}
  ],
  "Osaka": [
    {"nom": "Universal Studios Japan", "type": "Divertissement", "duree": "Journée", "priorite": "Incontournable", "description": "Parc à thème avec Super Nintendo World et Harry Potter", "icone": "🎢"},
    {"nom": "Expo Universelle 2025", "type": "Événement", "duree": "6h", "priorite": "Incontournable", "description": "Exposition mondiale du 13 avril au 13 octobre 2025", "icone": "🌍"},
    {"nom": "Château d'Osaka", "type": "Culture", "duree": "2-3h", "priorite": "Incontournable", "description": "Château historique du XVIe siècle avec musée", "icone": "🏯"},
    {"nom": "Dotonbori", "type": "Culture", "duree": "2-4h", "priorite": "Incontournable", "description": "Quartier animé avec enseignes lumineuses et street food", "icone": "🏮"},
    {"nom": "Aquarium Kaiyukan", "type": "Nature", "duree": "3-4h", "priorite": "Recommandé", "description": "Un des plus grands aquariums au monde", "icone": "🐠"},
    {"nom": "Umeda Sky Building", "type": "Vue panoramique", "duree": "1-2h", "priorite": "Recommandé", "description": "Gratte-ciel avec observatoire Floating Garden", "icone": "🏢"},
    {"nom": "Quartier Namba", "type": "Shopping", "duree": "2-3h", "priorite": "Recommandé", "description": "Centre commercial et divertissement", "icone": "🛒"},
    {"nom": "Kuromon Ichiba", "type": "Gastronomie", "duree": "1-2h", "priorite": "Recommandé", "description": "Marché traditionnel pour street food", "icone": "🍜"},
    {"nom": "Sumiyoshi Taisha", "type": "Culture", "duree": "1-2h", "priorite": "Optionnel", "description": "Un des plus anciens sanctuaires shinto", "icone": "⛩️"},
    {"nom": "Shinsaibashi", "type": "Shopping", "duree": "2-3h", "priorite": "Optionnel", "description": "Rue commerçante principale d'Osaka", "icone": "🛍️"}
  ],
  "Kyoto": [
    {"nom": "Kinkaku-ji", "type": "Culture", "duree": "1-2h", "priorite": "Incontournable", "description": "Pavillon d'or recouvert de feuilles d'or", "icone": "🏛️"},
    {"nom": "Kiyomizu-dera", "type": "Culture", "duree": "2-3h", "priorite": "Incontournable", "description": "Temple sur colline avec balcon en bois et vue panoramique", "icone": "⛩️"},
    {"nom": "Quartier Gion", "type": "Culture", "duree": "2-3h", "priorite": "Incontournable", "description": "Quartier des geishas avec maisons traditionnelles", "icone": "👘"},
    {"nom": "Forêt bambous Arashiyama", "type": "Nature", "duree": "1-2h", "priorite": "Incontournable", "description": "Allée mystique à travers bambouseraie", "icone": "🎋"},
    {"nom": "Fushimi Inari", "type": "Culture", "duree": "2-4h", "priorite": "Incontournable", "description": "Milliers de torii rouges sur sentier montagne", "icone": "⛩️"},
    {"nom": "Cérémonie du thé", "type": "Tradition", "duree": "1-2h", "priorite": "Recommandé", "description": "Art traditionnel du cha-no-yu dans maison de thé", "icone": "🍵"},
    {"nom": "Ginkaku-ji", "type": "Culture", "duree": "1-2h", "priorite": "Recommandé", "description": "Pavillon d'argent avec jardin sec zen", "icone": "🏛️"},
    {"nom": "Spectacles geishas", "type": "Culture", "duree": "2h", "priorite": "Recommandé", "description": "Danses d'automne en octobre dans 5 quartiers", "icone": "💃"},
    {"nom": "Temple Nanzen-ji", "type": "Culture", "duree": "1-2h", "priorite": "Recommandé", "description": "Temple renommé pour couleurs automnales", "icone": "⛩️"},
    {"nom": "Nuit Blanche", "type": "Art contemporain", "duree": "Soirée", "priorite": "Optionnel", "description": "Événement d'art contemporain premier vendredi octobre", "icone": "🎨"},
    {"nom": "Philosopher's Path", "type": "Nature", "duree": "1-2h", "priorite": "Recommandé", "description": "Chemin de promenade le long canal", "icone": "🚶"},
    {"nom": "Marché Nishiki", "type": "Gastronomie", "duree": "1-2h", "priorite": "Recommandé", "description": "Marché de street-food traditionnel", "icone": "🍱"}
  ],
  "Nara": [
    {"nom": "Temple Todai-ji", "type": "Culture", "duree": "1-2h", "priorite": "Incontournable", "description": "Temple avec statue géante de Bouddha en bronze", "icone": "🏛️"},
    {"nom": "Parc de Nara", "type": "Nature", "duree": "2-3h", "priorite": "Incontournable", "description": "Parc avec 1200 cerfs sacrés en liberté", "icone": "🦌"},
    {"nom": "Kasuga Taisha", "type": "Culture", "duree": "1h", "priorite": "Recommandé", "description": "Sanctuaire avec milliers de lanternes", "icone": "🏮"},
    {"nom": "Musée National", "type": "Culture", "duree": "2h", "priorite": "Optionnel", "description": "Art bouddhique et sculptures anciennes", "icone": "🏛️"},
    {"nom": "Rue Naramachi", "type": "Culture", "duree": "1-2h", "priorite": "Recommandé", "description": "Quartier historique avec architecture traditionnelle", "icone": "🏘️"},
    {"nom": "Mont Wakakusa", "type": "Nature", "duree": "2-3h", "priorite": "Optionnel", "description": "Colline avec vue panoramique sur Nara", "icone": "⛰️"}
  ]
};

// Variables globales
let villeActive = 'Tokyo';
let filtreActif = 'all';

// Fonction pour afficher les avantages
function afficherAvantages(version) {
  const avantagesList = document.getElementById('avantages-list');
  
  if (!avantagesList || !voyageData[version]) {
    console.error('Élément avantages-list ou données manquants:', version);
    return;
  }
  
  const avantages = voyageData[version].avantages;
  avantagesList.innerHTML = '';
  
  avantages.forEach(avantage => {
    const li = document.createElement('li');
    li.textContent = avantage;
    avantagesList.appendChild(li);
  });
}

// Fonction pour afficher le calendrier
function afficherCalendrier(version) {
  const calendrierContainer = document.getElementById('calendrier');
  
  if (!calendrierContainer || !voyageData[version]) {
    console.error('Élément calendrier ou données manquants:', version);
    return;
  }
  
  const calendrier = voyageData[version].calendrier;
  calendrierContainer.innerHTML = '';
  
  calendrier.forEach(jour => {
    const jourDiv = document.createElement('div');
    jourDiv.className = 'calendrier-jour';
    
    // Ajouter les classes selon le type de jour
    if (jour.optionnel) {
      jourDiv.classList.add('optionnel');
    }
    if (jour.excursion) {
      jourDiv.classList.add('excursion');
    }
    
    jourDiv.innerHTML = `
      <div class="jour-date">${jour.date}</div>
      <div class="jour-ville">${jour.ville}</div>
      <div class="jour-numero">J${jour.jour}</div>
    `;
    
    calendrierContainer.appendChild(jourDiv);
  });
}

// Fonction pour créer une carte d'activité
function creerCarteActivite(activite) {
  const card = document.createElement('div');
  card.className = 'activite-card';
  card.setAttribute('data-type', activite.type);
  
  const prioriteClass = activite.priorite.toLowerCase().replace('é', 'e');
  
  card.innerHTML = `
    <div class="activite-header">
      <span class="activite-icon">${activite.icone}</span>
      <div>
        <h4 class="activite-title">${activite.nom}</h4>
        <p class="activite-type">${activite.type}</p>
      </div>
    </div>
    <p class="activite-description">${activite.description}</p>
    <div class="activite-details">
      <span class="activite-duree">⏱️ ${activite.duree}</span>
      <span class="activite-priorite ${prioriteClass}">${activite.priorite}</span>
    </div>
  `;
  
  return card;
}

// Fonction pour afficher les activités d'une ville
function afficherActivitesVille(ville) {
  const container = document.querySelector(`#activites-${ville} .activites-grid`);
  if (!container || !activitesData[ville]) {
    console.error('Container ou données manquants pour', ville);
    return;
  }
  
  container.innerHTML = '';
  
  activitesData[ville].forEach(activite => {
    const card = creerCarteActivite(activite);
    container.appendChild(card);
  });
  
  // Appliquer le filtre actuel
  appliquerFiltre(filtreActif);
}

// Fonction pour changer de ville active
function changerVilleActive(nouvelleVille) {
  // Mettre à jour les onglets
  document.querySelectorAll('.ville-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  document.querySelector(`[data-ville="${nouvelleVille}"]`).classList.add('active');
  
  // Mettre à jour le contenu
  document.querySelectorAll('.activites-ville').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(`activites-${nouvelleVille}`).classList.add('active');
  
  villeActive = nouvelleVille;
  
  // Charger les activités si pas encore fait
  const container = document.querySelector(`#activites-${nouvelleVille} .activites-grid`);
  if (container && container.children.length === 0) {
    afficherActivitesVille(nouvelleVille);
  }
}

// Fonction pour appliquer un filtre
function appliquerFiltre(filtre) {
  filtreActif = filtre;
  
  // Mettre à jour les boutons de filtre
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-filter="${filtre}"]`).classList.add('active');
  
  // Filtrer les cartes dans la ville active
  const cards = document.querySelectorAll(`#activites-${villeActive} .activite-card`);
  
  cards.forEach(card => {
    if (filtre === 'all') {
      card.classList.remove('hidden');
    } else {
      if (card.getAttribute('data-type') === filtre) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    }
  });
}

// Fonction pour mettre à jour l'affichage selon la version sélectionnée
function mettreAJourAffichage(version) {
  console.log('Mise à jour vers la version:', version);
  
  // Vérifier que les éléments existent
  const calendrierContainer = document.getElementById('calendrier');
  const avantagesList = document.getElementById('avantages-list');
  
  if (!calendrierContainer || !avantagesList) {
    console.error('Éléments DOM manquants');
    return;
  }
  
  // Ajouter une animation de transition
  calendrierContainer.style.opacity = '0';
  avantagesList.style.opacity = '0';
  
  setTimeout(() => {
    afficherAvantages(version);
    afficherCalendrier(version);
    
    // Fade in
    calendrierContainer.style.opacity = '1';
    avantagesList.style.opacity = '1';
  }, 150);
}

// Fonction pour gérer le changement d'itinéraire
function gererChangementItineraire() {
  const radioButtons = document.querySelectorAll('input[name="itineraire"]');
  
  radioButtons.forEach(radio => {
    radio.addEventListener('change', function() {
      if (this.checked) {
        console.log('Radio sélectionné:', this.value);
        mettreAJourAffichage(this.value);
      }
    });
  });
}

// Fonction pour initialiser les activités
function initialiserActivites() {
  // Gestionnaires pour les onglets de villes
  document.querySelectorAll('.ville-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      const ville = this.getAttribute('data-ville');
      changerVilleActive(ville);
    });
  });
  
  // Gestionnaires pour les filtres
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const filtre = this.getAttribute('data-filter');
      appliquerFiltre(filtre);
    });
  });
  
  // Charger les activités de la ville par défaut
  afficherActivitesVille(villeActive);
}

// Fonction pour ajouter les styles de transition
function ajouterStylesTransition() {
  const style = document.createElement('style');
  style.textContent = `
    #calendrier, #avantages-list {
      transition: opacity 150ms ease-in-out;
    }
    
    .card, .info-item, .activite-card {
      transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
    }
    
    .activites-ville {
      transition: opacity 250ms ease-in-out;
    }
  `;
  document.head.appendChild(style);
}

// Fonction pour gérer la navigation fluide
function gererNavigationFluide() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Fonction pour animer l'apparition des éléments au scroll
function gererAnimationsScroll() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observer les sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
  });
}

// Fonction pour gérer les interactions des cartes
function gererInteractionsCartes() {
  const cards = document.querySelectorAll('.card, .info-item, .activite-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
}

// Fonction pour créer un effet de compteur animé pour le budget
function animerCompteurBudget() {
  const budgetAmount = document.querySelector('.budget-amount');
  const economieAmount = document.querySelector('.economie-amount');
  
  if (budgetAmount) {
    animerNombre(budgetAmount, 3940, '€ par personne');
  }
  
  if (economieAmount) {
    animerNombre(economieAmount, 240, '€ d\'économie par personne');
  }
}

function animerNombre(element, targetNumber, suffix) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let currentNumber = 0;
        const increment = targetNumber / 50;
        const timer = setInterval(() => {
          currentNumber += increment;
          if (currentNumber >= targetNumber) {
            currentNumber = targetNumber;
            clearInterval(timer);
          }
          element.textContent = Math.floor(currentNumber) + suffix;
        }, 30);
        observer.unobserve(element);
      }
    });
  });
  
  observer.observe(element);
}

// Fonction pour gérer l'interaction des cartes d'activités
function gererInteractionsActivites() {
  // Cette fonction sera appelée après l'ajout des nouvelles cartes
  setTimeout(() => {
    const activiteCards = document.querySelectorAll('.activite-card');
    
    activiteCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });
  }, 500);
}

// Fonction d'initialisation
function initialiser() {
  console.log('Initialisation de l\'application...');
  
  // Ajouter les styles de transition en premier
  ajouterStylesTransition();
  
  // Attendre un court délai pour que les styles soient appliqués
  setTimeout(() => {
    // Charger la version 1 par défaut
    mettreAJourAffichage('version1');
    
    // Configurer les gestionnaires d'événements
    gererChangementItineraire();
    gererNavigationFluide();
    gererAnimationsScroll();
    gererInteractionsCartes();
    
    // Initialiser la section activités
    initialiserActivites();
    
    // Gérer les interactions des activités
    gererInteractionsActivites();
    
    // Animer les compteurs après un délai
    setTimeout(animerCompteurBudget, 1000);
  }, 100);
}

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', initialiser);

// Fonction pour gérer le redimensionnement de la fenêtre
window.addEventListener('resize', function() {
  // Réajuster les éléments si nécessaire
  const carteContainer = document.querySelector('.carte-container');
  if (carteContainer) {
    // Forcer un recalcul de la taille du SVG
    const svg = carteContainer.querySelector('svg');
    if (svg) {
      svg.style.height = 'auto';
    }
  }
});

// Fonction utilitaire pour déboguer
function logVersionInfo() {
  console.log('Versions d\'itinéraire disponibles:');
  console.log('Version 1:', voyageData.version1.nom);
  console.log('Version 2:', voyageData.version2.nom);
  console.log('Villes avec activités:', Object.keys(activitesData));
  console.log('Total activités:', Object.values(activitesData).reduce((acc, ville) => acc + ville.length, 0));
}

// Log des versions au chargement
logVersionInfo();
