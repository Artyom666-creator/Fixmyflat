function showSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.style.display = 'flex';
}

function hideSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.style.display = 'none';
}







const ball = document.querySelector('.ball');
        const container = document.querySelector('.sec-anim-ball');
        const ballSize = 50;

        // Ավելացնել position: relative; container տարրին
        container.style.position = 'relative';

        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;

        let posX = 0;
        let posY = 0;
        let speedX = 2;
        let speedY = 2;
        let angle = 0; // Պտտման անկյունը

        function animate() {
            posX += speedX;
            posY += speedY;

            if (posX + ballSize > containerWidth || posX < 0) {
                speedX = -speedX; // Բouncing effect
                angle += 45; // Պտտման անկյունը ավելացնում ենք
            }

            if (posY + ballSize > containerHeight || posY < 0) {
                speedY = -speedY; // Բouncing effect
                angle += 90; // Պտտման անկյունը ավելացնում ենք
            }

            ball.style.left = posX + 'px';
            ball.style.top = posY + 'px';
            ball.style.transform = `rotate(${angle}deg)`; // Պտտում ենք գնդակը

            requestAnimationFrame(animate);
        }

        animate();










document.querySelectorAll('.contanieer-3-div').forEach(container => {
    const menu = container.querySelector('.menu');
    const toggle = menu.querySelector('.toggle');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});











let sectionsAnimate = document.querySelectorAll('section');
let sectionsKov = document.querySelectorAll('section');

window.onscroll = () => {
    let top = window.scrollY;

    sectionsAnimate.forEach(sec => {
        let offset = sec.offsetTop - 500;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });

    sectionsKov.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('kov-animate');
        } else {
            sec.classList.remove('kov-animate');
        }
    });
}
   // Sidebar toggle functions
        function showSidebar() {
            const sidebar = document.getElementById('sidebar');
            if(sidebar) sidebar.style.display = 'flex';
        }
        function hideSidebar() {
            const sidebar = document.getElementById('sidebar');
            if(sidebar) sidebar.style.display = 'none';
        }

        // Google Translate Initialization - English to Armenian (hy) and other languages
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,hy,ru,fr,de,es', // English, Armenian, Russian, French, German, Spanish
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false
            }, 'google_translate_element');
            
            // Remove Google Translate top banner after load
            setTimeout(() => {
                const banner = document.querySelector('.goog-te-banner-frame');
                if(banner) banner.style.display = 'none';
                document.body.style.top = '0px';
                const iframe = document.querySelector('iframe.goog-te-banner-frame');
                if(iframe) iframe.remove();
            }, 500);
        }

        // Additional fix to hide banner on dynamic changes
        window.addEventListener('load', function() {
            // Remove any existing google translate banners
            const removeBanner = setInterval(() => {
                const banner = document.querySelector('.goog-te-banner-frame');
                if(banner) {
                    banner.style.display = 'none';
                    document.body.style.top = '0px';
                }
                const frame = document.getElementById(':0.constant');
                if(frame && frame.tagName === 'IFRAME') frame.style.display = 'none';
            }, 1000);
            setTimeout(() => clearInterval(removeBanner), 5000);
        });


