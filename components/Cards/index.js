// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function articlesMain(art){
    const
        card = document.createElement('div'),
            headline = document.createElement('div'),
            author = document.createElement('div'),
                imageContainer = document.createElement('div'),
                    image = document.createElement('img'),
                authorsName = document.createElement('span');
    
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imageContainer);
    imageContainer.appendChild(image);
    author.appendChild(authorsName);

    card.classList.add('card');
    headline.classList.add('headline');
    headline.textContent = art.headline;
    author.classList.add('author');
    imageContainer.classList.add('img-container');
    image.src = art.authorPhoto;
    authorsName.textContent = art.authorName;

    return card;

            
}

const containerCard = document.querySelector('.cards-container')

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res => {
        console.log(res.data.articles);
        let array = res.data.articles;

        for(topic in array){
            array[topic].forEach(article => {
                containerCard.appendChild(articlesMain(article))
            })
        }
    })
    .catch(err => console.log(err));