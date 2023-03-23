//Yapılacaklar
// element ekleme 
// element silme 
// yapıldı işaretlenmesini sağlayan fonksiyon
// boş karakter kontrolü ve hata mesajı
// hiçbir şey yazılmadığında hata mesajı
// bootstrap toast 
// bonus local storage 


// Öğe ekleme işlemi
const inputTodo = document.getElementById('inputTodo');
const btnAdd = document.getElementById('btn-add');
const todoList = document.getElementById('todoList');

btnAdd.addEventListener('click', function(e) {
  e.preventDefault();

  if (inputTodo.value !== '') {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(inputTodo.value));

    const deleteBtn = document.createElement('span');
    deleteBtn.className = 'float-end deleteBtn';
    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
    inputTodo.value = '';
    
    
    const addedToast = new bootstrap.Toast(document.getElementById('addedToast'));
    addedToast.show();
  } else {
    // Boş ekleme uyarısı
    const emptyToast = new bootstrap.Toast(document.getElementById('emptyToast'));
    emptyToast.show();
  }

  }
);

// Öğe silme işlemi
todoList.addEventListener('click', function(e) {
  if (e.target.classList.contains('deleteBtn')) {
    e.target.parentElement.remove();
  }
});

// öğe yapıldı işaretleme

todoList.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
});
