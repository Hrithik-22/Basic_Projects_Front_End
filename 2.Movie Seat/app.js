const container=document.querySelector('.container');
const seats=document.querySelectorAll('.row .seat:not(.occupied)');
const movieSelect=document.getElementById('movie');
const count=document.getElementById('count');
const total=document.getElementById('total');


let ticketPrice=+movieSelect.value;


populateUi();

function setMovieData(movieIndex,moviePrice){
    localStorage.setItem('selectedMovieIndex',movieIndex);
    localStorage.setItem('selectedMoviePrice',moviePrice);
}

//update count and total
function updateSelectedCount(){
    const selectedSeats=document.querySelectorAll('.row .seat.selected');

    const selectedSeatsCount=selectedSeats.length;

    const seatsIndex=[...selectedSeats].map(seat=>[...seats].indexOf(seat));

    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));

    count.innerText=selectedSeatsCount;
    total.innerText=selectedSeatsCount*ticketPrice;
}


//populate the seats by using local storage

function populateUi(){
    const selectedSeats=JSON.parse(localStorage.getItem('selectedSeats'));
    if(selectedSeats!==null && selectedSeats.length>0){
        seats.forEach((seat,index)=>{
            if(selectedSeats.indexOf(index)>-1){
                seat.classList.add('selected');
            }
        })
    }

    const selectedMovieIndex=localStorage.getItem('selectedMovieIndex');
    if(selectedMovieIndex!==null){
        movieSelect.selectedIndex=selectedMovieIndex;
    }
}


//movieselect event
movieSelect.addEventListener('change',(e)=>{
    ticketPrice=+movieSelect.value;
    updateSelectedCount();

    setMovieData(e.target.selectedIndex,e.target.value);
});


//seat booking click event

container.addEventListener('click',(e)=>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
    }

    updateSelectedCount();
});


//initialize  count and total
updateSelectedCount();
