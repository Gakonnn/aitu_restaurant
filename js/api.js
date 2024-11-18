function filterProducts() {
    const filter = document.getElementById('filter').value; // Получаем значение выбранного фильтра
    const productList = document.getElementById('productList');
    const baseUrl = 'https://free-food-menus-api-two.vercel.app';

    // Показываем сообщение о загрузке
    productList.innerHTML = '<p>Loading products...</p>';

    // Формируем URL
    const apiUrl = filter === 'all' ? `${baseUrl}/burgers` : `${baseUrl}/${filter}`;

    // Запрашиваем данные с API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Очищаем список товаров
            productList.innerHTML = '';

            // Проверяем, есть ли данные
            if (data.length === 0) {
                productList.innerHTML = '<p>No products found.</p>';
                return;
            }

            // Отображаем товары
            data.forEach(item => {
                const productCard = document.createElement('div');
                productCard.classList.add('col-lg-3', 'col-md-6', 'product');
                productCard.setAttribute('data-price', item.price); // Устанавливаем атрибут data-price
                
                productCard.innerHTML = `
                    <div class="card h-100">
                        <img src="${item.img}" class="card-img-top" alt="${item.name}">
                        <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                            <p class="card-text">${item.dsc}</p>
                            <p class="card-price">$${item.price}</p>
                            <a href="order.html" class="btn btn-primary">Order Now</a>
                        </div>
                    </div>
                `;
                productList.appendChild(productCard);
            });

        })
        .catch(error => {
            console.error('Error fetching products:', error);
            productList.innerHTML = '<p>Failed to load products. Please try again later.</p>';
        });
}
