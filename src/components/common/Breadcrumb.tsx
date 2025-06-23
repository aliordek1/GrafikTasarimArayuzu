
export default function Breadcrumb({ title, style_2, style_3, style_4 }: any) {
  return (
    <>
      <section className="single-page-hero-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <h2>{title}</h2>
              {style_2 &&
                <p>En Son Çalışmalarımın ve Başarılarımın Bir Koleksiyonu: Tutkumu ve Becerilerimi Tanımlayan Projeleri Keşfedin</p>
              }
              {style_3 &&
                <p>Benimle iletişime geçmek için aşağıdaki formu doldurun. Yeni fırsatlar hakkında bilgi edinmek beni her zaman heyecanlandırır ve 24 saat içinde sorunuza yanıt vermek için elimden geleni yapacağım.</p>
              }
              {style_4 &&
                <p>
                  Meraklı Zihinler İçin Hikayeler, Tavsiyeler ve İlham</p>
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
