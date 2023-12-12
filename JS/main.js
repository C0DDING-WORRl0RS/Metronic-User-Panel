// varibles...
let icons = document.querySelectorAll('.icon-modal');

console.log(icons);
// event...


// functions...
/**
 * when user touchend in moball show this modal
 */
icons.forEach(function (item) {
    item.addEventListener('touchend', () => {
        Swal.fire({
            title: "در حال ساخت...",
            showClass: {
                popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
                popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
        });
    });
})