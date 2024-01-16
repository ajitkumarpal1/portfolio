function main(email) {
    let result;

    const atIndex = email.indexOf('@');
    const charactersBeforeAt = atIndex >= 3;

    const isValidEmail = charactersBeforeAt && atIndex !== -1 && atIndex < email.length - 1;

    const lastDotIndex = email.lastIndexOf('.');
    const charactersAfterDot = lastDotIndex - (atIndex + 1) >= 2;

    if (charactersBeforeAt && isValidEmail && charactersAfterDot) {
        result = `Welcome ${email} to our site`;
    } else {
        result = 'Invalid email';
    }

    return result;
}
/* brack */

console.log(main('xyz@gmail.com'));  
console.log(main('xzgmail.com'));



// Get the scrolling container element
const scrollingContainer = document.querySelector('.scrolling-container');

// Add a scroll event listener to the container
scrollingContainer.addEventListener('scroll', function() {
    // Your custom scrolling logic goes here
    console.log('Scrolled:', scrollingContainer.scrollTop);
});



