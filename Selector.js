
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

//Leave a rating with keyboard or click
$(document).ready(function(){
    let currentRating = 0;
    //Handle mouse clicks for stars 
    $('.star').click(function(){
        const rating = $(this).data('rating');

        if(currentRating ===1 && currentRating===1){
            currentRating = 0;
            updateRating(0);
        }else{
            currentRating = rating;
            updateRating(rating);
        }
    });
    //Allow users to press numbers 0-5 (0 is to clear)
    $(document).keypress(function(e){
        const rating = parseInt(e.key);
        if(rating >= 0 && rating <= 5){
            currentRating = rating;
            updateRating(rating);
        }
    });

    //Handle save button click
    $('#saveRating').click(function(){
        const name = $('#userName').val().trim();
        if(!name){
            alert('Please enter your name');
            return;
        }
        if(!currentRating){
            alert('Please select a rating');
            return;
        }
        //Add rating to saved ratings section
        $('#savedRatings').append(`
            <div>
            ${name} rated this recipe: ${currentRating} ${'★'.repeat(currentRating)}${'☆'.repeat(5-currentRating)}
            </div>
        `);

        //Reset the form
        $('#userName').val('');
        currentRating = 0;
        updateRating(0);
    })

    //Update Rating Function
    function updateRating(rating){
        //reset stars 
        $('.star').text('☆').removeClass('selected');

        //Fill in selected stars 
        $('.star').each(function(){
            if($(this).data('rating') <= rating){
                $(this).text('★').addClass('selected');
            }
        });
    }
});
