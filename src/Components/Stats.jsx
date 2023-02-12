import styled from "styled-components";
import CountUp from "./Count";
const Stats = () => {
  const target = {
    users: 70,
    clients: 85,
    projects: 30,
    worldwide: 90,
  };

  return (
    <Wrapper className='section section-center'>
      <div>
        <p className='head'>
          {<CountUp target={target.users} />} <sub>%</sub>
        </p>
        <p className='foot'>USERS RECOMMENDED</p>
      </div>
      <div>
        <p className='head'>
          {<CountUp target={target.clients} />} <sub>+</sub>
        </p>
        <p className='foot'>SATISFIRD CLIENTS</p>
      </div>
      <div>
        <p className='head'>
          {<CountUp time={30} target={target.projects} />} <sub></sub>
        </p>
        <p className='foot'>USERS RECOMMENDED</p>
      </div>
      <div>
        <p className='head'>
          {<CountUp target={target.worldwide} />} <sub>+</sub>
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
