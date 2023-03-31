import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Movies from "./Movies";
import Viewers from "./Viewers";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../firebase"; // import your Firebase configuration object

// const db = getFirestore(); // get a Firestore instance
// const moviesRef = collection(db, "movies");
// onSnapshot(moviesRef, (snapshot) => {
//   let tempMovies = snapshot.docs.map((doc) => {
//     return { id: doc, ...doc.data() };
//   });
//   console.log(tempMovies);

function Home() {
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "movies"), (snapshot) => {
      console.log(snapshot);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;

  &::before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;
