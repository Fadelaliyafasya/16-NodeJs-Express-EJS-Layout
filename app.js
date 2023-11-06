const express = require("express");
const app = express();
// const contacts = require("./contacts.json");

// Konfigurasi alamat host dan port
const host = "localhost"; // alamat host
const port = 3000; // alamat port

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { namaWeb: "around world.", title: "around world." });
});

// Handle permintaan GET ke "/about" dan mengirimkan file "about.html"
app.get("/about", (req, res) => {
  res.render("about", { title: "around world. - About" });
});

// Handle permintaan GET ke "/contact" dan mengirimkan file "contact.html"
app.get("/contact", (req, res) => {
  const contacts = [
    { nama: "Fadel Muhamad Aliyafasya", mobile: "082121569844" },
    { nama: "Raya Adinda Jayadi Ahmad", mobile: "082121569999" },
    { nama: "Ahmad Faidh", mobile: "082121567655" },
    { nama: "Raya Asmarinda", mobile: "085151569999" },
    { nama: "Lukmanul Hakim", mobile: "085221576999" },
  ];

  if (contacts.length === 0) {
    // Menampilkan pesan pemberitahuan jika objek contacts kosong
    res.render("contact", {
      title: "around world. - Contact",
      contacts,
      isEmpty: true, // Variabel flag untuk menunjukkan bahwa objek kosong
    });
  } else {
    res.render("contact", {
      title: "around world. - Contact",
      contacts,
      isEmpty: false, // Variabel flag untuk menunjukkan bahwa objek tidak kosong
    });
  }
});

// Middleware untuk menangani permintaan yang tidak sesuai dengan rute yang ada
app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>Not Found</h1>");
});

// Menjalankan server Express pada host dan port yang ditentukan
app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
