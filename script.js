document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease',
        once: false,
        mirror: false
    });
    
    // Countdown Timer
    const countdownDate = new Date("March 30, 2025 00:00:00").getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        if (document.getElementById("days")) {
            document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
            document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
            document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
            document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');
        }
    }
    
    // Update the countdown every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Create falling hearts
    const heartsContainer = document.querySelector('.falling-hearts');
    const heartColors = ['#ff6b6b', '#f06292', '#ec407a', '#e91e63', '#d81b60'];
    const heartSymbols = ['❤️', '💕', '💖', '💗', '💓'];
    
    function createHeart() {
        const heart = document.createElement('div');
        const symbol = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        
        heart.innerHTML = symbol;
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '-20px';
        heart.style.fontSize = Math.random() * (30 - 15) + 15 + 'px';
        heart.style.filter = 'drop-shadow(0 0 10px rgba(255, 107, 107, 0.7))';
        heart.style.zIndex = '9997';
        heart.style.opacity = Math.random() * (1 - 0.2) + 0.2;
        heart.style.animation = `fall ${Math.random() * (15 - 5) + 5}s linear forwards`;
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 15000);
    }
    
    // Create hearts at random intervals
    setInterval(createHeart, 300);
    
    // Add falling animation
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fall {
            0% {
                transform: translateY(0) rotate(0deg);
            }
            100% {
                transform: translateY(100vh) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Heart cursor effect
    const cursorHeart = document.querySelector('.cursor-heart');
    
    document.addEventListener('mousemove', function(e) {
        cursorHeart.style.left = e.clientX + 'px';
        cursorHeart.style.top = e.clientY + 'px';
    });
    
    document.addEventListener('mousedown', function() {
        createHeartAtCursor(cursorHeart.style.left, cursorHeart.style.top);
    });
    
    function createHeartAtCursor(x, y) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = x;
        heart.style.top = y;
        heart.style.fontSize = '20px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        heart.style.animation = 'float-away 2s forwards';
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
    
    // Add float-away animation
    const floatStyle = document.createElement('style');
    floatStyle.innerHTML = `
        @keyframes float-away {
            0% {
                transform: translate(0, 0) scale(1);
                opacity: 1;
            }
            100% {
                transform: translate(0, -100px) scale(0);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(floatStyle);
    
    // Background music control
    const musicToggle = document.querySelector('.music-toggle');
    const backgroundMusic = document.getElementById('background-music');
    let isMusicPlaying = false;
    
    musicToggle.addEventListener('click', function() {
        if (isMusicPlaying) {
            backgroundMusic.pause();
            musicToggle.classList.remove('playing');
        } else {
            backgroundMusic.play();
            musicToggle.classList.add('playing');
        }
        isMusicPlaying = !isMusicPlaying;
    });
    
    // Initialize particles.js
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 50,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "heart",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 10,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }
    
    // Sticky navigation
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.main-nav');
        if (window.scrollY > 50) {
            nav.style.padding = '5px 0';
            nav.style.backgroundColor = 'rgba(255, 107, 107, 0.95)';
        } else {
            nav.style.padding = '10px 0';
            nav.style.backgroundColor = 'rgba(255, 107, 107, 0.8)';
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Typewriter effect for love note
    if (document.querySelector('.note p')) {
        const loveParagraphs = document.querySelectorAll('.note p');
        let delay = 0;
        
        loveParagraphs.forEach((paragraph, index) => {
            if (index > 0) { // Skip the first paragraph (the greeting)
                const originalText = paragraph.textContent;
                paragraph.textContent = '';
                paragraph.style.opacity = '1';
                
                setTimeout(() => {
                    let i = 0;
                    const interval = setInterval(() => {
                        if (i < originalText.length) {
                            paragraph.textContent += originalText.charAt(i);
                            i++;
                        } else {
                            clearInterval(interval);
                        }
                    }, 30);
                }, delay);
                
                delay += originalText.length * 30 + 500;
            }
        });
    }
    
    // Mobile navigation toggle
    const nav = document.querySelector('.main-nav .container');
    const navList = document.querySelector('.main-nav ul');
    
    const navToggle = document.createElement('button');
    navToggle.className = 'nav-toggle';
    navToggle.innerHTML = '<i class="fas fa-bars"></i>';
    nav.insertBefore(navToggle, navList);
    
    navToggle.addEventListener('click', function() {
        navList.classList.toggle('show');
        this.innerHTML = navList.classList.contains('show') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.main-nav') && navList.classList.contains('show')) {
            navList.classList.remove('show');
            navToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // Adjust animations for mobile
    if (window.innerWidth < 768) {
        // Reduce number of falling hearts on mobile
        const heartInterval = window.setInterval(createHeart, 300);
        clearInterval(heartInterval);
        setInterval(createHeart, 800);
        
        // Simplify particle effect on mobile
        if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
            particlesJS('particles-js', {
                "particles": {
                    "number": { "value": 20 }, // Fewer particles
                    "size": { "value": 5 }     // Smaller size
                }
            });
        }
    }
    
    // Handle orientation changes
    window.addEventListener('orientationchange', function() {
        // Force AOS refresh on orientation change
        setTimeout(function() {
            AOS.refresh();
        }, 500);
    });
    
    // Add viewport height fix for mobile browsers
    function setVH() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    setVH();
    window.addEventListener('resize', setVH);
}); 