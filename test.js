// Tunggu hingga konten halaman termuat
document.addEventListener("DOMContentLoaded", function() {
    // Mengganti seluruh isi body dengan formulir upload file
    document.body.innerHTML = `
        <h1>Upload File</h1>
        <form id="uploadForm">
            <input type="file" id="fileUpload" name="file" required />
            <button type="submit">Upload</button>
        </form>
        <div id="message"></div>
    `;

    const uploadForm = document.getElementById("uploadForm");
    const messageDiv = document.getElementById("message");
    const fileUpload = document.getElementById("fileUpload");

    uploadForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah pengiriman formulir secara default

        // Ambil file dari input
        const file = fileUpload.files[0];

        // Tampilkan pesan dengan nama file yang di-upload
        if (file) {
            messageDiv.innerHTML = File berhasil di-upload: ${file.name};
        } else {
            messageDiv.innerHTML = 'Tidak ada file yang dipilih.';
        }
    });
});
