import React from 'react'
import grey370icon from "../../assets/img@2x.png";
import Line from "../../assets/Line.svg";
import greenicon from "../../assets/Icon awesome-check-circle.svg";

export default function DescriptionContent() {
  return (
    <>
    <div id="content1" className='text-sm'>
                  <div className="content1-title">What are features there include?</div>
                  <div className="content1-text">
                    Perferendis lacinia non, est distinctio ut eveniet, posuere mus
                    nostrum eget itaque, irure illo leo. Est! Numquam <br /> autem
                    ipsa! Dolores eiusmod, impedit bibendum porro! Error! Magna
                    quia. Quia officia non? Lectus corporis <br /> laudantium cursus
                    voluptas eveniet
                  </div>
                  <div className="content1-text2">
                    Perferendis, voluptatum. Exercitation justo aliquip? Convallis
                    ligula aptent aute ab? Sit necessitatibus error, quaerat <br />{" "}
                    curae tristique tempore velit, nascetur ullam metus molestie,
                    etiam sapien cupiditate magni do ut, consequuntur <br />
                  </div>
    
                  <div className="content1-sec-section pt-4">
                    <img src={Line} />
    
                    <div className="verifyitem flex pt-2">
                      <img src={greenicon} />
                      Fugiat suspendisse maxime excepteur cillum hic cum labore
                      cenas. Invent
                    </div>
                    <div className="verifyitem flex pt-2">
                      <img src={greenicon} />
                      Fugiat suspendisse maxime excepteur cillum hic cum labore
                      cenas. Invent
                    </div>
                    <div className="verifyitem flex pt-2">
                      <img src={greenicon} />
                      Fugiat suspendisse maxime excepteur cillum hic cum labore
                      cenas. Invent
                    </div>
                    <div className="flex md:flex-row flex-col space-y-3 md:space-y-0 md:space-x-4  mx-auto my-5">
                      <img className="w-80" src={grey370icon} />
                      <img className="w-80" src={grey370icon} />
                    </div>
                    <div className="paragraphs-data">
                      <p className="paragraph1">
                        Perferendis lacinia non, est distinctio ut eveniet, posuere
                        mus nostrum eget itaque, irure illo leo. Est! Numquam <br />{" "}
                        autem ipsa! Dolores eiusmod, impedit bibendum porro! Error!
                        Magna quia. Quia officia non? Lectus corporis
                      </p>
                      <p className="paragraph1 pt-4">
                        Perferendis, voluptatum. Exercitation justo aliquip?
                        Convallis ligula aptent aute ab? Sit necessitatibus error,
                        quaerat <br /> curae tristique tempore velit, nascetur ullam
                        metus molestie, etiam sapien cupiditate magni do ut,
                        consequuntur <br />
                        doloribus ea fusce recusandae eros, minim dolore magnis
                      </p>
                    </div>
                  </div>
    
                  <div className="tworows-text my-2">
                    <div className="grid-item flex">
                      <img src={greenicon} />
                      Fugiat suspendisse maxime excepteu
                    </div>
                    <div className="grid-item flex">
                      <img src={greenicon} />
                      Fugiat suspendisse maxime excepteu
                    </div>
                    <div className="grid-item flex">
                      <img src={greenicon} />
                      Fugiat suspendisse maxime excepteu
                    </div>
                    <div className="grid-item flex">
                      <img src={greenicon} />
                      Fugiat suspendisse maxime excepteu
                    </div>
                    <div className="grid-item flex">
                      <img src={greenicon} />
                      Fugiat suspendisse maxime excepteu
                    </div>
                    <div className="grid-item flex">
                      <img src={greenicon} />
                      Fugiat suspendisse maxime excepteu
                    </div>
                  </div>
    
                  <div>
                    <p className="text50">
                      Perferendis lacinia non, est distinctio ut eveniet, posuere
                      mus nostrum eget itaque, irure illo leo. Est! Numquam <br />{" "}
                      autem ipsa! Dolores eiusmod, impedit bibendum porro! Error!
                      Magna quia. Quia officia non? Lectus corporis
                    </p>
                  </div>
                </div>
    </>
  )
}
