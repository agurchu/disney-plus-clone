import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <Container>
      <h4>Movies Recommended for You</h4>
      <Content>
        <Wrap>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/6666/1126666-v-daedd2133f90"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/6666/1126666-v-daedd2133f90"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/6666/1126666-v-daedd2133f90"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/6666/1126666-v-daedd2133f90"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/6666/1126666-v-daedd2133f90"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/6666/1126666-v-daedd2133f90"
            alt=""
          />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;
const Content = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0 30px 22px -10px;
    border: 4px solid rgba(249, 249, 249, 0.8);
  }
`;
