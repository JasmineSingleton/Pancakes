
function showContent(sectionId, event){
    event.preventDefault();
    //Hide sections initially
    document.querySelectorAll('.content-section').forEach(section =>{
        section.classList.remove('active');
    });
    //Remove active class from buttons
    document.querySelectorAll('.nav-button').forEach(button =>{
        button.classList.remove('active');
    })
    //Show the section that is selected 
    document.getElementById(sectionId).classList.add('active');
    event.target.classList.add('active');
}
