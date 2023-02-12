import styled from "styled-components";
import { useGlobalContext } from "../AppContext";
import hero from "../assets/hero-img.png";
const Hero = () => {
  const { data, index } = useGlobalContext();
  return (
    <Wrapper className='section section-center'>
      <img src={hero} alt='hero' />
      <div className='text-center'>
        {data.map((item, slideIndex) => {
          let position = "next";
          if (slideIndex === index) {
            position = "active";
          }
          if (
            slideIndex === index - 1 ||
            (index === 0 && slideIndex === data.length - 1)
          ) {
            position = "last";
          }
          const { id, title, text, link } = item;
          return (
            <article key={id} className={position}>
              <h2>{title}</h2>
              <p>{text}</p>
              <a href={link} className='btn'>
                GET
              </a>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .text-center {
    text-align: center;
    position: relative;
    min-height: 330px;
    overflow: hidden;
  }
  .text-center > article {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    max-height: 100%;
    opacity: 0;
    transition: var(--mainTransition);
  }
  article h2 {
    margin-bottom: 0.2em;
  }
  img {
    max-width: 80%;
    margin: 0 auto;
    /* object-fit: cover; */
  }
  p {
    font-size: 1.1rem;
    margin-bottom: 1em;
  }
  .text-center > article.active {
    opacity: 1;
    transform: translate(0, -50%);
  }
  .text-center > article.last {
    transform: translate(-100%, -50%);
  }
  .text-center > article.next {
    transform: translate(100%, -50%);
  }
  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;

    img {
      min-width: 340px;
      width: 100%;
      max-width: 542px;
      grid-column: 2/3;
      animation: bounce 2s ease-in-out infinite alternate-reverse both;
    }
    .text-center {
      grid-column: 1/2;
      grid-row: 1/2;
      text-align: unset;
      overflow: unset;
    }
    .text-center > article {
      top: 50%;
      height: unset;
      max-height: 100%;
    }
    .text-center > article.active {
      transform: translate(0, -50%);
    }
    .text-center > article.last {
      transform: translate(-100%, -50%);
    }
    .text-center > article.next {
      transform: translate(100%, -50%);
    }
  }
  @keyframes bounce {
    0% {
      transform: translateY(15px);
    }
    100% {
      transform: translateY(-15px);
    }
  }
  @media screen and (min-width: 1020px) {
    p {
      font-size: 1.5rem;
    }
  }
`;

export default Hero;
