alert("Chocolate JS Loaded");

const params = new URLSearchParams(window.location.search);
const type = params.get("type");

const chocolateData = {
  dark: {
    title: "Dark Chocolate",
    desc: "Dark chocolate has a rich cocoa flavor and contains less sugar. It is known for its health benefits."
  },
  milk: {
    title: "Milk Chocolate",
    desc: "Smooth, creamy and loved by everyone."
  },
  white: {
    title: "White Chocolate",
    desc: "White chocolate: soft, sweet, and quietly addictive."
  },
  cocoa: {
    title: "Cocoa Powder",
    desc: "Rich, pure cocoa powder made from finely ground cocoa beans."
  }
};

const chocolateProducts = {
  dark: [
    {
      name: "70% Dark Chocolate Bar",
      price: "₹199",
      img: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52"
    },
    {
      name: "Premium Dark Chocolate",
      price: "₹349",
      img: "https://images.unsplash.com/photo-1548907040-4baa42d10919"
    },
    {
      name: "Organic Dark Chocolate",
      price: "₹499",
      img: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60"
    },
    {
      name: "85% Dark Chocolate Bar",
      price: "₹299",
      img: "https://img.freepik.com/free-photo/close-up-view-delicious-chocolate-wooden-table_23-2148746669.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
      name: "Sugar-Free Dark Chocolate",
      price: "₹279",
      img: "https://www.embassychocolate.com/hs-fs/hubfs/What%20Is%20Dark%20Chocolate.jpg?width=521&name=What%20Is%20Dark%20Chocolate.jpg"
    },
    {
      name: "Belgian Dark Chocolate",
      price: "₹549",
      img: "https://media.istockphoto.com/id/911742664/photo/handmade-dark-chocolates-iii.jpg?s=612x612&w=0&k=20&c=M6O9YhcQSgE0fVuzaYYtp8-KF-aG8ltMj_sSefTGAb0="
    },
    {
      name: "Almond Dark Chocolate",
      price: "₹399",
      img: "https://www.allrecipes.com/thmb/grLE_wx1hyvu8oafcX8N0-Evs8w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4391970-dark-chocolate-almond-rocks-Buckwheat-Queen-4x3-1-55c8b1fee23544268b3ba39c2dc09d34.jpg"
    },
    {
      name: "Sea Salt Dark Chocolate",
      price: "₹329",
      img: "https://gertrudehawkchocolates.com/media/catalog/product/d/a/dark-chocolate-sea-salt-caramels.jpg.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=620&width=620&canvas=620:620"
    }
  ],

  milk: [
    {
      name: "Classic Milk Chocolate Bar",
      price: "₹149",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROuYccNqaEJMgjOMXk-fpu24K1Pyn4DbUfzw&s"
    },
    {
      name: "Creamy Milk Chocolate",
      price: "₹199",
      img: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52"
    },
    {
      name: "Almond Milk Chocolate",
      price: "₹249",
      img: "https://images.unsplash.com/photo-1548907040-4baa42d10919"
    },
    {
      name: "Hazelnut Milk Chocolate",
      price: "₹299",
      img: "https://www.delscookingtwist.com/wp-content/uploads/2023/12/Chocolate-Hazelnut-Truffles_1.jpg"
    },
    {
      name: "Silky Smooth Milk Chocolate",
      price: "₹179",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaxdmwFnfZVOJEm9xcwKsMwTC7aPceO1E64g&s"
    },
    {
      name: "Caramel Filled Milk Chocolate",
      price: "₹229",
      img: "https://sugargeekshow.com/wp-content/uploads/2019/06/chocolate-caramel-candy-featured.jpg"
    },
    {
      name: "Rich Dairy Milk Chocolate",
      price: "₹159",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRctfIIVioR7TK5ZUedDXoHavJBg5f83Svxow&s"
    },
    {
      name: "Premium Belgian Milk Chocolate",
      price: "₹349",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSskuC4OaWN52hmVGRif-UrXQWxoP3TTpEbsg&s"
    },
    {
      name: "Crunchy Milk Chocolate Bites",
      price: "₹189",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Rhk7Nvftlvrum9Hpf0dWeFa6YHA0RxftaA&s"
    },
    {
      name: "Signature Milk Chocolate Slab",
      price: "₹399",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfXCmPeSf2k6PA5v901TDoUqN21hMbMWnApw&s"
    }
  ],

    white: [
    {
      name: "Classic White Chocolate Bar",
      price: "₹149",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROuYccNqaEJMgjOMXk-fpu24K1Pyn4DbUfzw&s"
    },
    {
      name: "Creamy White Chocolate",
      price: "₹199",
      img: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52"
    },
    {
      name: "Almond White Chocolate",
      price: "₹249",
      img: "https://images.unsplash.com/photo-1548907040-4baa42d10919"
    },
    {
      name: "Belgian White Chocolate",
      price: "₹349",
      img: "https://www.delscookingtwist.com/wp-content/uploads/2023/12/Chocolate-Hazelnut-Truffles_1.jpg"
    },
    {
      name: "Vanilla White Chocolate",
      price: "₹189",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaxdmwFnfZVOJEm9xcwKsMwTC7aPceO1E64g&s"
    },
    {
      name: "White Chocolate Truffles",
      price: "₹299",
      img: "https://sugargeekshow.com/wp-content/uploads/2019/06/chocolate-caramel-candy-featured.jpg"
    },
    {
      name: "Premium White Chocolate Slab",
      price: "₹399",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRctfIIVioR7TK5ZUedDXoHavJBg5f83Svxow&s"
    }
  ],

  cocoa : [
    {
      name: "Pure cocoa powder",
      price: "₹199",
      img: "https://prd-upmarket.s3.ap-south-1.amazonaws.com/AA0001/generated/ar1x1/large/ArtisanalCocoaPowder-Large.jpg"
    },
    {
      name: "Unsweetened Cocoa Powder",
      price: "₹249",
      img: "https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/article_thumbnails/BigBead/health_benefits_of_cocoa_powder_bigbead/1800x1200-health-benefits-of-cocoa-powder-bigbead-alt.jpg"
    },
    {
      name: "Dutch Process Cocoa Powder",
      price: "₹299",
      img: "https://www.shutterstock.com/image-photo/composition-bowl-cocoa-powder-on-600nw-2056990721.jpg"
    },
    {
      name: "Organic Cocoa Powder",
      price: "₹349",
      img: "https://4.imimg.com/data4/KY/RL/GLADMIN-186087/alkalized-cocoa-powder-500x500.png"
    },
    {
      name: "Dark Cocoa Powder",
      price: "₹279",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlggB3b8BW2V4Ml5bD-T6uCc1IsFHDc8n48g&s"
    },
    {
      name: "Premium Baking Cocoa Powder",
      price: "₹399",
      img: "https://m.media-amazon.com/images/I/61lVKaQ1RiL._AC_UF894,1000_QL80_.jpg"
    },
    {
      name: "Artisan Cocoa Powder",
      price: "₹449",
      img: "https://img.freepik.com/free-photo/close-up-mixture-clay-powder_23-2148761898.jpg?semt=ais_hybrid&w=740&q=80"
    }
  ]
};

if (type && chocolateData[type]) {
  document.getElementById("chocolate-title").innerText =
    chocolateData[type].title;

  document.getElementById("chocolate-desc").innerText =
    chocolateData[type].desc;
}
if (type && chocolateData[type]) {
  document.getElementById("chocolate-title").innerText =
    chocolateData[type].title;

  document.getElementById("chocolate-desc").innerText =
    chocolateData[type].desc;
}
if (type && chocolateData[type]) {
  document.getElementById("chocolate-title").innerText =
    chocolateData[type].title;

  document.getElementById("chocolate-desc").innerText =
    chocolateData[type].desc;
}

const cardsContainer = document.getElementById("chocolate-cards");

if (type && chocolateProducts[type]) {
  chocolateProducts[type].forEach(item => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4 product-card";

    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${item.img}" class="card-img-top" alt="${item.name}">
        <div class="card-body text-center">
          <h5>${item.name}</h5>
          <p class="fw-bold text-success">${item.price}</p>
          <button class="btn btn-dark btn-sm">Buy Now</button>
        </div>
      </div>
    `;
    cardsContainer.appendChild(col);
  });
}

function animateProductCards() {
  const cards = document.querySelectorAll(".product-card");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach(card => observer.observe(card));
}

// cards banne ke baad call karo
animateProductCards();

