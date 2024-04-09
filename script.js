const loadPhone = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  displayPhones(phones);
};

const displayPhones = (phones) => {
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.textContent = "";

  const phonesLength = phones.length;
  console.log(phonesLength);
  const showAllContainer = document.getElementById("showAll-container");
  if (phonesLength > 12) {
    showAllContainer.classList.remove("hidden");
  } else {
    showAllContainer.classList.add("hidden");
  }

  phones = phones.slice(0, 12);

  phones.forEach((phone) => {
    const phoneCart = document.createElement("div");
    phoneCart.classList = `card card-compact px-4 bg-base-100 shadow-xl `;
    phoneCart.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">${phone.brand}</h2>
            <p>${phone.phone_name}</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `;
    phoneContainer.appendChild(phoneCart);
    loader(false);
  });
};

const handleClick = () => {
  const inputField = document.getElementById("search-field");
  const inputFieldValue = inputField.value;
  inputField.value = "";
  loadPhone(inputFieldValue);
  loader(true);
};

const loader = (isLoading) => {
  const loaderDiv = document.getElementById("loader-div");
  if(isLoading === true){
    loaderDiv.classList.remove("hidden");
  }
  else{
    loaderDiv.classList.add("hidden");
  }

}