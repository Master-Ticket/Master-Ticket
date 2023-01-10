document.getElementById('searchButton').addEventListener('click', () => {
const search = document.getElementById('search').value;
console.log(search);
window.location.href = `/search?postalCode=${search}`;
})
