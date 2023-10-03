/*  fetch('http://localhost:1337/articles')
  .then(response => response.json())
  .then(data => console.log(data));  */


  function createArticleElement(article) {
    const articleDiv = document.createElement("div");
    articleDiv.className = "article";

    // Ajout du titre
    const title = document.createElement("h2");
    title.textContent = article.Titre;
    articleDiv.appendChild(title);

    // Ajout du bouton
    const button = document.createElement("button");
    button.textContent = "Afficher le contenu";
    articleDiv.appendChild(button);

    // Ajout de l'auteur
    const author = document.createElement("p");
    author.textContent = "Auteur: " + article.Auteur;
    articleDiv.appendChild(author);

    // Ajout de la date de publication
    const createdAt = document.createElement("p");
    createdAt.textContent = "Publié le: " + new Date(article.published_at).toLocaleDateString();
    articleDiv.appendChild(createdAt);

    // Ajout du contenu
    const content = document.createElement("p");
    content.textContent = article.Contenu;
    content.style.display = "none"; // Cache le contenu par défaut
    articleDiv.appendChild(content);

    //Ajout de la catégorie
    const category = document.createElement("p");
    category.textContent = "catégorie: " + article.categorie.Nom;
    articleDiv.appendChild(category);


    // Gestionnaire d'événements pour le bouton
    button.addEventListener("click", () => {
      // Toggle la visibilité du contenu lors du clic
      content.style.display = content.style.display === "none" ? "block" : "none";
    });

    return articleDiv;
  }

  function displayArticles(articles) {
    const articlesContainer = document.getElementById("articles-container");
    articlesContainer.innerHTML = "";
    articles.forEach(article => {
      const articleElement = createArticleElement(article);
      articlesContainer.appendChild(articleElement);
    });
  }

  fetch('http://localhost:1337/articles')
    .then(response => response.json())
    .then(data => {
      displayArticles(data);
      console.log(data)
    })
    .catch(error => console.error("Une erreur est survenue:", error));


//POST

const articleData = {
    Titre: 'coucou',
    Contenu: 'Le contenu de votre nouvel article',
    Auteur: 'Le nom de l\'auteur',
    published_at: new Date().toISOString(),
    categorie: 1
  };
    console.log(articleData)
  
  fetch('http://localhost:1337/articles?_populate=categorie', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Vous aurez peut-être besoin d'un token d'authentification selon votre configuration Strapi
      // 'Authorization': 'Bearer YOUR_TOKEN_HERE',
    },
    body: JSON.stringify(articleData),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Article créé :', data);
  })
  .catch((error) => {
    console.error('Erreur:', error);
  });
  