const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');


tabItems.forEach(tabItem => tabItem.addEventListener('click', selectItem));

function selectItem(event) {
    //Removes the other bottom borders
    tabItems.forEach(tabItem => tabItem.classList.remove('tab-bottom-border'));

    //Add bottom border - using a CSS class
    this.classList.add('tab-bottom-border');

    hideAllSections();

    //shows the correct section. the argument is the id of the section
    showSection(this.id + '-content');

    location.href = '#this-is-netflix';
}

function hideAllSections () {
    tabContentItems.forEach(tabContent => tabContent.style.display = 'none');
}

function showSection(elementId) {
    const arrayOfSections = [...tabContentItems];
    const element = arrayOfSections.filter(item => item.id === elementId)[0];
    if(element.id === 'tab-1-content') {
        element.style.display = 'grid';
    } else {
        element.style.display = 'flex';
    }
}