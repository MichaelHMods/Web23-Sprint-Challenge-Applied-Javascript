// STEP 1: Create a Header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

    const
    //create containers following the example above
        mainHeader = document.createElement('div'),
        dateSpan = document.createElement('span'),
        mainTitle = document.createElement('h1'),
        tempurature = document.createElement('span');

    // create var for the header-container so we can append to it.     
    headContainer = document.querySelector('.header-container');

    headContainer.appendChild(mainHeader);
    mainHeader.appendChild(dateSpan);
    mainHeader.appendChild(mainTitle);
    mainHeader.appendChild(tempurature);

    mainHeader.classList('header');
    dateSpan.classList('date');
    tempurature.classList('temp');

    return headContainer;


}
