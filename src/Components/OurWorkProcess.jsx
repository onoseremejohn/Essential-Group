import styled from "styled-components";
import intro from "../assets/introduction.jpg";
import growth from "../assets/growth.jpg";
import post from "../assets/post3.jpg";
const OurWorkProcess = () => {
  return (
    <Wrapper className='section section-center'>
      <h2 className='text-center'>Our Work Process</h2>
      <h3 className='text-center'>we work with dedication & professionally</h3>
      <Container>
        <figure className='one'>
          <img src={intro} alt='introduction' />
          <figcaption>
            <span className='number'>01</span>
            <p>Project introduction and details</p>
          </figcaption>
        </figure>
        <figure className='two'>
          <img src={growth} alt='growth' />
          <figcaption>
            <span className='number'>02</span>
            <p>Market statics growth and advance analysis</p>
          </figcaption>
        </figure>
        <figure className='three'>
          <img src={post} alt='post' />
          <figcaption>
            <span className='number'>03</span>
            <p>Final Setup and result to create impression</p>
          </figcaption>
        </figure>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }
  .text-center {
    text-align: center;
  }
  h2 {
    font-size: 1.1rem;
    margin-bottom: 1em;
    font-weight: lighter;
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
    width: 50%;
    margin: 0 auto;
    margin-bottom: 2em;
  }
  figure {
    display: flex;
    flex-direction: column;
    gap: 1em;
    justify-content: space-between;
  }
  figcaption {
    display: flex;
    align-items: center;
    gap: 2em;
  }
  .number {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    background-color: #f9d7d7;
    border-radius: 20px 20px 0 20px;
  }
  p {
    font-size: 1.1rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: stretch;
  @media screen and (min-width: 800px) and (max-width: 1003px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, minmax(20px, auto));

    .one {
      grid-column: 1/3;
    }
    .two {
      grid-column: 3/5;
    }
    .three {
      grid-column: 2/4;
    }
  }
  @media screen and (min-width: 1004px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default OurWorkProcess;
