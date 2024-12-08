const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

function showTab(tabName) {
    // Hide all tabs
    contents.forEach(content => content.classList.remove('active'));

    const activeTab = document.getElementById(tabName);
    activeTab.classList.add('active');
}

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        const tabName = e.target.getAttribute('data-tab');
        showTab(tabName);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    showTab('home');
});