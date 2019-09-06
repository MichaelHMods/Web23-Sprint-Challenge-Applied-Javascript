// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>



// function to create the tabs
function theTabs(topics){
    let tabTopic = document.createElement('div');
    tabTopic.classList.add('tab');
    tabTopic.textContent = topics;

    return tabTopic;
}
// const to create the place to put the tabs
const topics = document.querySelector('.topics');


// call to axios
axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then(res => {
        console.log(res.data.topics);
        res.data.topics.forEach(topic => {
            topics.appendChild(theTabs(topic))
            console.log(topic)
        })
        
    })
    .catch((err) => {console.log(err)});




