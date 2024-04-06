// console.log("Script File Added")
const loadPhone = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=iphone"
  );
  const data = await res.json();
  const phones = data.data;
  displayPhones(phones);
};

const displayPhones = (phones) => {
  const phoneContainer = document.getElementById("phone-container");
  phones.forEach((phone) => {
    console.log(phone);
    const phoneCart = document.createElement("div");
    phoneCart.classList = `card card-compact mx-10 bg-base-100 shadow-xl `;
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
  });
};

loadPhone();
