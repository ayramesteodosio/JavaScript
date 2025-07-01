// Biblioteca Virtual - JS

// Seletores principais
const bookForm = document.getElementById('book-form');
const booksList = document.getElementById('books-list');
const addBookBtn = document.getElementById('add-book-btn');
const cancelEditBtn = document.getElementById('cancel-edit-btn');
const readCount = document.getElementById('read-count');
const unreadCount = document.getElementById('unread-count');
const progressBarFill = document.getElementById('progress-bar-fill');
const exportJsonBtn = document.getElementById('export-json-btn');
const filterBtns = document.querySelectorAll('.btn--filter');

// Modal de edição
const editModal = document.getElementById('edit-modal');
const closeModalBtn = document.getElementById('close-modal');
const editBookForm = document.getElementById('edit-book-form');
const editTitle = document.getElementById('edit-title');
const editAuthor = document.getElementById('edit-author');
const editYear = document.getElementById('edit-year');
const editCover = document.getElementById('edit-cover');
const editStatus = document.getElementById('edit-status');

// Modal de confirmação de exclusão
const confirmModal = document.getElementById('confirm-modal');
const closeConfirmModalBtn = document.getElementById('close-confirm-modal');
const cancelDeleteBtn = document.getElementById('cancel-delete-btn');
const confirmDeleteBtn = document.getElementById('confirm-delete-btn');

// Tema
const toggleThemeBtn = document.getElementById('toggle-theme-btn');

// Estado
let books = [];
let editIndex = null;
let currentFilter = 'todos';
let editingIdx = null;
let idxToDelete = null;

// Carregar livros do LocalStorage ao iniciar
window.addEventListener('DOMContentLoaded', () => {
  books = JSON.parse(localStorage.getItem('books')) || [];
  renderBooks();
  updateStats();

  // Tema salvo
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    if (toggleThemeBtn) toggleThemeBtn.textContent = '☀️ Modo Claro';
  } else if (localStorage.getItem('theme') === 'light') {
    document.body.classList.remove('dark');
    if (toggleThemeBtn) toggleThemeBtn.textContent = '🌙 Modo Escuro';
  }
});

// Adicionar novo livro
if (bookForm) {
  bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = bookForm.title.value.trim();
    const author = bookForm.author.value.trim();
    const year = bookForm.year.value.trim();
    const cover = bookForm.cover.value.trim();
    const status = bookForm.status.value;

    if (!title || !author || !year) return;

    const book = { title, author, year, cover, status };
    books.push(book);

    saveAndRender();
    bookForm.reset();
  });
}

// Cancelar edição do formulário principal (não usado com modal, mas mantido para compatibilidade)
if (cancelEditBtn) {
  cancelEditBtn.addEventListener('click', () => {
    editIndex = null;
    bookForm.reset();
    addBookBtn.textContent = 'Adicionar';
    cancelEditBtn.style.display = 'none';
  });
}

// Filtrar livros
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderBooks();
  });
});

// Exportar JSON
if (exportJsonBtn) {
  exportJsonBtn.addEventListener('click', () => {
    const dataStr = JSON.stringify(books, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'biblioteca.json';
    a.click();
    URL.revokeObjectURL(url);
  });
}

// Delegação de eventos para botões Editar/Excluir
if (booksList) {
  booksList.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    const card = btn.closest('.book-card');
    if (!card) return;
    const idx = Number(card.dataset.index);
    if (btn.classList.contains('btn--edit')) {
      openEditModal(idx);
    }
    if (btn.classList.contains('btn--delete')) {
      openConfirmModal(idx);
    }
  });
}

// Abrir modal de edição e preencher dados
function openEditModal(idx) {
  const book = books[idx];
  editTitle.value = book.title;
  editAuthor.value = book.author;
  editYear.value = book.year;
  editCover.value = book.cover;
  editStatus.value = book.status;
  editingIdx = idx;
  editModal.style.display = 'flex';
}

// Fechar modal de edição
if (closeModalBtn) {
  closeModalBtn.onclick = () => {
    editModal.style.display = 'none';
    editingIdx = null;
  };
}

// Salvar edição do livro pelo modal
if (editBookForm) {
  editBookForm.onsubmit = function(e) {
    e.preventDefault();
    const book = {
      title: editTitle.value.trim(),
      author: editAuthor.value.trim(),
      year: editYear.value.trim(),
      cover: editCover.value.trim(),
      status: editStatus.value
    };
    if (editingIdx !== null) {
      books[editingIdx] = book;
      saveAndRender();
      editModal.style.display = 'none';
      editingIdx = null;
    }
  };
}

// Fechar modal de edição ao clicar fora do conteúdo
window.addEventListener('click', function(event) {
  if (event.target === editModal) {
    editModal.style.display = 'none';
    editingIdx = null;
  }
  if (event.target === confirmModal) {
    idxToDelete = null;
    confirmModal.style.display = 'none';
  }
});

// ----------- MODAL DE CONFIRMAÇÃO DE EXCLUSÃO -----------

// Abrir modal de confirmação
function openConfirmModal(idx) {
  idxToDelete = idx;
  confirmModal.style.display = 'flex';
}

// Confirmar exclusão
if (confirmDeleteBtn) {
  confirmDeleteBtn.onclick = function() {
    if (idxToDelete !== null) {
      books.splice(idxToDelete, 1);
      saveAndRender();
      idxToDelete = null;
      confirmModal.style.display = 'none';
    }
  };
}

// Cancelar exclusão
if (cancelDeleteBtn) {
  cancelDeleteBtn.onclick = function() {
    idxToDelete = null;
    confirmModal.style.display = 'none';
  };
}

// Fechar modal ao clicar no X
if (closeConfirmModalBtn) {
  closeConfirmModalBtn.onclick = function() {
    idxToDelete = null;
    confirmModal.style.display = 'none';
  };
}

// --------------------------------------------------------

// Renderizar livros
function renderBooks() {
  booksList.innerHTML = '';
  let filteredBooks = books;
  if (currentFilter === 'lido') {
    filteredBooks = books.filter(b => b.status === 'lido');
  } else if (currentFilter === 'nao-lido') {
    filteredBooks = books.filter(b => b.status === 'nao-lido');
  }

  if (filteredBooks.length === 0) {
    booksList.innerHTML = '<p style="width:100%;text-align:center;color:#888;">Nenhum livro encontrado.</p>';
    updateStats();
    return;
  }

  filteredBooks.forEach((book, idx) => {
    const realIdx = books.indexOf(book);
    const card = document.createElement('div');
    card.className = 'book-card';
    card.dataset.index = realIdx;

    // Capa
    const coverDiv = document.createElement('div');
    coverDiv.className = 'book-card__cover';
    if (book.cover) {
      const img = document.createElement('img');
      img.src = book.cover;
      img.alt = `Capa de ${book.title}`;
      img.className = 'book-card__img';
      coverDiv.appendChild(img);
    } else {
      coverDiv.innerHTML = '<span style="color:#aaa;font-size:0.9rem;">Sem capa</span>';
    }

    // Info
    const infoDiv = document.createElement('div');
    infoDiv.className = 'book-card__info';
    infoDiv.innerHTML = `
      <h3 class="book-card__title">${book.title}</h3>
      <p class="book-card__author"><strong>Autor:</strong> ${book.author}</p>
      <p class="book-card__year"><strong>Ano:</strong> ${book.year}</p>
      <p class="book-card__status"><strong>Status:</strong>
        <span class="book-card__status-value ${
          book.status === 'lido' ? 'book-card__status-value--read' : 'book-card__status-value--unread'
        }">${book.status === 'lido' ? 'Lido' : 'Não lido'}</span>
      </p>
    `;

    // Ações
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'book-card__actions';
    actionsDiv.innerHTML = `
      <button class="btn btn--edit" type="button">Editar</button>
      <button class="btn btn--delete" type="button">Excluir</button>
    `;

    card.appendChild(coverDiv);
    card.appendChild(infoDiv);
    card.appendChild(actionsDiv);

    booksList.appendChild(card);
  });

  updateStats();
}

// Salvar no LocalStorage e atualizar tela
function saveAndRender() {
  localStorage.setItem('books', JSON.stringify(books));
  renderBooks();
}

// Atualizar contadores e barra de progresso
function updateStats() {
  const lidos = books.filter(b => b.status === 'lido').length;
  const naoLidos = books.filter(b => b.status === 'nao-lido').length;
  readCount.textContent = lidos;
  unreadCount.textContent = naoLidos;
  const total = books.length;
  const percent = total ? Math.round((lidos / total) * 100) : 0;
  if (progressBarFill) {
    progressBarFill.style.width = percent + '%';
  }
}

// Alternância de tema manual
if (toggleThemeBtn) {
  toggleThemeBtn.onclick = function() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    toggleThemeBtn.textContent = isDark ? '☀️ Modo Claro' : '🌙 Modo Escuro';
  };
}