const utils = require('./index')

describe('[Görev 1] nesneyiTrimle', () => {
  test('[1] propları trimlenmiş bir nesne döndürüyor', () => {
    // ÖRNEK
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.nesneyiTrimle(input)
    expect(actual).toEqual(expected)
  })
})

describe('[Görev 2] verileniTrimle', () => {
  // test('[3] verilen propu trimliyor', () => {})
  // test('[4] verilen dışındaki proplar trimlenmeden döndürülüyor', () => {})
    test('[3] verilen propu trimliyor', () => {
      const  input = { ad:'  Ulviye',soyad : '  Yeğnidemir  '}
      const actual = utils.verileniTrimle(input, 'ad')
      expect(actual.ad).toBe('Ulviye')
    })
    test('[4] verilen dışındaki proplar trimlenmeden döndürülüyor', () => {
       const  input = { ad:'  Ulviye  ',soyad : '  Yeğnidemir  '}
      const actual = utils.verileniTrimle(input, 'ad')
      expect(actual.soyad).toBe('  Yeğnidemir  ')
    })
})


  // test('[5] bir dizi nesne içindeki en büyük tamsayiyi döndürüyor 
  // { tamsayi: 2 }', () => {})

describe('[Görev 3] enBuyukTamsayiyiBul', () => {
  test('[5] bir dizi nesne içindeki en büyük tamsayiyi döndürüyor', () => {
    const input = [
      { tamsayi: 1 },
      { tamsayi: 3 },
      { tamsayi: 2 },
    ]

    const actual = utils.enBuyukTamsayiyiBul(input)

    expect(actual).toBe(3)
  })
})
  // her test yeni bir sayı ile başlatılıyor
  // test('[6] sayici.asagiSay ilk çağırılışında başlangıç sayışını yapıyor', () => {})
  // test('[7] sayici.asagiSay İKİNCİ çağırılışında başlangıç eksi 1 sayıyor', () => {})
  // test('[8] sayıcı sonunda sıfıra ulaşır ama daha aşağı saymaz', () => {})

describe('[Görev 4] Sayici', () => {
  let sayici

  beforeEach(() => {
    sayici = new utils.Sayici(3)
  })

  test('[6] sayici.asagiSay ilk çağırılışında başlangıç sayısını döndürüyor', () => {
    expect(sayici.asagiSay()).toBe(3)
  })

  test('[7] sayici.asagiSay ikinci çağırılışında başlangıç eksi 1 döndürüyor', () => {
    sayici.asagiSay()
    expect(sayici.asagiSay()).toBe(2)
  })

  test('[8] sayıcı sonunda sıfıra ulaşır ama daha aşağı saymaz', () => {
    sayici.asagiSay() // 3
    sayici.asagiSay() // 2
    sayici.asagiSay() // 1
    sayici.asagiSay() // 0

    expect(sayici.asagiSay()).toBe(0)
  })
})

  // test('[9] mevsimler.sonraki İLK çağırılışında "yaz" döndürüyor', () => {})
  // test('[10] mevsimler.sonraki İKİNCİ çağırılışında "sonbahar" döndürüyor', () => {})
  // test('[11] mevsimler.sonraki ÜÇÜNCÜ çağırılışında "kış" döndürüyor', () => {})
  // test('[12] mevsimler.sonraki DÖRDÜNCÜ çağırılışında "ilkbahar" döndürüyor', () => {})
  // test('[13] mevsimler.sonraki BEŞİNCİ çağırılışında "yaz" döndürüyor', () => {})
  // test('[14] mevsimler.sonraki KIRKINCI çağırılışında "ilkbahar" döndürüyor', () => {})

describe('[Görev 5] Mevsimler', () => {
  let mevsimler

  beforeEach(() => {
    mevsimler = new utils.Mevsimler()
  })

  test('[9] ilk çağrıda yaz döndürüyor', () => {
    expect(mevsimler.sonraki()).toBe('yaz')
  })

  test('[10] ikinci çağrıda sonbahar döndürüyor', () => {
    mevsimler.sonraki()

    expect(mevsimler.sonraki()).toBe('sonbahar')
  })

  test('[11] üçüncü çağrıda kış döndürüyor', () => {
    mevsimler.sonraki()
    mevsimler.sonraki()

    expect(mevsimler.sonraki()).toBe('kış')
  })

  test('[12] dördüncü çağrıda ilkbahar döndürüyor', () => {
    mevsimler.sonraki()
    mevsimler.sonraki()
    mevsimler.sonraki()

    expect(mevsimler.sonraki()).toBe('ilkbahar')
  })

  test('[13] beşinci çağrıda yeniden yaz döndürüyor', () => {
    for (let i = 0; i < 4; i++) {
      mevsimler.sonraki()
    }

    expect(mevsimler.sonraki()).toBe('yaz')
  })

  test('[14] kırkıncı çağrıda ilkbahar döndürüyor', () => {
    let sonuc

    for (let i = 0; i < 40; i++) {
      sonuc = mevsimler.sonraki()
    }

    expect(sonuc).toBe('ilkbahar')
  })
})

 // her test yeni bir araba 
    // oluşturur
  // test('[15] arabayı sürünce güncellenmiş odometer döndürüyor', () => {})
  // test('[16] arabayı sürmek benzin tüketiyor', () => {})
  // test('[17] benzinalma arabayı sürmeye izin veriyor', () => {})
  // test('[18] dolu depoya benzin alma etki etmiyor', () => {})
   
describe('[Görev 6] Araba', () => {
  let focus

  beforeEach(() => {
    focus = new utils.Araba('focus', 20, 30)
  })

  test('[15] arabayı sürünce güncellenmiş odometer döndürüyor', () => {
    expect(focus.sur(100)).toBe(100)
    expect(focus.sur(100)).toBe(200)
  })

  test('[16] arabayı sürmek benzin tüketiyor', () => {
    focus.sur(600)

    expect(focus.sur(1)).toBe(600)
  })

  test('[17] benzinalmak arabayı sürmeye izin veriyor', () => {
    focus.sur(600)
    focus.benzinal(10)

    expect(focus.sur(300)).toBe(900)
  })

  test('[18] dolu depoya benzin alma etki etmiyor', () => {
    expect(focus.benzinal(99)).toBe(600)
  })
})
  // test('[19] bir çift sayı verilirse true çözümlüyor', () => {})
  // test('[20] tek sayı verilirse false çözümlüyor', () => {})
describe('[Görev 7] asenkronCiftSayi', () => {
  test('çift sayı için true döndürüyor', () => {
    return utils.asenkronCiftSayi(2).then((sonuc) => {
      expect(sonuc).toBe(true)
    })
  })

  test('tek sayı için false döndürüyor', () => {
    return utils.asenkronCiftSayi(3).then((sonuc) => {
      expect(sonuc).toBe(false)
    })
  })
})