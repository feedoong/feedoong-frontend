import * as S from './Loading.style'

const Loading: React.FC = () => {
  return (
    <S.Container>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </S.Container>
  )
}

export default Loading
