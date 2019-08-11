function initiateModal() {
  $('.bs-modal').modal({show: false});
}

function triggerShowModal() {
  $('.bs-show-button').on('click', function() {
    var targetModal = $(this).attr('data-targetmodal');
    $('#' + targetModal).modal('show');
    if(targetModal === 'image-display-modal') {
      $('.modal-backdrop').addClass('dark');
    } else if(targetModal === 'contact-form-modal') {
      $('.modal-backdrop').addClass('dark');
    };
  })
}

function triggerHideModal() {
  $('.bs-hide-button').on('click', function() {
    var targetModal = $(this).attr('data-targetmodal');
    $('.' + targetModal).modal('hide');
  })
}

$(document).ready(function() {
  initiateModal();
  triggerShowModal();
  triggerHideModal();
})
