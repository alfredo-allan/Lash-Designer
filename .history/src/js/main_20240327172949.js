      var modal = document.getElementById('modal'); var openModal = document.getElementById('openModal'); var close = document.getElementsByClassName('close')[0]; openModal.onclick = function() { modal.style.display = "block"; } close.onclick = function() { modal.style.display = "none"; } window.onclick = function(event) { if (event.target == modal) { modal.style.display = "none"; } } var picker = new Pikaday({ field: document.getElementById('calendar') });
