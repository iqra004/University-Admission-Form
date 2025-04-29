function confirmSubmission() {
  const form = document.getElementById("admissionForm");
  if (form.checkValidity()) {
    const modal = new bootstrap.Modal(document.getElementById("confirmModal"));
    modal.show();
  } else {
    form.reportValidity();
  }
}
function submitForm() {
  const fullName = document.getElementById("fullName").value;
  alert(`Thank you, ${fullName}. Your application has been submitted successfully!`);
  document.getElementById("admissionForm").reset();
  bootstrap.Modal.getInstance(document.getElementById("confirmModal")).hide();
}
