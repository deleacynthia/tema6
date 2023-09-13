const destinations = ['Paris', 'London', 'Prague','Rome','Vienna','New York', 'Tokyo', 'Sydney'];

const replaceImages = [
    'images/accommodation/replace1.jpg',
    'images/accommodation/replace2.jpg',
    'images/accommodation/replace3.jpg',
    'images/accommodation/replace4.jpg',
    'images/accommodation/replace5.jpg',
    'images/accommodation/replace6.jpg'
]

document.addEventListener('DOMContentLoaded', function () {
    populateDropdowns();
    populateAccommodations();
    
    document.getElementById('searchButton').addEventListener('click', function() {
        shuffleArray(cardDetails);
        populateAccommodations(); 
    });
    

    let cardImages = document.querySelectorAll('.card-img-top');
    cardImages.forEach((img, index) => {
        let originalSrc = img.src;

        img.addEventListener('mouseover', function() {
            img.src = replaceImages[index];
        });

        img.addEventListener('mouseout', function() {
            img.src = originalSrc;
        });
    });
    
    $("#depart").datepicker({
        dateFormat: "mm/dd/yy",
        minDate: 0
    });

    $(".input-group-text").on("click", function() {
        $("#depart").datepicker("show");
    });

    let cardButtons = document.querySelectorAll('.card .btn');
    cardButtons.forEach((btn, index) => {
        btn.addEventListener('click', function(event) {
            event.preventDefault(); 
            applyAnimation(btn, index);
        });
    });
});


function populateDropdowns() {
    const leaveFromDropdown = document.getElementById('leaveFrom');
    const destinationDropdown = document.getElementById('destination');
    
    destinations.forEach(destination => {
        let option = document.createElement('option');
        option.text = destination;
        option.value = destination;
        
        leaveFromDropdown.add(option.cloneNode(true));
        destinationDropdown.add(option.cloneNode(true));
    });
}

const cardDetails = [
    {
        noOfGuests: "Entire Apratment - 1 Guests - 1 Beds",
        title: "Amazing Apartment",
        description: "A beautiful apartment in the heart of the city. Perfect for solo travelers.",
        buttonText: "FROM / NIGHT"
    },
    {
        noOfGuests: "Entire Apratment - 4 Guests - 2 Beds",
        title: "Luxury Suite",
        description: "Enjoy the city with our luxurious suite. Suitable for families.",
        buttonText: "FROM / NIGHT"
    },
    {
        noOfGuests: "Entire Apratment - 3 Guests - 2 Beds",
        title: "Budget Room",
        description: "Traveling on a budget? This room is perfect for you.",
        buttonText: "FROM / NIGHT "
    },
    {
        noOfGuests: "Entire Apratment - 2 Guests - 1 Beds",
        title: "Seaside Villa",
        description: "Stay at our villa with an amazing sea view. Perfect for vacations.",
        buttonText: "FROM / NIGHT"
    },
    {
        noOfGuests: "Entire Apratment - 3 Guests - 2 Beds",
        title: "Modern Loft",
        description: "Experience the modern living with our newly designed loft.",
        buttonText: "FROM / NIGHT"
    },
    {
        noOfGuests: "Entire Apratment - 3 Guests - 2 Beds",
        title: "Classic Residence",
        description: "Enjoy a classic ambiance with our vintage styled residence.",
        buttonText: "FROM / NIGHT"
    }
];

function populateAccommodations() {
    const accommodationsSection = document.getElementById('accommodations');
    accommodationsSection.innerHTML = ''; 
    
    for (let i = 0; i < cardDetails.length; i++) {
        const imageSrc = `images/accommodation/room${i+1}.jpg`;
        const cardDetail = cardDetails[i];
        const card = `
        <div class="col-md-4">
            <div class="card mb-4">
                <img src="${imageSrc}" class="card-img-top">
                <div class="card-body">
                    <h6 class="card-subtitle">${cardDetail.noOfGuests}</h6>
                    <h5 class="card-title">${cardDetail.title}</h5>
                    <p class="card-text">${cardDetail.description}</p>
                    <a href="#" class="btn btn-primary">${cardDetail.buttonText}</a>
                </div>
            </div>
        </div>`;
        accommodationsSection.innerHTML += card;
    }
    attachImageHoverEffect();

}


function attachImageHoverEffect() {
    let cardImages = document.querySelectorAll('.card-img-top');
    cardImages.forEach((img, index) => {
        let originalSrc = img.src;

        img.addEventListener('mouseover', function() {
            img.src = replaceImages[index % replaceImages.length]; 
        });

        img.addEventListener('mouseout', function() {
            img.src = originalSrc;
        });
    });
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


function applyAnimation(element, index) {
    switch(index % 3) { 
        case 0:
            element.classList.add('rotate-animation');
            setTimeout(() => {
                element.classList.remove('rotate-animation');
            }, 2000); 
            break;
        case 1:
            element.classList.add('fade-animation');
            setTimeout(() => {
                element.classList.remove('fade-animation');
            }, 2000);
            break;
        case 2:
            element.classList.add('scale-animation');
            setTimeout(() => {
                element.classList.remove('scale-animation');
            }, 2000); 
            break;
    }
}

$(document).ready(function() {
    let isCardVisible = true;  

    $("#companyLink").on("click", function() {
        if (isCardVisible) {
            $(".card").first().hide();  
        } else {
            $(".card").first().show();  
        }
        isCardVisible = !isCardVisible;  
    });
});


