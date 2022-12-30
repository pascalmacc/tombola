$(function(){

    let all_numbers = [],
    all_selected_numbers = [];

/********************
 * AGGIUNGI 90 NUMERI
 ********************/



for(let count =1; count < 91; count++)
{
    $('#tabella').append(`<span style="animation-delay:0.${count}s;" class="animated zoomIn"> ${count} </span>`);
    //Aggiungi 90 numeri nell'array
    all_numbers.push(count);
}



/******************
 * NUMERI ESTRATTI
 ******************/

$('.estrai-numero').click(function()
{
    
    

        //Getting a random number from all_numbers array
    let selected_number = all_numbers[Math.floor(Math.random() * all_numbers.length)];
        $('.extracted-number').text(selected_number);
        $('.extracted-number').fadeIn();



        //Immmagine card abbinata al numero
        $('#numeri_card').fadeIn().delay(3000).fadeOut(500);
        

        $('#numeri_card').attr('src', `img/numeri_tab/${selected_number}.jpg`);
        let numberSounds = new Audio(`audio/${selected_number}.mp3`);
       
       function playSoundsNumber(){
        numberSounds.play();
       }
       

       playSoundsNumber();

     


    

       
   

    // Removing the seleted number from the all_numbers array so we can get the unique numbers next time

    let remove = all_numbers.indexOf(selected_number);
                 all_numbers.splice(remove, 1);
                 all_selected_numbers.push(selected_number); 
                 all_selected_numbers = all_selected_numbers.slice(-6);  
    
    let array_agg = all_selected_numbers.join('-');
                
                
                    
                 $('#ultimi_5').text(array_agg);

                

                 


 

                
                 
                 
                
               
         


    
    
    





    

                 

/************************************
 * CHANGING STYLE OF SELECTED NUMBERS
 ************************************/

    $('span').each(function()
    {
        let check = all_selected_numbers.includes(parseInt($(this).text()));
        (check) ? $(this).addClass('found') : false
    });

   
   

});



    //OPEN MODAL
    $('.ripristina').click(function() {
        $('.modal').modal('show');
      
       

    });


    $('#close').click(function() {
       
           location.reload();
        
    });



    const muteButton = document.getElementById('muteButton');
    const audio = document.getElementById('myAudio');
    const pauseButton = document.getElementById("playButton");

    playButton.addEventListener('click', function(){
        audio.play();
    })

    muteButton.addEventListener('click', function() {
        audio.muted = !audio.muted;
      });


      



});