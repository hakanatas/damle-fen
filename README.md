# Fen Özet Videoları

Fen dersi özet videoları için basit bir site. Hiçbir kurulum gerektirmez; GitHub Pages ile yayınlanır.

## Sayfalar

| Sayfa | Kime | Ne işe yarar |
|---|---|---|
| `ogretmen-cd3e6a91e7.html` | Yalnızca öğretmen | Tüm videoların tablosu; her video için öğrenci bağlantısını kopyalama |
| `izle.html?v=<video-id>` | Öğrenci | Yalnızca tek bir videoyu gösterir, başka videolara bağlantı yoktur |
| `index.html` | Herkes | Boş bir kapak sayfası; video listesi içermez |

Yayınlandıktan sonra öğretmen bağlantısı:
`https://hakanatas.github.io/damle-fen/ogretmen-cd3e6a91e7.html`

## Video ekleme

1. `videolar.js` dosyasını açın ve listeye yeni bir kayıt ekleyin (dosyanın başında açıklama var).
2. `kaynak` alanına şunlardan birini yazın:
   - YouTube bağlantısı (videoyu **Liste dışı / Unlisted** yüklemeniz önerilir),
   - Google Drive paylaşım bağlantısı ("Bağlantıya sahip olan herkes görüntüleyebilir"),
   - veya videoyu `videolar/` klasörüne koyup `"videolar/dosya-adi.mp4"` yazın
     (GitHub'da dosya başına 100 MB sınırı vardır; büyük videolar için YouTube/Drive daha uygundur).
3. Kaydedip `main` dalına gönderin. Birkaç dakika içinde sitede görünür.

`id` değerini öğrenciyle paylaştıktan sonra değiştirmeyin; bağlantı bu değerden oluşur.

## GitHub Pages'i açma (bir kez)

Depo → **Settings → Pages → Build and deployment** → Source: *Deploy from a branch*,
Branch: `main`, klasör: `/ (root)` → **Save**.

## Gizlilik hakkında

- Öğretmen sayfasının adı tahmin edilemeyecek şekilde rastgeledir, sayfalar arama
  motorlarına kapalıdır (`robots.txt`, `noindex`) ve siteden öğretmen sayfasına hiçbir bağlantı yoktur.
- Ancak bu depo **herkese açık** olduğu için depoyu GitHub'da gezen biri dosya adını görebilir.
  Bu yüzden bu yöntem "gerçek şifre" değil, "bağlantıyı bilen görür" düzeyinde bir gizliliktir.
- Öğretmen bağlantısı bir gün yayılırsa: dosyanın adını yeni bir rastgele adla değiştirin
  (`git mv ogretmen-cd3e6a91e7.html ogretmen-YENI.html`) ve yeni bağlantıyı öğretmene verin.
  Öğrenci bağlantıları (`izle.html?v=...`) etkilenmez.
