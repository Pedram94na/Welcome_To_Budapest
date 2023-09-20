document.addEventListener('DOMContentLoaded', function() {
  const thumbnails = document.getElementsByClassName('aboutImg');

  Array.from(thumbnails).forEach(function(thumbnail) {
    thumbnail.addEventListener('click', function() {
      const hiddenImageId = this.getAttribute('data-image-id');
      showFullImage(hiddenImageId);
    });
  });

  document.addEventListener('click', function(event) {
    Array.from(thumbnails).forEach(function(thumbnail) {
      const hiddenImageId = thumbnail.getAttribute('data-image-id');
      const hiddenImage = document.getElementById(hiddenImageId);
      if (
        hiddenImage &&
        event.target !== thumbnail &&
        event.target !== hiddenImage &&
        !hiddenImage.contains(event.target)
      ) {
        hideFullImage(hiddenImage);
      }
    });
  });
});

function showFullImage(imageId) {
  const image = document.getElementById(imageId);
  if (image) {
    image.style.display = 'block';
    image.style.position = 'fixed';
    image.style.top = '50%';
    image.style.left = '50%';
    image.style.transform = 'translate(-50%, -50%) scale(10)';
    image.style.width = '70%';
    image.style.height = 'auto';
  }
}

function hideFullImage(imageId) {
  const image = document.getElementById(imageId);
  if (image) {
    image.style.display = 'none';
  }
}
