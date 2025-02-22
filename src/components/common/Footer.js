import React from "react";
import styled from "styled-components";
import Dot from "../../assets/img/footer_dot_01.svg";

const FooterWrap = styled.div`
  @media screen and (max-width: 500px) {
    .footer {
      width: 100vw;
      background-color: #f7f7f7;
      &__main {
        width: 100vw-5rem;
        margin: 2.5rem;
        display: flex;
        flex-direction: column;
        &--title {
          font-size: 0.8rem;
          font-weight: 600;
          line-height: 118%;
          margin-top: 2rem;
        }
        &--part {
          font-weight: 400;
          line-height: 150%;
        }
      }

      &__bottom {
        width: 100vw-5rem;
        padding: 2.5rem;
        &--company {
          margin-top: 1.4rem;
          color: #747474;
        }
        &--part {
          margin: 0px 5px;
          font-weight: 500;
          line-height: 150%;
          color: #747474;
          margin-bottom: 2.3rem;
        }
        &--partContainer {
          display: flex;
        }
      }
    }
    .mobile__line {
      display: block;
      border: 1px solid #dddddd;
      margin-top: 3rem;
    }
    .mobile_hide {
      display: none;
    }
  }
  @media screen and (min-width: 501px) {
    .footer {
      width: 100%;
      background-color: #f7f7f7;
      &__main {
        padding: 35px;
        display: flex;
        justify-content: space-between;
        &--section {
          width: 100%;
        }
        &--title {
          font-size: 0.8rem;
          font-weight: 600;
          line-height: 118%;
        }
        &--part {
          font-weight: 400;
          line-height: 150%;
        }
      }

      &__line {
        margin-top: 32px;
        border: 1px solid #dddddd;
      }
      &__bottom {
        display: flex;
        padding: 15px 0px;
        &--company {
          margin-right: 15px;
          color: #747474;
        }
        &--partContainer {
          display: flex;
        }
        &--part {
          margin: 0px 5px;
          font-weight: 500;
          line-height: 150%;
          color: #747474;
        }
      }
    }
  }
`;

function Footer(props) {
  return (
    <FooterWrap>
      <div className="footer">
        <div className="footer__main">
          <div className="footer__main--section">
            <h1 className="footer__main--title">소개</h1>
            <p className="footer__main--part">에어비앤비 이용 방법</p>
            <p className="footer__main--part">뉴스룸</p>
            <p className="footer__main--part">투자자 정보</p>
            <p className="footer__main--part">에어비앤비 플러스</p>
            <p className="footer__main--part">에어비앤비 Luxe</p>
            <p className="footer__main--part">호텔 투나잇</p>
            <p className="footer__main--part">에어비앤비 비즈니스 프로그램</p>
            <p className="footer__main--part">
              호스트 분들이 있기에 가능합니다.{" "}
            </p>
            <p className="footer__main--part">채용정보</p>
            <p className="footer__main--part">창립자 편지</p>
          </div>
          <div className="mobile__line"></div>
          <div className="footer__main--section">
            <h1 className="footer__main--title">커뮤니티</h1>
            <p className="footer__main--part">다양성 및 소속감</p>
            <p className="footer__main--part">접근성</p>
            <p className="footer__main--part">에어비앤비 어소시에이트</p>
            <p className="footer__main--part">구호 인력을 위한 숙소</p>
            <p className="footer__main--part">게스트 추천</p>
            <p className="footer__main--part">Airbnb.org</p>
          </div>
          <div className="mobile__line"></div>
          <div className="footer__main--section">
            <h1 className="footer__main--title">호스팅하기</h1>
            <p className="footer__main--part">숙소 호스팅</p>
            <p className="footer__main--part">온라인 체험 호스팅하기</p>
            <p className="footer__main--part">체험 호스팅하기</p>
            <p className="footer__main--part">책임감 있는 호스팅</p>
            <p className="footer__main--part">자료 센터</p>
            <p className="footer__main--part">커뮤니티 센터</p>
            <p className="footer__main--part">접근성</p>
          </div>
          <div className="mobile__line"></div>
          <div className="footer__main--section">
            <h1 className="footer__main--title">에어비앤비 지원</h1>
            <p className="footer__main--part">
              에어비앤비의 코로나19 대응 방안
            </p>
            <p className="footer__main--part">도움말 센터</p>
            <p className="footer__main--part">예약 취소 옵션</p>
            <p className="footer__main--part">에어비앤비 이웃 민원 지원</p>
            <p className="footer__main--part">신뢰와 안전</p>
          </div>
        </div>
        <div className="footer__line"></div>
        <div className="footer__bottom">
          <div className="mobile__line"></div>
          <div className="footer__bottom--company">ⓒ 2021 Airbnb,Inc </div>
          <div className="footer__bottom--partContainer">
            <img
              className="footer__bottom--part mobile_hide"
              src={Dot}
              alt=""
            ></img>
            <div className="footer__bottom--part">개인정보 처리방침</div>
            <img className="footer__bottom--part" src={Dot} alt=""></img>
            <div className="footer__bottom--part">이용약관</div>
            <img className="footer__bottom--part" src={Dot} alt=""></img>
            <div className="footer__bottom--part">사이트맵</div>
            <img className="footer__bottom--part" src={Dot} alt=""></img>
            <div className="footer__bottom--part">한국의 변경된 환불 정책</div>
            <img className="footer__bottom--part" src={Dot} alt=""></img>
            <div className="footer__bottom--part">회사 세부정보</div>
          </div>
        </div>
      </div>
    </FooterWrap>
  );
}

export default Footer;
