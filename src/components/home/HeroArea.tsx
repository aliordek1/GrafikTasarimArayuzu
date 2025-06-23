import { useEffect, useState } from "react";

export default function HeroArea() {
  interface Quote {
    cumle: string;
    isim: string;
  }
  const [data, setData] = useState<Quote | null>(null);//API cekmek icin interface olusturup useEffect icinde kullandim baglantimi alt kisimda da nerede olacagini gosterdim
  useEffect(() => {
    fetch('https://api.npoint.io/f1b30894e2077a8e4e21')
      .then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then((json: Quote[]) => {
        const random = json[Math.floor(Math.random() * json.length)];
        setData(random);
      })
      .catch(console.error);
  }, []);
  return (
    <>
      <section id="home" className="main-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">

              <div className="hero-content wow fadeInUp text-center delay-0-2s">
                <h2>ALİ ÖRDEK</h2>
              </div>

            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 pt-30">

              <div className="hero-content wow fadeInUp delay-0-2s">
                <div className="clienti-reviews">
                  <ul className="clienti-profile">
                    <li>
                      <img className="img-fluid" src="01.jpg" alt="client" />
                    </li>
                    <li>
                      <img className="img-fluid" src="02.jpg" alt="client" />
                    </li>
                    <li>
                      <img className="img-fluid" src="03.jpg" alt="client" />
                    </li>
                  </ul>
                  <div className="reviews">100'den fazla yorum <span>(5 üzerinden 4,96)</span>
                    <p>{data && (
                      <div >
                        <p >"{data.cumle}"</p>
                        <p >– {data.isim ?? 'Bilinmeyen'}</p>
                      </div>
                    )}</p>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <img src="ali.jpg" alt="" />
              </div>

            </div>
            <div className="col-lg-3 pt-30">
              <div className="hero-content wow fadeInUp delay-0-4s">
                <p>.</p>
                <a className="theme-btn" href="">İletişime geçin</a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
