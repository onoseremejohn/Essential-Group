import styled from "styled-components";
import { GiMagnifyingGlass, GiLaptop, GiSmartphone } from "react-icons/gi";
const About = () => {
  return (
    <Wrapper className='section'>
      <div className='section-center'>
        <Comp className='one'>
          <div className='icon'>
            <GiMagnifyingGlass />
          </div>
          <h3>Potential Client Growth</h3>
          <p>
            It is not only important to grow your customer but also to retain
            them for the long-term. After all, a growing customer base ensures
            the sustainability of a business while keeping it on a growth
            trajectory.
          </p>
        </Comp>
        <Comp className='two'>
          <div className='icon'>
            <GiLaptop />
          </div>
          <h3>Organic Traffic gather</h3>
          <p>
            The larger the number of visitors to your website, the better! We
            will help you focus on increasing the quality of your website
            traffic, as not all traffic is good traffic. And in fact, bad
            traffic can bog your business down at some level but EssentialGroup
            have you covered.
          </p>
        </Comp>
        <Comp className='three'>
          <div className='icon'>
            <GiSmartphone />
          </div>
          <h3>Professional services</h3>
          <p>
            We are an experienced and talented team, you have nothing to worry
            about as EssentialGroup will help your business overcome specific
            challenges through a dedicated project or the deployment of new
            hardware.
          </p>
        </Comp>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: #f9d7d7;
  @media screen and (min-width: 800px) and (max-width: 1003px) {
    .section-center {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, minmax(20px, auto));
      gap: 1em;
    }
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
    .section-center {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1em;
    }
  }
`;

const Comp = styled.article`
  .icon {
    width: 80px;
    height: 80px;
    border-radius: 50px 3px 50px 50px;
    background-color: #ef6b6b;
    margin-bottom: 2em;
    display: grid;
    place-items: center;
    svg {
      font-size: 3rem;
      color: green;
    }
  }
  h3 {
    margin-bottom: 1em;
  }
  p {
    font-size: 1.2rem;
  }
`;
export default About;
