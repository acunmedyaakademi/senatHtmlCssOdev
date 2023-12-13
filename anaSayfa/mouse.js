const yol = document.getElementById("resim-yolu");

// mouse tıklama fonksiyonu
window.onmousedown = e =>  yol.dataset.mouseDownAt = e.clientX;


// her mouse komutu bittiğinde imlecin kaldığı yeri depolamalıyız
window.onmouseup = () => {
    yol.dataset.mouseDownAt = "0";
    yol.dataset.oncekiYuzde = yol.dataset.yuzde;
}

window.onmousemove = e => {

    // mouse ile komut verildiğini anlamak için
    if (yol.dataset.mouseDownAt === "0") return;

    // İmlecin geldiği konumu bilmek için başlanguç noktasından şu anki konumu çıkartıyoruz.
    const mouseDelta = parseFloat(yol.dataset.mouseDownAt) - e.clientX,
      
        // makismum uzaklık bulunduğumuz pencerenin yarısı kadar.  
        maxDelta = window.innerWidth / 2;

    // mousedelta ve maxdeltanın bölümü decimal bir rakam verir ve 100le çarpımı yüzde olarak hesaplamamızı sağlar. 
    const yuzde = (mouseDelta / maxDelta) * -100,

    // yüzde için 0 değişkeni oluşturuldu ve yüzdelik kaymayı son kayma oranına ekelyerek yeni yüzdeyi bulduk. Bu şekilde mouse komutu bırakıldığında işlem başa dönmeyecek.
        yeniYuzde = parseFloat(yol.dataset.oncekiYuzde) + yuzde,
        oncekiYuzde = Math.max(Math.min(yeniYuzde, 0), -100);

        yol.dataset.yuzde = yeniYuzde;

        yol.animate({
            transform: `translate(${yeniYuzde}%, -50%)`
        }, {duration: 1200, fill : "forwards"})
}

for (const img of yol.getElementsByClassName("img")) {
    img.animate({
        objectPosition: `${yeniYuzde + 100}% center`
    }, {duration:1200, fill: "forwards"})
}