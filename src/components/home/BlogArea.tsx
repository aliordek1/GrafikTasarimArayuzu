

export default function BlogArea() {
  return (
    <>
      <section className="blog-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title wow fadeInUp delay-0-2s">
                <h2>Hİkayeler</h2>
              </div>
            </div>
          </div>

          <div className="row blog-post-box align-items-center">
            <div className="col-lg-6">
              <div className="blog-post-img">
                <a href="#">
                  <img src="blog1.jpg" alt="" />
                </a>
                <div className="blog-post-category">
                  <a href="#">Yardım</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-post-caption">
                <h3>21 Haziranda yayınlandı</h3>
                <h2><a className="link-decoration" href="#">Harİka performans gösteren bİr açılış sayfası oluşturun</a></h2>
                <a className="theme-btn theme-btn-two" href="#">Devamını Oku <i className="ri-arrow-right-line"></i></a>
              </div>
            </div>
          </div>


          <div className="row blog-post-box align-items-center">
            <div className="col-lg-6">
              <div className="blog-post-img">
                <a href="#">
                  <img src="blog2.jpg" alt="" />
                </a>
                <div className="blog-post-category">
                  <a href="#">Markalaşma</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-post-caption">
                <h3>.</h3>
                <h2><a className="link-decoration" href="#">Web Tasarımında Karİyere Başlamak Ve Büyümek</a></h2>
                <a className="theme-btn theme-btn-two" href="#">Devamını Oku <i className="ri-arrow-right-line"></i></a>
              </div>
            </div>
          </div>


          <div className="row blog-post-box align-items-center">
            <div className="col-lg-6">
              <div className="blog-post-img">
                <a href="#">
                  <img src="blog3.jpg" alt="" />
                </a>
                <div className="blog-post-category">
                  <a href="#">Tasarım</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-post-caption">
                <h3>21 Haziranda yayınlandı</h3>
                <h2><a className="link-decoration" href="#">Tasarımcılar Geleceğe Nasıl Hazırlanabİlİr?  </a></h2>
                <a className="theme-btn theme-btn-two" href="#">Devamını Oku <i className="ri-arrow-right-line"></i></a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
