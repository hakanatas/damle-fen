// Bir videonun "kaynak" alanını, sayfaya gömülecek oynatıcı bilgisine çevirir.
function videoKaynagi(kaynak) {
  kaynak = (kaynak || "").trim();
  if (!kaynak) return null;

  var yt = kaynak.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/))([\w-]{11})/);
  if (yt) return { tur: "iframe", adres: "https://www.youtube-nocookie.com/embed/" + yt[1] + "?rel=0" };

  var drive = kaynak.match(/drive\.google\.com\/(?:file\/d\/|open\?id=)([\w-]+)/);
  if (drive) return { tur: "iframe", adres: "https://drive.google.com/file/d/" + drive[1] + "/preview" };

  return { tur: "video", adres: kaynak };
}

// Öğrenciye verilecek tek videoluk bağlantıyı, sitenin bulunduğu adrese göre üretir.
function ogrenciBaglantisi(id) {
  return new URL("izle.html?v=" + encodeURIComponent(id), location.href).href;
}
