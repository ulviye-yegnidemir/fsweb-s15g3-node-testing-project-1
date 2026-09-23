/**
 * [Görev 1] nesneyiTrimle bir nesne alır ve proplarını trimler 
 * (trim; bir stringin başında ve sonunda bulunan 
 * boşlukları(whitespaces) temizlemek)
 * @param {object} obj - propları string olan bir nesne
 * @returns {object} - stringleri trimlenmiş bir nesne döndürür
 *
 * ÖRNEK
 * nesneyiTrimle({ isim: '  jane  ' }) // yeni bir nesne döndürür { name: 'jane' }
 */
function nesneyiTrimle(obj) {
  // ✨ kodlar buraya
  const yeniNesne = {};
  Object.keys(obj).forEach((prop) => {
    yeniNesne[prop] = obj[prop].trim();
  });
  return yeniNesne;
}
/*console.log(
  nesneyiTrimle({
    isim: "  Zeynep ",
    yas : "    14  "
  })
);
*/
/**
 * [Görev 2] verileniTrimle propları string olan bir nesne alır ve gönderilen 
 * propu trimler.
 * @param {object} obj - propları string olan bir nesne
 * @returns {object} - istenilen propu trimlenmiş nesneyi döndürür
 *
 * ÖRNEK
 * verileniTrimle({ isim: '  jane  ' , yas: ' 34 '}, 'isim') // şunu döndürür { isim: 'jane', yas: ' 34 '}
 */
function verileniTrimle(obj, prop) {
  // ✨ kodlar buraya
  const yeniNesne = {...obj}
  yeniNesne[prop]=yeniNesne[prop].trim()
  return yeniNesne
}

/**
 * [Görev 3] enBuyukTamsayiyiBul bir dizi nesne içinde bulunan tamsayılardan en büyük olanı bulur { tamsayi: 1 }
 * @param {object[]} tamsayilar - bir dizi nesne
 * @returns {number} - en büyük tamsayı
 *
 * ÖRNEK
 * enBuyukTamsayiyiBul([{ tamsayi: 1 }, { tamsayi: 3 }, { tamsayi: 2 }]) // 3 döndürür
 */
function enBuyukTamsayiyiBul(tamsayilar) {
  // ✨ kodlar buraya
  const sayilar = tamsayilar.map((nesne) => nesne.tamsayi)
  return Math.max(...sayilar)
}

function Sayici(ilkSayi) {
  /**
   * [Görev 4A] Sayici bir sayaç oluşturur
   * @param {number} ilkSayi - Sayacin ilk değeri
   */
  
  // ✨ gerekli propları ekleyin
  this.sayi = ilkSayi
  

  /**
   * [Görev 4B] asagiSay metodu sıfıra doğru sayar
   * @returns {number} - bir sonraki sayı, sıfırdan küçük olamaz
   *
   * Örnek
   * const sayac = new Sayici(3)
   * sayac.asagiSay() // 3 döndürür
   * sayac.asagiSay() // 2 döndürür
   * sayac.asagiSay() // 1 döndürür
   * sayac.asagiSay() // 0 döndürür
   * sayac.asagiSay() // 0 döndürür
   */
  this.asagiSay = () => {
    // ✨ kodlar buraya
    const mevcutSayi = this.sayi
    if(this.sayi > 0) {
      this.sayi = this.sayi - 1
    }
return mevcutSayi
  }
}
  /**
   * [Görev 5A] Mevsimler , bir mevsimler nesnesi oluşturur
   */

  // ✨ gerekli propları ekleyin

  /**
   * [Görev 5B] sonraki metodu bir sonraki mevsimi gösterir
   * @returns {string} - bir sonraki mevsim "yaz" olarak yüklenir
   *
   * ÖRNEK
   * const mevsimler = new Mevsimler()
   * mevsimler.sonraki() // "yaz" döndürür
   * mevsimler.sonraki() // "sonbahar" döndürür
   * mevsimler.sonraki() // "kış" döndürür
   * mevsimler.sonraki() // "ilkbahar" döndürür
   * mevsimler.sonraki() // "yaz" döndürür
   */

function Mevsimler() {
  /**
   * [Görev 5A] Mevsimler, bir mevsimler nesnesi oluşturur
   */

  this.mevsimler = ['yaz', 'sonbahar', 'kış', 'ilkbahar']
  this.sira = 0

  /**
   * [Görev 5B] sonraki metodu bir sonraki mevsimi gösterir
   */
  this.sonraki = () => {
    const sonuc = this.mevsimler[this.sira]

    this.sira = this.sira + 1

    if (this.sira === this.mevsimler.length) {
      this.sira = 0
    }

    return sonuc
  }
}
  /**
   * [Görev 6A] Araba 3 argüman alarak bir araba nesnesi oluşturur
   * @param {string} isim - arabanın ismi
   * @param {number} depo - benzin deposu kapasitesi
   * @param {number} kml - arabanın litre başına kat edebileceği km yol
   */
  // araba 0 kilometrede yüklenecek
 // araba full depoyla yüklenecek
    // ✨ gerekli propları ekleyin
  /**
   * [Görev 6B] sur metodu odometera km ekler ve aynı oranda depodan benzin 
   * tüketir
   * @param {string} gidilecekyol - arabayı sürmek istediğimiz km yol
   * @returns {number} - güncellenen odometer değeri
   *
   * ÖRNEK
   * const focus = new Araba('focus', 20, 30)
   * focus.sur(100) // 100 döndürür
   * focus.sur(100) // 200 döndürür
   * focus.sur(100) // 300 döndürür
   * focus.sur(200) // 500 döndürür
   * focus.sur(200) // 600 döndürür (100 km sonra benzin bitti)
   */
  /**
   * [Görev 6C] Depoya benzin ekleme
   * @param {number} litre - depoya eklemek istediğimiz benzin litresi
   * @returns {number} - benzin eklendikten sonra gidilebilecek maksimum yol
   *
   * ÖRNEK
   * const focus = new Araba('focus', 20, 30)
   * focus.sur(600) // 600 döndürür
   * focus.sur(1) // 600 döndürür (depo boş olduğundan yol gidilemedi)
   * focus.benzinal(99) // 600 döndürür (depo yalnızca 20 litre alabiliyor)
   */
  
function Araba(isim, depoBenzin, kml) {
  /**
   * [Görev 6A] Araba nesnesini oluşturur
   */

  this.isim = isim
  this.depoKapasitesi = depoBenzin
  this.odometer = 0
  this.depo = depoBenzin
  this.kml = kml

  /**
   * [Görev 6B] Arabayı sürer
   */
  this.sur = (gidilecekYol) => {
    const gidilebilecekYol = this.depo * this.kml
    const gidilenYol = Math.min(gidilecekYol, gidilebilecekYol)

    this.odometer = this.odometer + gidilenYol
    this.depo = this.depo - gidilenYol / this.kml

    return this.odometer
  }

  /**
   * [Görev 6C] Depoya benzin ekler
   */
  this.benzinal = (litre) => {
    this.depo = this.depo + litre

    if (this.depo > this.depoKapasitesi) {
      this.depo = this.depoKapasitesi
    }

    return this.depo * this.kml
  }
}
/**
 * [Görev 7] Bir sayının çift olup olmadığını asenkron olarak çözümler
 * @param {number} sayi - kontrol edilecek sayı
 * @returns {promise} - sayı çiftse true, aksi takdirde false
 *
 * ÖRNEK
 * asenkronCiftSayi(2).then(result => {
 *    // sonuç true
 * })
 * asenkronCiftSayi(3).then(result => {
 *    // sonuç false
 * })
 */
async function asenkronCiftSayi(sayi) {
  // ✨ implement
  return sayi % 2 === 0
}

module.exports = {
  nesneyiTrimle,
  verileniTrimle,
  enBuyukTamsayiyiBul,
  asenkronCiftSayi,
  Sayici,
  Mevsimler,
  Araba,
}
