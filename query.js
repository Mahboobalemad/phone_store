function showForm() {
    var form = document.getElementById('contactForm');
    form.style.display = 'block';
  }
  
  function submitForm(event) {
    event.preventDefault();
    var form = document.getElementById('contactForm');
    form.style.display = 'none';
    var confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.style.display = 'block';
  }