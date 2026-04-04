# Değişiklik Kaydı (Changelog)

Bütün değişiklikler ve teknik mimariye atılan düğümler bu dosyada birikecektir. Sistem "Karadelik" felsefesine sadık kalacak şekilde temiz ve otonom tutulacaktır.

## [1.0.7] - 2026-04-04

### Düzeltilenler (Fixed)
- **Analitik İndirme Sızıntısı:** Kitap indirme butonlarındaki ("EPUB", "PDF", "Baskı Kiti (ZIP)") Google Analytics takip etkinliği (`gtag`) özel `download` adından standart `file_download` yapısına taşındı. Etkinlik parametrelerindeki `book_title`, `file_name` olarak; `file_type` ise `file_extension` olarak güncellendi. Böylece indirme metriklerinde yaşanan "*(not set)*" -kayan veri- (data leak) problemi tamamen giderildi ve Google'ın yerleşik veri kalıbıyla tam uyum sağlandı.

## [1.0.6] - 2026-04-03
### Eklenenler (Added)
- **ISBN Verisi:** *Felsefeye Giriş Seminerleri* kitabı için `isbnEpub` (978-625-00-4014-0) ve `isbnPdf` (978-625-00-5987-6) bilgileri eklendi.

### Değiştirilenler (Changed)
- **ISBN Formatı Güncellemesi:** *Ekoloji ve Ekonomi I* kitabının ISBN formatı salt rakam biçiminden treli uluslararası standart formata (978-625-...) çevrildi.

## [1.0.5] - 2026-04-03

### Eklenenler (Added)
- **Yeni Kitap:** *Felsefeye Giriş Seminerleri* (Oğuz Karayemiş) sisteme eklendi ve açık erişim bağlantıları (EPUB, PDF, Baskı Kiti ZIP) bağlandı.

## [1.0.4] - 2026-04-02

### Düzeltilenler (Fixed)
- **Tip (Type) Güvenliği:** Sitenin derleme sırasında editör (IDE) ortamında "Cannot find module 'astro:content'" hatası vermesine neden olan eksik konfigürasyon dosyaları (`tsconfig.json` ve `src/env.d.ts`) sisteme yeniden dahil edildi.
- **Zod Şeması Katılaştırıldı:** `config.ts` içindeki `dizi` değişkeni, sıfır-şişkinlik felsefesine aykırı olduğu ve kullanılmadığı için tamamen silindi. E-kitap dosyaları (`epubLink`, `pdfLink`, `zipLink`) zorunlu (strict) hale getirildi; böylece kitap eklenirken linklerin unutulması ihtimaline karşı yapı bütünüyle güvenli hale çekildi.

## [1.0.3] - 2026-04-02

### Değiştirilenler (Changed)
- **Slogan Güncellemesi:** Sitenin kalbindeki motto "Yeraltından taze nefesler" yerine "Karadelikten yayınlar" olarak güncellendi. Bu felsefi tona ayarlama işlemi ana sayfa `<title>` etiketinde ve tüm site geneli _footer_ alanında uygulandı.

## [1.0.2] - 2026-04-02

### Eklenenler (Added)
- **ISBN Verisi Entegrasyonu:** *Ekoloji ve Ekonomi I* kitabının referans bilgileri olan `isbnEpub` ve `isbnPdf` kodları (9786250061510 ve 9786250038468) Zod şemasına, kitap veritabanına ve görsel arayüze eklendi. Ayrıca arama motoru dizinlemeleri için SEO/JSON-LD şemasına dahil edildi.

## [1.0.1] - 2026-04-01

### Düzeltilenler (Fixed)
- **Karakter ve Alt Küme (Subset) Çatışması:** "Açık Erişim" ve diğer Türkçe kelimelerdeki (`ç`, `ı`, `ş` vb.) harflerin, Merriweather fontunun Kiril (Cyrillic) alt kümelerine zorlanması nedeniyle oluşan render/yedek font (fallback) problemi çözüldü. 
- **Font Mimarisi Yenilendi:** `download-fonts.js` betiği onarılarak lokal font haritasını doğru şekilde (`fonts.css`) oluşturması sağlandı. Vite `preload` bağlantıları ve global CSS tanımlamaları, Latin ve Latin-Ext alt kümelerini doğru çağıracak şekilde güncellendi. Artık tipografi sistem fontlarına düşmeden tamamen felsefeye sadık çiziliyor.

## [1.0.0] - 2026-04-01

### Eklenenler (Added)
- **Astro Altyapısı İlk Sürüm:** Çöküşten yeni bir özerkliğe doğru giden yolda, sıfır JS, tam statik derleme ve uçar gibi çalışan yepyeni bir mimari kuruldu.
- **Tasarım Dili (UI/UX):** Fildişi/Kağıt beyazı (`#f7f4e7`) zemin ve Gece siyahı (`#090f10`) kontrastıyla yeraltı edebiyatına uygun bir tasarım sistemi oluşturuldu. Klasik matbaa estetiği için sistem geneline **Merriweather** fontu entegre edildi.
- **Açık Kaynak Dağıtım Şeması:** Kitapları okurlara doğrudan ulaştırmak için içerik doğrulama modellerine (Zod) **EPUB**, **PDF** ve **Baskı Kiti (ZIP)** alanları eklendi.
- **Başıbozuk Manifestosu:** "Çöküşten Yeni Bir Özerkliğe" başlıklı, dört ana koldan oluşan manifesto kodlanarak yayına alındı.
- **İlk Kitap:** *Ekoloji ve Ekonomi I: Sermayenin Girişimleri ve Yeryüzünün Mukavemeti* sistemi test edip tam ortadan manşete oturacak şekilde eklendi ve indirme butonları bağlandı.
- **Tamamen Sadeleştirilmiş İskelet:** İleride çıkabilecek karmaşayı önlemek için; "Diziler", gereksiz arşivleme sayfaları ve bülten sistemleri tamamen kod tabanından temizlendi. Sadece Academia.edu iletişimi bırakıldı.

*Motor çalıştırıldı.*
