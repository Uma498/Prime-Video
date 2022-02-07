import styled from 'styled-components/macro'

export const MovieItemContainer = styled.div``

export const Thumbnail = styled.img`
  width: 224px;
  height: 168px;
  border-radius: 8px;
  cursor: pointer;

  @media screen and (min-width: 768px;) {
    width: 260px;
    height: 196px;
  }
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const CloseButton = styled.button`
  align-self: flex-end;
  width: 36px;
  height: 36px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const MoviePlayer = styled.div`
  margin-top: 14px;
  margin-bottom: 30px;
  margin-left: 30px;
  margin-right: 30px;
`
