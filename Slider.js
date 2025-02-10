let currentIndex = 0;
        const slides = document.querySelector('.slides');

        //Function to update the slide position
        function showSlide(index) {
            if (index < 0) {
                currentIndex = 4;
            } else if (index > 4) {
                currentIndex = 0;
            } else {
                currentIndex = index;
            }
            slides.style.transform = `translateX(${-currentIndex * 600}px)`;
        }
        
        //Function to show the previous slide
        function prevSlide() {
            showSlide(currentIndex - 1);
        }
        
        //Function to show the next slide
        function nextSlide() {
            showSlide(currentIndex + 1);
        }

        // Function to automatically transition slides every 3 seconds
        function autoSlide() {
            nextSlide();
            setTimeout(autoSlide, 3000);
        }

        // Start automatic sliding after 3 seconds
        setTimeout(autoSlide, 3000);