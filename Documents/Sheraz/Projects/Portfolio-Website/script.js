// Get references to modal elements
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');

// Content to display for each album (you can expand this)
const albumDetails = {
  folklore: {
    title: 'Folklore',
    description: 'Released in 2020, "Folklore" is an indie-folk album created during isolation. It dives into fictional storytelling and introspection with a softer sound.'
  },
  '1989': {
    title: '1989',
    description: '"1989" marks a bold shift to pop, released in 2014. It includes hits like "Shake It Off" and "Blank Space," capturing a carefree, modern aesthetic.'
  }
};

// Function to show the modal with content for the selected album
function showProject(albumKey) {
  const album = albumDetails[albumKey];

  if (album) {
    modalBody.innerHTML = `
      <h2>${album.title}</h2>
      <p>${album.description}</p>
    `;
    modal.classList.remove('hidden');
  }
}

// Function to close the modal
function closeModal() {
  modal.classList.add('hidden');
}

// Optional: Close modal if user clicks outside the content box
window.addEventListener('click', function (event) {
  if (event.target === modal) {
    closeModal();
  }
});
