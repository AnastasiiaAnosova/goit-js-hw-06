const categoriesList = document.querySelectorAll('.item');
console.log('Number of categories:${categoriesList.length}');
categoriesList.forEach(element => { 
    console.log('Category:${element.firstChild.textContent}');
    console.log('Elements:${element.lastElementChild.children.length}');
})