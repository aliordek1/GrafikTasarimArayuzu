
import { useState } from 'react'
import ImagePopup from '../../modals/ImagePopup';

import img_1 from "../../../public/assets/images/projects/work1.jpg";
import img_2 from "../../../public/assets/images/projects/work2.jpg";
import img_3 from "../../../public/assets/images/projects/work3.jpg";
import img_4 from "../../../public/assets/images/projects/work4.jpg";

const portfolio_images = [
  {
    id: 1,
    image: img_1,
  },
  {
    id: 2,
    image: img_2,
  },
  {
    id: 3,
    image: img_3,
  },
  {
    id: 4,
    image: img_4,
  },
]

export default function SingleProjectArea() {

  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [isOpen, setIsOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (i: any) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };
  //  images
  const image = portfolio_images.slice(0, 5).map((item) => item.image);


  return (
    <>
      <div className="single-project-page-design">
        <div className="single-project-image">
          <img src="assets/images/projects/work2.jpg" alt="image" />
        </div>
        <div className="container pt-60 pb-40">
          <div className="row">
            <div className="col-lg-4">

              <div className="single-project-page-left wow fadeInUp delay-0-2s">
                <div className="single-info">
                  <p>Yıl</p>
                  <h3>2025</h3>
                </div>
                <div className="single-info">
                  <p>Müşteri</p>
                  <h3>Bento Studio</h3>
                </div>
                <div className="single-info">
                  <p></p>Hizmetler
                  <h3>Web Tasarımı</h3>
                </div>
                <div className="single-info">
                  <p>Proje</p>
                  <h3>Yaratıcı</h3>
                </div>
              </div>

            </div>

            <div className="col-lg-8">
              <div className="single-project-page-right wow fadeInUp delay-0-4s">
                <h2>
                  Tanım
                </h2>
                <p></p>
                <p>Bu proje, 2025 yılında Bento Stüdyosu için özel olarak geliştirilen modern bir web tasarım çalışmasıdır. Hedef; markanın yaratıcı kimliğini dijitalde güçlü, sade ve etkileyici bir biçimde yansıtmaktır. Siyah zemin üzerine kurulu sade tipografi, net içerik hiyerarşisi ve dengeli boşluk kullanımı ile kullanıcıya odaklı, rafine bir deneyim sunar.


                  Tasarımda görsellik kadar işlevsellik de ön planda tutulmuş; her detay, ziyaretçinin dikkatini dağıtmadan bilgiye ulaşmasını sağlamak üzere kurgulanmıştır. Bu yaklaşımla, marka ile kullanıcı arasında güçlü bir görsel ve duygusal bağ kurulması amaçlanmıştır.</p>
              </div>
            </div>

          </div>

          <div className="row pt-60">
            {portfolio_images.map((item, i) => (
              <div className="col-lg-6">
                <a style={{ cursor: "pointer" }}
                  onClick={() => handleImagePopup(i)} className="work-popup">
                  <div className="single-image wow fadeInUp delay-0-2s">
                    <img src={item.image} style={{ height: "auto" }} alt="gallery" />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* image light box start */}
      {isOpen && (
        <ImagePopup
          images={image}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}

    </>
  )
}
