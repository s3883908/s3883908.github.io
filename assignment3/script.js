document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.header h1');
    const letters = title.textContent.split('');
     // Split the text content of the title into individual characters
    title.innerHTML = '';
     // Clear the original text content of the title

    letters.forEach(letter => {
        const span = document.createElement('span');
        span.textContent = letter;
        // Set the text content of the span to the current letter
        span.style.animationDelay = `${Math.random() * 2}s`;
        // Assign a random animation delay to each letter for staggered animation
        title.appendChild(span);
         // Append the span element to the title
    });

    title.addEventListener('mouseover', () => {
        title.classList.add('hover');
    });

    title.addEventListener('mouseout', () => {
        title.classList.remove('hover');
    });
});

/*
   JavaScript for interactive behavior of the animated title webpage.
   
   This script waits for the DOM to fully load before executing. It splits the 
   main title text into individual characters, wraps each character in a span element, 
   and applies a random animation delay to create a staggered floating effect. 

   The hover effect is implemented by adding and removing a CSS class that 
   pauses the animation when the user hovers over the title.

   Context and Modifications:
   This design enhances user interaction and visual appeal by animating the 
   title's letters on mouseover, creating a dynamic effect. The random animation 
   delay adds a unique staggered appearance to the floating letters, making the 
   webpage more engaging.

   Adjustments and insights were made with the assistance of GPT to ensure smooth 
   animation transitions and effective event handling.
*/


// Effect 2: Image follow cursor
const effect2Item = document.querySelector('.effect2');
const effect2Image = effect2Item.querySelector('img');

effect2Item.addEventListener('mousemove', (e) => {
    const rect = effect2Item.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    effect2Image.style.transform = `translate(${x - rect.width / 2}px, ${y - rect.height / 2}px)`;
    effect2Image.style.opacity = 1;
});

effect2Item.addEventListener('mouseleave', () => {
    effect2Image.style.transform = 'translate(0, 0)';
    effect2Image.style.opacity = 0;
});

// According to the help of chatgpt, I wrote this interactive code.
// This JavaScript code makes an image in the second section follow the mouse cursor when you hover over it.
// effect2Item selects the element with class effect2.
// effect2Image selects the image inside this element.
// When you move your mouse over effect2Item, the image moves to follow the cursor and becomes fully visible.
// When you move the mouse away, the image returns to its original position and fades out.




