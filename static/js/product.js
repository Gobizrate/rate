import formatRupiah from "/src/helpers/formatRupiah.js";

export default function products() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  fetch(
    "https://asia-southeast2-awangga.cloudfunctions.net/jualin/menu",
    requestOptions
  )
    .then(async (res) => {
      const status = res.status;
      const result = await res.json();

      // Log the fetched data to the console
      console.log("Fetched data:", result);

      if (status === 200) {
        const productsContainer = document.querySelector(".grid"); // Select grid container

        result.data.forEach((product) => {
          // Log each product to verify the data
          console.log("Adding product:", product);

          // Create product card container
          const productCard = document.createElement("div");
          productCard.style.backgroundImage = `url(${product.image})`;
          productCard.style.backgroundSize = "cover";
          productCard.classList.add("relative", "rounded-lg");

          // Badge Top
          const badgeTop = document.createElement("div");
          badgeTop.classList.add(
            "absolute", "top-2", "right-2", "bg-red-500", "text-white",
            "text-xs", "font-semibold", "px-2", "py-1", "rounded", "transform",
            "rotate-25"
          );
          badgeTop.textContent = "Top";

          // Content Card
          const contentCard = document.createElement("div");
          contentCard.classList.add("text-white", "bg-gradient-to-t", "from-transparent", "via-transparent", "to-black", "p-8", "h-80", "rounded-lg");

          const productName = document.createElement("p");
          productName.classList.add("font-semibold");
          productName.textContent = product.menu;

          const storeName = document.createElement("p");
          storeName.classList.add("font-thin", "text-xs", "text-gray-400");
          storeName.textContent = "Nama Toko"; // You can replace this with actual store name if available

          const ratingStars = document.createElement("div");
          ratingStars.classList.add("flex", "w-4", "h-4", "gap-1");

          // Assuming rating is a number and you want to display star icons based on that
          for (let i = 0; i < Math.round(product.rating); i++) {
            const star = document.createElement("img");
            star.src = "data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23d8b11e' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e";
            star.alt = "Star Rating";
            ratingStars.appendChild(star);
          }

          const price = document.createElement("p");
          price.classList.add("text-sm");
          price.textContent = formatRupiah(product.price);

          const discount = document.createElement("p");
          discount.classList.add("text-sm");
          discount.textContent = formatRupiah(product.diskon);

          // Add "Rate" and "Pesan" buttons
          const buttonContainer = document.createElement("div");
          buttonContainer.classList.add("flex", "justify-between", "self-baselind", "items-center", "align-center");

          const rateButton = document.createElement("a");
          rateButton.href = "#";
          rateButton.classList.add("text-white", "bg-green-500", "rounded-md", "px-4", "py-1", "hover:bg-green-600");
          rateButton.textContent = "Rate";

          const orderButton = document.createElement("a");
          orderButton.href = "#";
          orderButton.classList.add("text-white", "border-2", "rounded-md", "px-4", "py-1", "hover:bg-green-600", "hover:border-0");
          orderButton.textContent = "Pesan";

          buttonContainer.appendChild(rateButton);
          buttonContainer.appendChild(orderButton);

          contentCard.appendChild(productName);
          contentCard.appendChild(storeName);
          contentCard.appendChild(ratingStars);
          contentCard.appendChild(price);
          contentCard.appendChild(discount);
          contentCard.appendChild(buttonContainer);

          // Append badge and content to product card
          productCard.appendChild(badgeTop);
          productCard.appendChild(contentCard);

          // Append the product card to the grid container
          productsContainer.appendChild(productCard);

          // Log the added product card to confirm it's added to the DOM
          console.log("Product card added to DOM:", product.menu);
        });
      } else {
        console.error("Failed to fetch products:", status);
      }
    })
    .catch((error) => console.error("Error:", error));
}
