# Image Slider

## Overview
This project is a simple and responsive image slider built using HTML, CSS, and JavaScript. The slider allows users to navigate through images using next and previous buttons, and it also includes an automatic slideshow feature that transitions every 3 seconds.

## Features
- **Automatic Slideshow**: The images change automatically every 3 seconds.
- **Manual Navigation**: Users can navigate through images using next and previous buttons.
- **Responsive Design**: Works on desktop and mobile screens.
- **Smooth Transitions**: Uses CSS for a smooth sliding effect.

## Technologies Used
- **HTML**: For structuring the webpage.
- **CSS**: For styling and responsiveness.
- **JavaScript**: For handling the image transitions and automatic slideshow.

## File Structure
```
image_slider/
│── index.html      # Main HTML file containing the slider structure
│── styles.css      # CSS file for styling the slider
│── script.js       # JavaScript file for handling transitions
```

## How It Works
### **1. HTML Structure (`index.html`)**
- The slider consists of multiple images inside a `div` container.
- Navigation buttons allow users to switch between images.

### **2. Styling (`styles.css`)**
- CSS ensures the slider adapts to different screen sizes.
- It applies smooth transition effects to slides.
- The navigation buttons are positioned at the bottom left.

### **3. JavaScript (`script.js`)**
- `showSlide(index)`: Moves to a specific slide.
- `prevSlide()`: Moves to the previous slide.
- `nextSlide()`: Moves to the next slide.
- `autoSlide()`: Automatically transitions to the next slide every 3 seconds.

## Responsive Design
- Uses `@media` queries to ensure the slider fits well on mobile screens.
- Images resize dynamically to fit different screen sizes.

## Future Improvements
- Add touch gestures for mobile users.
- Include indicators to show the current slide.
- Improve animation effects.


