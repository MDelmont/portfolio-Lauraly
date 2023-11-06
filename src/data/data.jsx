const content = {
  acceuil: [
    {
      type: "text",
      content: [
        {
          type: "title",
          content: "Bienvenue !",
        },
        {
          type: "paragraphe",
          content:
            "Parcourer l'interface de cet appareil photo pour découvrir mon profil, mon parcours et mes compétences.",
        },
        {
          type: "paragrapheList",
          content: [
            {
              type: "paragraphe",
              content: "Appuyer sur le bouton",
            },
            {
              type: "icon",
              content: "play",
            },
            {
              type: "paragraphe",
              content: "pour visualiser mes projets.",
            },
          ],
        },
      ],
    },
  ],
  profil: [
    {
      type: "info",
      title: "Sexe",
      info: "Femme",
    },
    {
      type: "info",
      title: "Date de naissance",
      info: "16 novembre 1996 (26 ans)",
    },
    {
      type: "info",
      title: "Localisation",
      info: "Toulouse (31)",
    },
    {
      type: "info",
      title: "Moyen de locomotion",
      info: "Véhicule personnel",
    },
    {
      type: "info",
      title: "Caractéristique particulière",
      info: "Tatouée",
    },
    {
      type: "info",
      title: "Moyen de locomotion",
      info: "Véhicule personnel",
    },
    {
      type: "details",
      title: "Hobbies",
      content: [
        {
          type: "title",
          title: "Sélection des hobbies...",
        },
        {
          type: "toggle",
          title: "Musique (Guitare, piano)",
        },
        {
          type: "toggle",
          title: "Création manuelles (coture, bijoux, etc)",
        },
        {
          type: "toggle",
          title: "Photogaphie",
        },
        {
          type: "toggle",
          title: "Vidéo",
        },
        {
          type: "toggle",
          title: "Illusation (type cartoon, paysages)",
        },
      ],
    },
    {
      type: "details",
      title: "Personnalité",
      content: [
        {
          type: "title",
          title: "Options de personnalité...",
        },
        {
          type: "toggle",
          title: "Créativité",
        },
        {
          type: "toggle",
          title: "Curiosité",
        },
        {
          type: "toggle",
          title: "Empathie",
        },
        {
          type: "toggle",
          title: "Persévérance",
        },
        {
          type: "toggle",
          title: "Facilités d'apprentissage",
        },
        {
          type: "toggle",
          title: "Facilités d'intégration",
        },
      ],
    },
  ],
  Parcours: [
    {
      type: "details",
      title: "Expériences professionnelles",
      content: [
        {
          type: "text",
          content: [
            {
              type: "paragraphe",
              content: "Novembre 2021 - Aujourd'hui",
            },
            {
              type: "title",
              content: "PHOTOGRAPHE ARTISTIQUE INDÉPENDANTE",
            },
            {
              type: "paragraphe",
              content: "Gestion des réseaux sociaux",
            },
            {
              type: "paragraphe",
              content: "Création de visuels pour la communication",
            },
            {
              type: "paragraphe",
              content: "Création et gestion des projets clients",
            },
            {
              type: "paragraphe",
              content: "Shootings photos et vidéos backstages",
            },
          ],
        },
        {
          type: "text",
          content: [
            {
              type: "paragraphe",
              content: "Septembre 2017 - Novembre 2021",
            },
            {
              type: "title",
              content: "BOULANGÉRE",
              lieux: "Boulangerie Piero - Tournefeuille",
            },
            {
              type: "paragraphe",
              content: "Gestion des réseaux sociaux",
            },
          ],
        },
        {
          type: "text",
          content: [
            {
              type: "paragraphe",
              content: "Mai 2015 - Septembre 2017",
            },
            {
              type: "title",
              content: "EMPLOYÉE POLYVALANTE",
              lieux: "La Brioche - Portets/Garonne",
            },
          ],
        },
      ],
    },
    {
      type: "details",
      title: "Formations",
      content: [
        {
          type: "text",
          content: [
            {
              type: "paragraphe",
              content: "En cours",
            },
            {
              type: "title",
              content: "BARCHELOR  WEBDESIGN/WEBMARKETING EN ALTERNANCE",
            },
            {
              type: "paragraphe",
              content:
                "3W Academy (3 semaines entreprise / 1 semaine de cours)",
            },
            {
              type: "paragrapheGrid",
              colonne: 2,
              content: ["UI/UX", "SEO", "PAO", "Intégration web"],
            },
          ],
        },
        {
          type: "text",
          content: [
            {
              type: "paragraphe",
              content: "Juillet-Semptembre 2023",
            },
            {
              type: "title",
              content: "COURS OPENCLASSROOM",
            },
            {
              type: "paragraphe",
              content: "Référenciement naturel (SEO)",
            },
            {
              type: "paragraphe",
              content: "Initiation au Marketing Digital",
            },
            {
              type: "paragraphe",
              content: "Stratégie Social Média",
            },
            {
              type: "paragraphe",
              content: "Créer et appliquer une charte graphique",
            },
          ],
        },
      ],
    },
  ],
  compétences: [
    {
      type: "detail",
      title: "Logiciels",
      content: [
        {
          type: "icon",
          content: [
            "Photoshop",
            "Lightroom",
            "PremierePro",
            "Xd",
            "InDesign",
            "Illustrator",
            "Procreate",
            "Canva",
          ],
        },
      ],
    },
    {
      type: "detail",
      title: "Techniques",
      content: [
        {
          type: "toggle",
          title: "Copywriting",
          details: "(méthode AIDA, PAS)",
        },
        {
          type: "toggle",
          title: "Suivi d'un planning éditorial",
        },
        {
          type: "toggle",
          title: "Utilisation de l'IA",
          details: "(Firefly, ChatGPT)",
        },
        {
          type: "toggle",
          title: "Graphisme",
        },
        {
          type: "toggle",
          title: "Mise en page",
        },
        {
          type: "toggle",
          title: "Prise et montage vidéo",
        },
        {
          type: "toggle",
          title: "Prise et retouche",
        },
      ],
    },
    {
      type: "detail",
      title: "soft skills",
      content: [
        {
          type: "toggle",
          title: "Autonomie",
        },
        {
          type: "toggle",
          title: "Esprit d'équipe",
        },
        {
          type: "toggle",
          title: "Investissement",
        },
        {
          type: "toggle",
          title: "A l'écoute des feedbacks",
        },
        {
          type: "toggle",
          title: "Rigeur",
        },
        {
          type: "toggle",
          title: "Régularité",
        },
      ],
    },
  ],
  contact: [
    {
      type: "info",
      title: "Téléphone",
      info: "06 07 14 12 38 ",
    },
    {
      type: "info",
      title: "Adresse mail",
      info: "Lauraly.monceau09@gmail.com",
    },
    {
      type: "url",
      title: "Linkedin",
      info: "https://www.linkedin.com/in/lauraly-monceau-891418114/",
    },
    {
      type: "url",
      title: "Site professionnel",
      info: "https://www.lauralymonceauphotographe.fr/",
    },
  ],
};

export default content;
