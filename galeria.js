const dialog = document.querySelector('dialog');
const photo = dialog.querySelector('img');
const closeButton = dialog.querySelector('button');
let opener;

if (typeof dialog.showModal === 'function') {
  for (const link of document.querySelectorAll('.gallery a')) {
    link.addEventListener('click', (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      photo.src = link.href;
      photo.alt = link.querySelector('img').alt;
      dialog.showModal();
    });
  }
  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => opener?.focus());
}
