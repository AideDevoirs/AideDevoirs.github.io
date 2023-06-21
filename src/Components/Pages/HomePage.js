const HomePage = () => {
  const contentContainer = document.querySelector('main');

  // Code HTML à ajouter
  const htmlContent = `
    <h1>Aide aux devoirs</h1>

    <div id="questions">
      <h2>Poser une question</h2>
      <form id="question-form">
        <label for="question-title">Titre :</label>
        <input type="text" id="question-title" required><br><br>

        <label for="question-description">Description :</label><br>
        <textarea id="question-description" rows="4" cols="50" required></textarea><br><br>

        <label for="question-email">E-mail :</label>
        <input type="email" id="question-email" required><br><br>

        <button type="submit">Poser la question</button>
      </form>
    </div>

    <div id="question-list">
      <h2>Liste des questions</h2>
      <ul id="questions-ul"></ul>
    </div>
  `;

  // Ajoute le code HTML à l'élément sélectionné
  contentContainer.innerHTML = htmlContent;

  // Tableau pour stocker les questions posées
  const questions = [];

  // Événement de soumission du formulaire de question
  document.getElementById("question-form").addEventListener("submit", async (event) => {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupère les valeurs des champs du formulaire
    const title = document.getElementById("question-title").value;
    const description = document.getElementById("question-description").value;
    const email = document.getElementById("question-email").value;

    // Crée un objet question
    const question = {
      title,
      description,
      email
    };

    // Ajoute la question au tableau
    questions.push(question);

    // Réinitialise les champs du formulaire
    document.getElementById("question-form").reset();

    // Envoie l'e-mail avec SendGrid
    try {
      await sendEmail(question);
      console.log("E-mail envoyé avec succès !");
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'e-mail :", error);
    }
    

    // Met à jour la liste des questions affichées
    displayQuestions();
  });

  // Fonction pour afficher les questions
  function displayQuestions() {
    const questionsUl = document.getElementById("questions-ul");

    // Vide la liste des questions affichées
    questionsUl.innerHTML = "";

    // Parcourt le tableau de questions et ajoute chaque question à la liste
    questions.forEach((question) => {
      const li = document.createElement("li");
      const title = document.createElement("h3");
      const description = document.createElement("p");
      const email = document.createElement("h5");

      title.textContent = question.title;
      description.textContent = question.description;
      email.textContent = question.email;

      li.appendChild(title);
      li.appendChild(description);
      li.appendChild(email);

      questionsUl.appendChild(li);
    });
  }

  // Fonction pour envoyer l'e-mail avec SendGrid
  async function sendEmail(question) {
    const response = await fetch("/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(question)
    });

    if (!response.ok) {
      throw new Error("Erreur lors de l'envoi de l'e-mail");
    }
  }
};
export default HomePage;
