import styled from "styled-components";
import banner from "../assets/banner-img.png";
const Section2 = () => {
  return (
    <Wrapper className='section section-center'>
      <div>
        <h2 className='text-center left'>SOLUTION PROVIDER COMPANY</h2>

        <h3 className='text-center left'>
          WEB HOSTING + WEB DEVELOPMENT + MOBILE APP DEVELOPMENT + SEO + DIGITAL
          MARKETING + SMS + PRODUCT DEVELOPMENT + RESEARCH MANAGEMENT
        </h3>
        <img src={banner} alt='banner' />
      </div>
      <div>
        <h2 className='text-center'>ABOUT US</h2>
        <h3 className='text-center'>
          We Work With Dedication & Professionally
        </h3>
        <p className='text-center paragraph'>
          EssentialGroup is a Technologies Solution Provider In Nigeria, We
          source and supply in-demand IT, even when others can’t. Offering a
          combination of support services, new software and remanufactured
          technology, we deliver value at every step. <br />
          <br /> Create the exact solution you need to engage customers at every
          step of their journey.
        </p>
        <a href='' className='request text-center'>
          Request for free Consultation
        </a>{" "}
        <button className='btn'>Contact Us</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .text-center {
    text-align: center;
  }
  img {
    margin: 0 auto;
    margin-top: 30px;
  }
  div + div {
    margin-top: 30px;
  }
  .paragraph {
    margin-top: 2em;
    font-size: 1.2rem;
  }
  .request {
    display: block;
    margin-bottom: 1.75em;
  }
  .btn {
    display: block;
    margin: 0 auto;
  }
  h2 {
    font-size: 1.1rem;
    letter-spacing: 4px;
    font-weight: lighter;
    margin-bottom: 1em;
    position: relative;
  }
  h2::before {
    content: "";
    width: 40px;
    height: 3px;
    background-color: red;
    position: absolute;
    top: -10px;
  }
  h3 {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 1042px) {
    display: grid;
    grid-template-columns: 65% 1fr;
    gap: 1em;
    align-items: center;
    .left {
      text-align: left;
    }
    div + div {
      margin-top: 0px;
    }
    h2 {
      font-size: 1.25rem;
    }
    h3 {
      font-size: 1.35rem;
    }
  }
`;
export default Section2;
