import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Wrap>
          <img src="https://lh3.googleusercontent.com/BKZ9j1cgzXqbCCYPcRjw2eHEw2t5291lxXxXB6wE7BBD18Tgv8Vhzc5Y8hl609GfZ7VShv6uAWCndxiFO7gLR1B8BLp7vnzZV4Ji3KCr" />
        </Wrap>
        <Wrap>
          <img src="https://lh3.googleusercontent.com/BKZ9j1cgzXqbCCYPcRjw2eHEw2t5291lxXxXB6wE7BBD18Tgv8Vhzc5Y8hl609GfZ7VShv6uAWCndxiFO7gLR1B8BLp7vnzZV4Ji3KCr" />
        </Wrap>
        <Wrap>
          <img src="https://lh3.googleusercontent.com/BKZ9j1cgzXqbCCYPcRjw2eHEw2t5291lxXxXB6wE7BBD18Tgv8Vhzc5Y8hl609GfZ7VShv6uAWCndxiFO7gLR1B8BLp7vnzZV4Ji3KCr" />
        </Wrap>
        <Wrap>
          <img src="https://lh3.googleusercontent.com/BKZ9j1cgzXqbCCYPcRjw2eHEw2t5291lxXxXB6wE7BBD18Tgv8Vhzc5Y8hl609GfZ7VShv6uAWCndxiFO7gLR1B8BLp7vnzZV4Ji3KCr" />
        </Wrap>
        <Wrap>
          <img src="https://lh3.googleusercontent.com/BKZ9j1cgzXqbCCYPcRjw2eHEw2t5291lxXxXB6wE7BBD18Tgv8Vhzc5Y8hl609GfZ7VShv6uAWCndxiFO7gLR1B8BLp7vnzZV4Ji3KCr" />
        </Wrap>
        <Wrap>
          <img src="https://lh3.googleusercontent.com/BKZ9j1cgzXqbCCYPcRjw2eHEw2t5291lxXxXB6wE7BBD18Tgv8Vhzc5Y8hl609GfZ7VShv6uAWCndxiFO7gLR1B8BLp7vnzZV4Ji3KCr" />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
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
