document.addEventListener('DOMContentLoaded', () => {
    console.log("Page Loaded");
  });

document.querySelectorAll('footer a').forEach((link) => {
    link.addEventListener('mouseenter', () => {
      link.style.textDecoration = 'underline';
    });
  
    link.addEventListener('mouseleave', () => {
      link.style.textDecoration = 'none';
    });
  });
  
  // Log a message when social media buttons are clicked
  document.querySelectorAll('.social-media a').forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent navigation for demo purposes
      console.log(`Social media button clicked: ${button.href || 'Placeholder link'}`);
    });
  });


  