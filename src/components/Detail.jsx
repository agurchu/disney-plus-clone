import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/3064/1413064-i-585c2e207609" />
      </Background>
      <ImageTitle>
        <img src="https://img1.hotstarext.com/image/upload/f_auto,h_136/sources/r1/cms/prod/8966/1478966-t-7d9de66aea5e" />
      </ImageTitle>

      <SubTitle>
        <span>2009</span>

        <span>
          . <span>2h 42m</span>
        </span>
        <span>
          . <span>10 Languages</span>
        </span>
      </SubTitle>
      <Description>
        A man embarks on an adventure to an exotic world that he learns to call
        home and fights to protect.
      </Description>

      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" />
        </GroupWatchButton>
      </Controls>
    </Container>
  );
}

export default Detail;
const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  right: 0;
  z-index: -1;
  opacity: 0.8;

  min-width: 200px;
  min-height: 70vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageTitle = styled.div`
  height: auto;
  width: 35vw;
  margin-top: 120px;

  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  border-radius: var(--radius-01);
  padding: 14px;
  margin-right: 22px;
  display: flex;
  cursor: pointer;
  height: 56px;
  align-items: center;
  background: rgb(249, 249, 249);
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  text-transform: uppercase;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 20px;
  }
  span {
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 1.8px;
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(249, 249, 249, 0.3);
  color: white;

  &:hover {
    background: rgba(249, 249, 249, 0.4);
  }
`;
const AddButton = styled(TrailerButton)`
  width: 56px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(249, 249, 249, 0.4);
  span {
    font-size: 30px;
  }
  &:hover {
    transform: scale(1);
    background: rgba(249, 249, 249, 0.6);
  }
`;
const GroupWatchButton = styled(AddButton)`
  img {
    width: 100%;
    height: 100%;
  }
`;

const SubTitle = styled.div`
  display: flex;
  color: rgb(249, 249, 249);
  font-size: 14px;
  font-weight: 600;
  min-height: 20px;

  margin-bottom: 26px;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  span span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;
const Description = styled.div`
  margin-bottom: 26px;
  font-size: 16px;
  font-weight: 600;
  max-width: 450px;
`;
