document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var title = document.getElementById('title');

   
    if (window.scrollY > 0) {
      header.classList.add('sticky');
      title.classList.add('sticky-title');
    } else {
      header.classList.remove('sticky');
      title.classList.remove('sticky-title');
    }
  });
});

// button for move to top
document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  

    window.addEventListener("scroll", function() {
      if (window.pageYOffset > 300) { 
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    });
  
    scrollToTopBtn.addEventListener("click", scrollToTop);
  });

// animation for click to home or other link to section 
  document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  
    window.addEventListener("scroll", function() {
      if (window.pageYOffset > 300) { 
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    });
  
    scrollToTopBtn.addEventListener("click", scrollToTop);
  
    const navLinks = document.querySelectorAll("nav ul li a");
  
    navLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault(); 
        const targetId = this.getAttribute("href").substring(1); 
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth"
          });
        }
      });
    });
  });

//   scroll animation

const sections = document.querySelectorAll('.fade-in');

function checkPosition() {
  const triggerBottom = window.innerHeight * 0.8;
  const triggerTop = window.innerHeight * 0.2;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;

    if (sectionTop < triggerBottom && sectionBottom > triggerTop) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', checkPosition);
window.addEventListener('resize', checkPosition);

checkPosition();