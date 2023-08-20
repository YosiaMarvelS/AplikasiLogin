/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/* membuat variabel untuk elemen view */
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

/* var utk email sama pass yang benar */
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

/* nambah fungsi klik */
loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();
    /* TODO 1 : Mendapatkan input email dan password pengguna dari form. */
    /* ngambil nilai email sama pass */
    const email = inputEmailElement.value;
    const password = inputPasswordElement.value;
  
    /* TODO 2 : Buat Logika perbandingan dengan kondisi:
       Jika variabel email identik dengan expectedEmail dan password identik dengan expectedPassword, panggil fungsi goToHome().
       Jika tidak, maka panggil fungsi showPopUp().
     */

    /* ngecek email sama pass udah bener atau blm */
    if (email == expectedEmail && password == expectedPassword) {
      /* pindah ke halaman home */
      goToHome();
    } else {
      /* pindah ke halaman login */
      goToLogin()
    }
});
