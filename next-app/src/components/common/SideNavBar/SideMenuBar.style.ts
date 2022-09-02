import styled from "styled-components"

export const SideMenuBarContainer = styled.div`
  position: fixed;
  background-color: #f5f5f5;
  width: 300px;
  height: 100%;
`

export const CloseSection = styled.section`
  height: 60px;
  background-color: #ebebeb;
  padding: 0 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const CloseButton = styled.button`
  display: flex;
  border: 0;
  font-size: 14px;
  font-weight: 600;
  color: #8c8c8c;
  cursor: pointer;
`

export const MenuSection = styled.section`
  display: flex;
  flex-direction: column;
  height: calc(100% - 60px);
  padding: 8px 0 28px;
  justify-content: space-between;
`