const fs = require('fs');

// 1. MARKDOWN DOSYASINI DÜZELT
const mdIcerik = `---
layout: layouts/blog-post.html
title: "Dernek ve Vakıf Arasındaki 5 Temel Fark Nedir?"
description: "Dernek mi yoksa vakıf mı kurmalısınız? Türkiye'deki STK mevzuatına göre dernek ve vakıf arasındaki yasal, mali ve idari 5 temel farkı detaylarıyla inceleyin."
date: 2024-10-15
category: "Rehber"
image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800"
excerpt: "Sivil toplum yapınızı belirlerken dernek ve vakıf arasındaki yasal, mali ve idari farkları bilin."
---

Bir sosyal sorumluluk projesine başlarken en sık karşılaşılan sorulardan biri, yapının dernek mi yoksa vakıf mı olması gerektiğidir. Her iki yapı da topluma hizmet amacı gütse de, Türk Medeni Kanunu ve ilgili mevzuatlara göre aralarında kritik farklar bulunur. İşte karar verme sürecinizi kolaylaştıracak 5 temel fark:

### 1. Temel Yapı: Kişi Topluluğu vs. Mal Topluluğu

Dernekler, belirli bir amacı gerçekleştirmek üzere bir araya gelen en az yedi gerçek veya tüzel kişinin oluşturduğu topluluklardır. Vakıflar ise, belirli bir amaca hizmet etmek üzere tahsis edilmiş mallardan (para, gayrimenkul vb.) oluşur. Yani dernekte "üye", vakıfta "mal varlığı" esastır.

### 2. Kuruluş Süreci ve Yasal Dayanak

Dernek kurmak idari bir işlemdir; tüzüğün Valilik/Mülki İdare Amirliği'ne sunulmasıyla tüzel kişilik kazanılır. Vakıf kurmak ise hukuki bir süreçtir; resmi senet ile Asliye Hukuk Mahkemesi'ne başvurulur ve tescil mahkeme kararıyla gerçekleşir.

![STK Mevzuat Çalışması](https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800)

### 3. Üyelik Kavramı ve Aidatlar

Derneklerde üyelik zorunludur ve faaliyetler üyelerin katılımı ve aidatlarıyla yürür. Vakıflarda ise kural olarak "üyelik" yoktur; vakıf, mütevelli heyeti tarafından yönetilir ve başlangıçta tahsis edilen mal varlığının getirileriyle faaliyet gösterir.

### 4. Başlangıç Mal Varlığı Zorunluluğu

Dernek kurmak için kanunen belirlenmiş bir başlangıç sermayesi gerekmez. Ancak vakıf kurabilmek için, her yıl Vakıflar Meclisi tarafından belirlenen asgari mal varlığının (nakit veya taşınmaz) bulunması şarttır.

### 5. Denetim Makamları

Dernekler, İçişleri Bakanlığı Sivil Toplumla İlişkiler Genel Müdürlüğü tarafından denetlenir. Vakıflar ise doğrudan Kültür ve Turizm Bakanlığı'na bağlı Vakıflar Genel Müdürlüğü'nün (VGM) denetim ve gözetimine tabidir.

> Özetle; insan gücüne dayalı, geniş kitlelerin katılımını hedefleyen bir yapı için **Dernek**; eldeki bir kaynağı sonsuza dek bir amaca hizmet ettirmek için ise **Vakıf** yapısı daha uygundur.
`;

fs.writeFileSync('content/blog/dernek-vakif-farklari.md', mdIcerik, 'utf8');
console.log('✓ Markdown dosyası güncellendi (resimler eklendi)');

// 2. LAYOUT SIDEBAR'I DÜZELT
let layout = fs.readFileSync('_includes/layouts/blog-post.html', 'utf8');

const eskiSidebar = `                <aside class="sidebar">
                    <div class="widget">
                        <h4>Bilgi Bankası</h4>
                        <ul>
                            <li><a href="/mevzuat">Önemli Mevzuatlar</a></li>
                            <li><a href="/blog" class="current">Blog &amp; Makaleler</a></li>
                        </ul>
                    </div>
                    <div class="widget">
                        <h4>Mevzuat Karmaşık Mı Geldi?</h4>
                        <p>Yasal süreçlerde hata yapmamak ve güncel bilgilere ulaşmak için uzman ekibimizden destek alın.</p>
                        <a href="/iletisim" class="btn btn-secondary" style="width: 100%;">Danışmanlık Al</a>
                    </div>
                </aside>`;

const yeniSidebar = `                <aside class="sidebar">
                    <div class="widget">
                        <h4>Bilgi Bankası</h4>
                        <ul>
                            <li><a href="/mevzuat">Önemli Mevzuatlar</a></li>
                            <li><a href="/blog-dernek-yonetici-sorumluluklari">Yönetici Sorumlulukları</a></li>
                            <li><a href="/blog-stk-iktisadi-isletme-avantajlari">İktisadi İşletme Avantajları</a></li>
                            <li><a href="/blog" class="current">Blog &amp; Makaleler</a></li>
                        </ul>
                    </div>
                    <div class="widget">
                        <h4>Mevzuat Karmaşık Mı Geldi?</h4>
                        <p>Yasal süreçlerde hata yapmamak ve güncel bilgilere ulaşmak için uzman ekibimizden destek alın.</p>
                        <a href="/iletisim" class="btn btn-secondary" style="width: 100%;">Danışmanlık Al</a>
                    </div>
                </aside>`;

layout = layout.replace(eskiSidebar, yeniSidebar);
fs.writeFileSync('_includes/layouts/blog-post.html', layout, 'utf8');
console.log('✓ Sidebar güncellendi (Yönetici Sorumlulukları ve İktisadi İşletme linkleri eklendi)');
console.log('\nF5 ile tarayıcıyı yenile!');
