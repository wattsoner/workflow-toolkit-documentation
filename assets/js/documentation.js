document.querySelectorAll('.collapsible').forEach(button => {
  button.addEventListener('click', () => {
      button.classList.toggle('active');
      const content = button.nextElementSibling;

      content.classList.toggle('expanded');

      if (content.classList.contains('expanded')) {
          content.style.maxHeight = content.scrollHeight + 'px';
      } else {
          content.style.maxHeight = '0';
      }
  });
});