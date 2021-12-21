![Logo](logo.png)
# **JavaScript Ders Notları - 1**

**Değişkenler**

var degiskenAdi = deger; var sayiBir = 13

Yeniden atama yapılabilir ve yalnızca fonksiyon kapsamı içinden erişilebilir.

Fonksiyon kapsamlıdır.

let degiskenAdi = deger; let sayiBir = 13;

Yeniden atama yapılabilir, var anahtar kelimesinden farklı olarak blok kapsamlıdır.

const sabitAdi = deger; const pi = 3.14;

Yeniden atama yapılamaz ve tanımlama öncesinde erişilemez. Blok kapsamlıdır.

! Önemli Not:

Değişkenler bir fonksiyon veya blok içinde tanımlanmamışlar ise global değişken olarak çalışırlar ve kodun her bölümünden erişilebilirler. Blok kavramı süslü parantezlerin içinde bulunan kodları ifade eder.

Primitive (ilkel) Değişken Türleri:

| **Number** | Tamsayı veya ondalıklı sayılar (int, float) |
| --- | --- |
| **String** | Alfabetik ve sayısal karakterler |
| **Boolean** | True / False , Doğru / Yanlış |
| **Null** | Boş değişken |
| **Undefined** | Tanımsız |

Non- Primitive (ilkel Olmayan) Değişken Türleri:

| **Object** | Sınıf {&quot;ozellik&quot;: deger, baskaozellik: deger} |
| --- | --- |
| **Array** | Dizi [1,2,3, &quot;Elma&quot;, &quot;Armut&quot;, 3.14] |
| **RegExp** | True / False , Doğru / Yanlış |

**Operatörler:**

Aritmetik Operatörler:

| **+** | Toplama |
| --- | --- |
| **-** | Çıkarma |
| **\*** | Çarpma |
| **/** | Bölme |
| **( )** | Gruplama |
| **%** | Mod alma |
| **++** | Artırma |
| **--** | Azaltma |

Karşılaştırma Operatörleri:

| **==** | Eşit |
| --- | --- |
| **===** | Türü ve değeri eşit |
| **!=** | Farklı, eşit değil |
| **\&gt;, \&gt;=** | Büyük, Büyük eşit |
| **\&lt;, \&lt;=** | Küçük, Küçük eşit |

Mantıksal Operatörler:

| **&amp;&amp;** | ve |
| --- | --- |
| **||** | veya |
| **!** | değil |

**Fonksiyonlar**

Normal Fonksiyon Tanımlama

function isim(parametre){

// kodlar

}

Değişkende Saklanan Fonksiyon Tanımlama

let isim = function (parametre){

// kodlar

}

Arrow (ok) Fonksiyon Tanımlama

let isim = (parametre) =\&gt; {

// kodlar

}

Not: Arrow fonksiyonların farkı kapsamda ortaya çıkmaktadır. Global scope ta tanımlanan bir fonksiyonun içerisinde _ **this** _ window objesini döndürürken arrow fonksiyonlarda this nerede tanımlı olursa olsun this anahtar kelimesini çevreleyen süslü parantezlerin objesini döndürür. Bu biraz kafa karıştırıcı olabilir fakat deneyerek öğrenmek en doğrusu olacaktır. Örneğin eventListener objesi de this için bağlı bulunduğu nesneyi döndürmektedir.

**SCOPE (Kapsam) Kavramı**

Yazılım geliştirme ile ilgilenenlerin bildiği gibi JavaScript interpreted (yorumlanan)bir dildir, yani çalışma zamanı (runtime) esnasında yorumlanarak makine diline çevrilir ve çalıştırılır. İşte yazdığınız kodun runtime esnasında hangi blokların (fonksiyon ve nesne gibi) hangi değişken, fonksiyon ve nesnelere erişebileceği ile alakalı kavram scope olarak ifade ediliyor. Özetle scope (kapsam) bir değişkenin erişilebilir olduğu kod bloğudur.

Nesne yönelimli programlama yaklaşımının temel kavramlarından olan encapsulation (kapsülleme) gibi her nesnenin her yerden erişilebilir olmaması gibi düşünebiliriz. Bu erişim yönetimi bize kod verimliliği, hataları azaltma ve hataları daha kolay takip edebilme gibi avantajlar kazandırır.

JS Scope Türleri

1. Global Scope &amp; 2. Local Scope

Eğer değişken bir fonksiyonun içinde tanımlanmış ise local scope, herhangi bir fonksiyonun dışında tanımlanmış ise global scope içindedir.

![](RackMultipart20211221-4-133o0g9_html_86ac9d8085fb6e85.png)

ES6 ile gelen let ve const anahtar kelimeleri var anahtar kelimesinin yaptığı işi yapar var ile tanımlanan değişkenler global scope&#39;ta yer alırken let kendi tanımlandığı scope içinde yer alır.

![](RackMultipart20211221-4-133o0g9_html_be40b901baf13eee.png)

Burada önemli nokta şu global scope içinde bulunan değişkenler uygulama açık kaldığı sürece bellekte saklanırken local scope içinde yer alan değişkenler işi bittikten sonra bellekten temizlenir. Bu işlem _ **Garbage Collector** _ (çöp toplama) olarak isimlendiriliyor ve gelişmiş algoritmalar ile otomatik olarak yapılmaktadır. Değişkenlerin GB tarafından yok edilmesi tamamen scope ile alakalıdır. Çünkü objeler, değişkenler, fonksiyonlar erişilebilir olduğu sürece bellekte kalır.

NOT: Yukarıda verilen örnek sadece for bloğu için geçerlidir ve var/let farkını gösterebilmek için kullanılmıştır. Fonksiyon içinde tanımlanan değişkenler var veya let anahtar kelimeleri farketmeksizin local scope içinde yer alacaktır.

3. Lexical Scope (Static Scope): Bu erişim türü ise iç içe tanımlanmış fonksiyonlarda içerideki fonksiyonun kendi üstündeki fonksiyonlarda tanımlanmış kaynaklara erişebilir olmasıdır.

![](RackMultipart20211221-4-133o0g9_html_ac6c2da17899abf.png)

Sonuç olarak en içte bulunan fonksiyon içinde bulunduğu tüm fonksiyonların kaynaklarına erişebilir ama bu durum terse işletilemez yani dışardan içerideki scope erişmek mümkün değildir.

Closure

Peki kendi veya lexical scope&#39;u içinde olmasa da bazı verilere erişmek için ne yapmalıyız noktasında scope kavramı devreye giriyor. Closure ile erişim yapabilmek için return anahtar kelimesi ile döndürülecek bir fonksiyon ile kapı açmamız gerekiyor.

![](RackMultipart20211221-4-133o0g9_html_1432a547535c3ccc.png)

Buraya kadar bahsettiklerimize göre foo&#39;nun içinde yer alan number&#39;a erişmemiz mümkün değildi fakat otherFoo fonksiyonunu return ile geri döndürerek bir kapı aralaşmış oluyoruz ve foo&#39;nun test&#39;e aktarılması esnasında GC&#39;ün foo&#39;nun bellekte tuttuklarını temizlemesini bekliyorduk fakat bir referans (return) olduğu için JS Engine &quot;referans varsa bu veriler çağırılabilir&quot; şeklinde yorumlayarak kapıyı açmamızı sağlıyor ve 3 çıktısını elde ediyoruz. Yani foo&#39;nun verilerini bellekte tutan şey otherFoo&#39;nun test&#39;e referans edilmesi oluyor.


