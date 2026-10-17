const products = [
  {
    name: "Modest Floral Dress",
    img: "Images/dress1.jpg",
    price: "₹2999",
    oldPrice: "₹4999",
    discount: "50% OFF"
  },
  {
    name: "Modest Party Gown",
    img: "Images/dress2.jpg",
    price: "₹1499",
    oldPrice: "₹2499",
    discount: "40% OFF"
  },
  {
    name: "Modest Casual Kurti",
    img: "Images/dress3.webp",
    price: "₹5999",
    oldPrice: "₹7999",
    discount: "40% OFF"
  }
];

const container = document.getElementById("products");

products.forEach(item => {
  container.innerHTML += `
    <div class="card">
      <img src="${item.img}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p><span class="price">${item.price}</span> <span class="old-price">${item.oldPrice}</span></p>
      <p><span class="discount">${item.discount}</span></p>
    </div>
  `;
});