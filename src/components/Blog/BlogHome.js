import React from "react";
import Footer from "../footer/Footer";
import Slide from "../Slide/Slide";
import Card from "./Card";
import CardTwo from "./CardTwo";

const BlogHome = () => {
  const data = [
    {
      id: 1,
      titleOne: "YOU CAN CHANGE THE WORLD",
      titletwo: "MẠNH MẼ",
      paraOne: "How Women are Redirecting Hollywood",
      paraTwo: "Những cách mới để đeo túi thắt lưng Nike quay trở lại",
      name: "Trích : Jasmin Smith",
      subTitle: "Mua tại Nha Trang Fashion",
      qrCode: "./images/qrcode.png",
      cover: "./Images/blog5.jpg",
    },
  ];
  return (
    <>
      <section className="home">
        <div className="left-content">
          {data.map((value) => {
            return (
              <div className="content">
                <div className="logo">
                  <h1>Ke7</h1>
                </div>
                <div className="home-img">
                  <img src={value.cover} alt="" />
                </div>
                <div className="text">
                  <h1>{value.titleOne}</h1>
                  <p>{value.paraOne}</p>
                  <span>{value.name}</span>
                </div>
                <div className="text text2">
                  <h1>{value.titletwo}</h1>
                  <p>{value.paraTwo}</p>
                  <span>{value.subTitle}</span>
                </div>

                <div className="qrcode">
                  <img src={value.qrCode} alt="" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="right-content">
          <Slide />
          <Card />
          <CardTwo />
          <Footer />
        </div>
      </section>
    </>
  );
};

export default BlogHome;
