import React from "react";
import Me from "../../storage/Me.jpg";

const AboutMe = () => {
  return (
    <div className="container_block">
      <div className="hero_about">
        <h1 className="hero_title">Frontend developer</h1>
        <h3 className="hero_subtitle">Кириленко Кристина</h3>
        <p className="hero_description">
          Привет! Занимаюсь веб-разработкой на языке Java Script
        </p>

        <div>
          <content id="aboutme">
            <div class="content">
              <div class="inform">
              </div>

              <div class="list">
                <div class="block1">
                <h2>Обо мне</h2>
                  <h3>Личная информация</h3>
                  <p>
                    <b>Гражданство: </b>
                    <span>Кыргызская Республика</span>
                  </p>

                  <p>
                    <b>Местро проживания: </b>
                    <span>г. Бишкек</span>
                  </p>

                  <p>
                    <b>Переезд: </b>
                    <span>Невозможно</span>
                  </p>

                  <p>
                    <b>Дата рождения: </b>
                    <span>19 июня 2003 (19лет)</span>
                  </p>

                  <p>
                    <b>Пол: </b>
                    <span>Женский</span>
                  </p>

                  <p>
                    <b>Семейное положение: </b>
                    <span>Не замужем</span>
                  </p>
                </div>

              </div>
            </div>
          </content>
        </div>
      </div>
      <div className="blockImage">
        <img src={Me} alt="" />
      </div>
      <div></div>
    </div>
  );
};

export default AboutMe;
