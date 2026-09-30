/*
  VİDEO LİSTESİ
  -------------
  Yeni bir video eklemek için aşağıdaki listeye bir satır daha ekleyin.

  id      : Kısa, benzersiz ve Türkçe karakter/boşluk içermeyen ad.
            Öğrenci bağlantısı bu ada göre oluşur (izle.html?v=id).
            Paylaştıktan sonra DEĞİŞTİRMEYİN, yoksa eski bağlantı çalışmaz.
  baslik  : Videonun adı.
  unite   : Ünite / konu başlığı (tabloda gruplamak için).
  sinif   : Sınıf düzeyi (ör. "5. Sınıf").
  sure    : Süre (ör. "6:30"). İsteğe bağlı.
  kaynak  : Videonun adresi. Şunlardan biri olabilir:
              - YouTube bağlantısı (Liste dışı / "Unlisted" önerilir)
              - Google Drive paylaşım bağlantısı ("Bağlantıya sahip olan herkes")
              - Bu repodaki bir dosya, ör. "videolar/hucre.mp4"
            Boş bırakılırsa "Video yakında eklenecek" yazar.
  aciklama: Öğrencinin göreceği kısa açıklama. İsteğe bağlı.
*/
window.VIDEOLAR = [
  {
    id: "hucre-ve-bolunmeler",
    baslik: "Hücre ve Bölünmeler",
    unite: "Hücre ve Bölünmeler",
    sinif: "7. Sınıf",
    sure: "",
    kaynak: "",
    aciklama: "Hücrenin yapısı, mitoz ve mayoz bölünmenin özeti."
  },
  {
    id: "kuvvet-ve-enerji",
    baslik: "Kuvvet ve Enerji",
    unite: "Kuvvet ve Enerji",
    sinif: "7. Sınıf",
    sure: "",
    kaynak: "",
    aciklama: "Ağırlık, kütle, iş ve enerji dönüşümlerinin özeti."
  },
  {
    id: "maddenin-yapisi",
    baslik: "Saf Madde ve Karışımlar",
    unite: "Saf Madde ve Karışımlar",
    sinif: "7. Sınıf",
    sure: "",
    kaynak: "",
    aciklama: "Atom, element, bileşik ve karışımların özeti."
  }
];
