// console.log("Script File Added")
const loadPhone = async() => {
    const res = await fetch("https://openapi.programming-hero.com/api/phones?search=iphone");
    const data = await res.json();
    console.log(data);
}

const anotherLoadPhone = () => {
    fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    .then (res => res.json())
    .then (data => console.log(data))
}

loadPhone();
anotherLoadPhone();