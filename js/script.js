const shareButtonElement = document.querySelector('#share-button');
const shareOptionsElement = document.querySelector('#share-options');
shareButtonElement.addEventListener('click', () => {
  shareButtonElement.classList.toggle('active');
  shareOptionsElement.classList.toggle('active');
});
