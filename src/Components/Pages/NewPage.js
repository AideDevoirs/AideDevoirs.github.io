
const NewPage = () => {
  const posts = [
    { title: 'Post 1', description: 'Description du Post 1' },
    { title: 'Post 2', description: 'Description du Post 2' },
    { title: 'Post 3', description: 'Description du Post 3' },
    { title: 'SHESH', description: 'Lekker meme toi tu saisljhsdbljsqdgvbfljsqdvbhfljsqdfvbhsqdljfbhqsdljfbhsqdljfbhsqdljbh' }
  ];
  
  function displayPosts() {
    const postsContainer = document.querySelector('main');
    postsContainer.innerHTML = '';
  
    posts.forEach((post, index) => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
  
      const titleElement = document.createElement('h3');
      titleElement.textContent = post.title;
  
      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = post.description;
  
      const contactButton = document.createElement('button');
      contactButton.classList.add('contact-button');
      contactButton.textContent = 'Contacter';
      contactButton.addEventListener('click', () => {
        contactUser(index); // Appeler la fonction pour contacter l'utilisateur
      });
  
      postElement.appendChild(titleElement);
      postElement.appendChild(descriptionElement);
      postElement.appendChild(contactButton);
  
      postsContainer.appendChild(postElement);
    });
  }
  
  function contactUser(postIndex) {
    const post = posts[postIndex];
    // Vous pouvez ajouter ici la logique pour contacter l'utilisateur,
    // par exemple, afficher un formulaire de contact ou ouvrir un client de messagerie
    window.alert(`Contactez l'utilisateur du post "${post.title}"`);
  }
  
  // Appel à la fonction pour afficher les posts
  displayPosts();
};



export default NewPage;
