/**
 * 鹭白生信工作室 - 主交互脚本
 * 遵循工程规范：无全局污染、降级优雅、可访问性优先
 */

(function () {
  'use strict';

  // --- Mobile Menu ---
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!isExpanded));
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menuBtn.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.add('hidden');
      });
    });

    // Close menu on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
        menuBtn.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.add('hidden');
        menuBtn.focus();
      }
    });
  }

  // --- Smooth Scroll for Anchor Links ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const nav = document.querySelector('nav');
        const navHeight = nav ? nav.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Update focus for accessibility
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  });

  // --- Active Navigation Highlight on Scroll ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  if (sections.length && navLinks.length) {
    let currentActive = null;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (currentActive === id) return;
            currentActive = id;

            navLinks.forEach(function (link) {
              link.classList.remove('text-primary-600', 'font-medium');
              link.classList.add('text-neutral-600');
              if (link.getAttribute('href') === '#' + id) {
                link.classList.remove('text-neutral-600');
                link.classList.add('text-primary-600', 'font-medium');
              }
            });
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
      }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  // --- Form Validation Enhancement ---
  const forms = document.querySelectorAll('form');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      if (!form.checkValidity()) {
        e.preventDefault();
        // Focus first invalid field
        const invalid = form.querySelector(':invalid');
        if (invalid) {
          invalid.focus();
        }
      }
    });
  });
})();
