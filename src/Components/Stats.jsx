import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import CountUp from "./Count";
const Stats = () => {
  const target = {
    users: 70,
    clients: 85,
    projects: 30,
    worldwide: 90,
  };
  const obs = useRef(null);
  const [intersect, setIntersect] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIntersect(true);
      } else {
        setIntersect(false);
      }
    });
    observer.observe(obs.current);
    return () => observer.disconnect();
  }, [obs]);
  return (
    <Wrapper className='section section-center'>
      <div ref={obs}>
        <p className='head'>
          {<CountUp target={target.users} intersect={intersect} />} <sub>%</sub>
        </p>
        <p className='foot'>USERS RECOMMENDED</p>
      </div>
      <div>
        <p className='head'>
          {<CountUp target={target.clients} intersect={intersect} />}{" "}
          <sub>+</sub>
        </p>
        <p className='foot'>SATISFIRD CLIENTS</p>
      </div>
      <div>
        <p className='head'>
          {<CountUp target={target.projects} intersect={intersect} />}{" "}
          <sub></sub>
        </p>
        <p className='foot'>USERS RECOMMENDED</p>
      </div>
      <div>
        <p className='head'>
          {<CountUp target={target.worldwide} intersect={intersect} />}{" "}
          <sub>+</sub>
        </p>
        <p className='foot'>WORLDWIDE USERS</p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2em;
  div {
    border: 1px solid #8b8b872b;
    padding: 2em;
  }
  .head,
  .foot {
    text-align: center;
  }
  .head {
    font-weight: bolder;
    font-size: 3rem;
  }
  sub {
    vertical-align: bottom;
  }
  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 1004px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
export default Stats;
