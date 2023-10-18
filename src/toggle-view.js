const toggleViewMode = document.getElementById('toggle-view-mode');

toggleViewMode.addEventListener('click', changeViewMode);

function changeViewMode() {
    document.body.classList.toggle('dark-active')
}