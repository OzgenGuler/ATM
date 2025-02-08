let bakiye = 1000;

function menuGoster() {
  return prompt(
    "1. Bakiye Sorgulama\n" +
      "2. Para Yatırma\n" +
      "3. Para Çekme\n" +
      "4. Çıkış\n" +
      "lütfen yapmak istediğiniz işlemi seçiniz:"
  );
}

function atm() {
  while (true) {
    const secim = menuGoster();
    if (secim === "1") {
      alert(`Mevcut Bakiyeniz: ${bakiye}`);
    } else if (secim === "2") {
      let = miktar = parseFloat(prompt("Yatırmak istediğiniz miktarı giriniz"));
      if (miktar > 0) {
        bakiye += miktar;
        alert(`Yeni Bakiyeniz: ${bakiye} TL'dir. ${miktar} TL yatırıldı.`);
      } else {
        alert("Geçersiz miktar girdiniz.!!");
      }
    } else if (secim === "3") {
      let = miktar = parseFloat(prompt("Çekmek istediğiniz miktarı giriniz"));
      if (miktar > 0 && miktar <= bakiye) {
        bakiye -= miktar;
        alert(`Yeni Bakiyeniz: ${bakiye} TL'dir. ${miktar} TL çekildi.`);
      } else {
        alert("Geçersiz miktar girdiniz.!!");
      }
    } else if (secim === "4") {
      alert("iyi Günler Dileriz:) Çıkış yapılıyor...");
      break;
    } else {
      alert("Geçersiz işlem seçtiniz. Lütfen tekrar deneyiniz.");
    }
  }
}

atm();
