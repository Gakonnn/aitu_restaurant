// 1 Objects and Methods
        document.addEventListener('DOMContentLoaded', () => {
            const restaurant = {
                name: "AITU Restaurant",
                location: "Astana IT University",
                rating: 4.7,
                cuisine: "Fusion",
                
                displayDetails: function() {
                    const detailsContainer = document.getElementById('restaurant-details');
                    detailsContainer.innerHTML = `
                        <h3>${this.name}</h3>
                        <p><strong>Location:</strong> ${this.location}</p>
                        <p><strong>Cuisine:</strong> ${this.cuisine}</p>
                        <p><strong>Rating:</strong> ${this.rating} ★</p>
                    `;
                }
            };

            restaurant.displayDetails();


            // 2. Arrays and Loops
            const itemList = ["Atmosphere", "History", "Traditions", "Entertainment", "Sincerity"];
            const listContainer = document.getElementById('list-items');

            itemList.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                li.classList.add('list-group-item');
                listContainer.appendChild(li);
            });

            // 3. Higher-Order Function
            const filterItems = (array, filterFunc) => {
                return array.filter(filterFunc);
            };

            const filteredItems = filterItems(itemList, item => item.includes('a'));

            filteredItems.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item + ' (filtered)';
                li.classList.add('list-group-item', 'list-group-item-warning');
                listContainer.appendChild(li);
            });

            // 4. Playing Sounds
            const playSoundBtn = document.getElementById('play-sound-btn');
            playSoundBtn.addEventListener('click', () => {
                const sound = new Audio('https://www.soundjay.com/buttons/button-23.mp3');
                sound.play();
            });

            // 5. Animations
            const animateImage = document.getElementById('animate-image');
            const animateImageBtn = document.getElementById('animate-image-btn');

            animateImageBtn.addEventListener('click', () => {
                animateImage.style.transform = 'scale(1.5)';
                setTimeout(() => {
                    animateImage.style.transform = 'scale(1)';
                }, 500);
            });

        



            // 6. Displaying date and time
            const dateTimeDisplay = document.getElementById('dateTimeDisplay');
            const updateDateTime = () => {
                const now = new Date();
                dateTimeDisplay.textContent = now.toLocaleString();
            };



            setInterval(updateDateTime, 1000);
            updateDateTime(); // Initial call to display immediately
        });