
document.addEventListener("DOMContentLoaded", () => {
   
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        category.addEventListener('click', () => {
            alert(`You clicked on the ${category.textContent} category!`);
        });
    });

    
    const heroButton = document.querySelector('.btn-primary');
    if (heroButton) {
        heroButton.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Get Started button clicked! Redirecting to signup page...');
            window.location.href = '/signup';
        });
    }

    
    const profileIcon = document.querySelector('.profile-icon');
    const profileMenu = document.createElement('div');
    profileMenu.className = 'profile-menu';
    profileMenu.innerHTML = `
        <ul>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Logout</a></li>
        </ul>
    `;
    profileMenu.style.display = 'none';
    profileMenu.style.position = 'absolute';
    profileMenu.style.top = '50px';
    profileMenu.style.right = '20px';
    profileMenu.style.backgroundColor = '#333';
    profileMenu.style.padding = '10px';
    profileMenu.style.borderRadius = '5px';

    document.body.appendChild(profileMenu);

    profileIcon.addEventListener('click', () => {
        profileMenu.style.display = profileMenu.style.display === 'none' ? 'block' : 'none';
    });

    document.addEventListener('click', (e) => {
        if (!profileIcon.contains(e.target) && !profileMenu.contains(e.target)) {
            profileMenu.style.display = 'none';
        }
    });
});
