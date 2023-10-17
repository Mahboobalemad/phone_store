// showform 
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
  
  function approveComment() {
    var approvalCount = document.getElementById('approvalCount');
    approvalCount.textContent = parseInt(approvalCount.textContent) + 1;
  }
  
  function disapproveComment() {
    var disapprovalCount = document.getElementById('disapprovalCount');
    disapprovalCount.textContent = parseInt(disapprovalCount.textContent) + 1;
  }
  


  // var approvalعذرًا، واجهتني مشكلة في النص المكتوب. ها هو النص الكامل للكود الخاص بالـ JavaScript:

// javascript
var approvalCounter = 0;
var disapprovalCounter = 0;

function incrementApproval() {
  approvalCounter++;
  document.getElementById("approval-counter").textContent = approvalCounter;
}

function incrementDisapproval() {
  disapprovalCounter++;
  document.getElementById("disapproval-counter").textContent = disapprovalCounter;
}
// ..............................

function submitForm(event) {
  event.preventDefault();
  
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  
  // قم هنا بتنفيذ الأكواد الخاصة بالتحقق من صحة البيانات وإرسالها إلى الخادم أو تنفيذ أي إجراءات أخرى
  
  document.getElementById('form-message').innerText = 'شكرًا للتواصل!';
}
  