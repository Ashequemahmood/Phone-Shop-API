const loadPhone = async(searchText) => {
    const URL = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    try{
        const res = await fetch(URL);
        const data = await res.json();
        displayPhone(data.data);
    }
    catch(error){
        console.log(error);
    }
}

const displayPhone = phones => {
    console.log(phones);
    const phonesContainer = document.getElementById('phone-container');
    phonesContainer.innerText = '';
    // display 20 phone
    phones = phones.slice(0, 10);

    // display no phones
    const noPhone = document.getElementById('no-found-message');
    if(phones.length === 0){
        noPhone.classList.remove('d-none');
    }
    else{
        noPhone.classList.add('d-none');
    }
    phones.forEach(phone => {
        console.log(phone);
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
            <div class="card shadow-lg p-4">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                        additional
                        content. This content is a little bit longer.</p>
                        <button onclick = "loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-primary"data-bs-toggle="modal" data-bs-target="#phoneDetailsModal" >Show Details</button>

                     
            </button>
                </div>
            </div>
        `
        phonesContainer.appendChild(phoneDiv);
        
    })

    toggleSpinner(false);
    
}


document.getElementById('btn-search').addEventListener('click', function(){
    toggleSpinner(true);
    const inputField = document.getElementById('input-field');
    const searchText = inputField.value;
    console.log(inputField);
    loadPhone(searchText);
    
})

// enter button works
// document.getElementById('input-field').addEventListener('keypress', function (e) {
//     console.log(e.key);
//     if (e.key === 'Enter') {
//       // code for enter
      
//     }
// });

const toggleSpinner = isLoading => {
    if(isLoading){
        const spinner = document.getElementById('spinner');
        spinner.classList.remove('d-none');
    }
    else{
        spinner.classList.add('d-none');
    }
} 

const loadPhoneDetails = async (id) => {
    const URL = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(URL);
    const data = await res.json();
    displayPhoneDetails(data.data);
}

const displayPhoneDetails = phone => {
    console.log(phone);
}

loadPhone(apple);