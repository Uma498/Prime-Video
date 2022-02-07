import styled from 'styled-components/macro'

export const PrimeVideosContainer = styled.div`
  background-color: #000000;
  min-height: 100vh;
  padding-bottom: 40px;
`

export const Image = styled.img`
  width: 100%;
`

export const MoviesContainer = styled.div`
  width: 90%;
  margin: auto;
  margin-bottom: 28px;

  @media screen and (min-width: 992px;) {
    max-width: 1100px;
  }
`

export const MoviesHeading = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  line-height: 1.5;
  margin-top: 32px;
  margin-bottom: 28px;

  @media screen and (min-width: 992px;) {
    font-size: 24px;
  }
`
