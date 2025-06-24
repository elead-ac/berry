document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('header nav ul li a');
    const currentHash = window.location.hash; // Get the current hash (#section2, #about, etc.)
  
    navLinks.forEach(link => {
        const linkHash = link.getAttribute('href');
  
        if (linkHash === currentHash) {
            link.classList.add('active-nav-indicator');
        } else {
            link.classList.remove('active-nav-indicator');
        }
    });
  
    // Optional: Add event listeners to update the active class when the hash changes (for smoother navigation)
    window.addEventListener('hashchange', function() {
        const newHash = window.location.hash;
        navLinks.forEach(link => {
            const linkHash = link.getAttribute('href');
            if (linkHash === newHash) {
                link.classList.add('active-nav-indicator');
            } else {
                link.classList.remove('active-nav-indicator');
            }
        });
    });
  });