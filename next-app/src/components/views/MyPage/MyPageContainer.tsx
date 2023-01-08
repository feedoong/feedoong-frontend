import Image from 'next/image'
import { useRouter } from 'next/router'

import Dialog from 'components/common/Dialog'
import Toast from 'components/common/Toast'
import { deleteAccount } from 'services/account'
import { getUserInfo, UserProfile } from 'services/auth'
import { CACHE_KEYS } from 'services/cacheKeys'
// import InfoItem from './InfoRow/InfoItem'
import InfoItem from '../MyAccount/InfoRow/InfoItem'
import { destroyTokensClientSide } from 'utils/auth'
import Flex from 'components/common/Flex'

import * as S from './MyPageContainer.style'

import Icons from 'assets/icons'

export const MY_PAGE_TABS = [
  { label: '등록한 채널', value: 'channel' },
  { label: '저장한 게시물', value: 'post' },
] as const

export type MyPageTabOption = typeof MY_PAGE_TABS[number]

const MyPageContainer = () => {
  const [isOpenDeleteAccountModal, setIsOpenDeleteAccountModal] =
    useState(false)

  const { mutate: deleteAccountAction } = useMutation(
    ['deleteAccount'],
    deleteAccount,
    {
      onSuccess: () => {
        Toast.show({ content: 'Successfully delete account' })
        destroyTokensClientSide()
        client.invalidateQueries(CACHE_KEYS.me)
        window.location.href = '/'
      },
    }
  )

  const client = useQueryClient()
  const { data: userProfile, isLoading } = useQuery<UserProfile>(
    CACHE_KEYS.me,
    getUserInfo
  )

  const logoutAction = () => {
    destroyTokensClientSide()

    client.invalidateQueries(CACHE_KEYS.me)
    window.location.href = '/'
  }

  const getMyProfileUrl = () => {
    const emailId = userProfile?.email.split('@')[0]
    return `feedoong.io/${emailId}`
  }

  if (isLoading || !userProfile) {
    return null
  }

  return (
    <S.Container>
      <S.Contents>
        <S.PageTitle>내 정보</S.PageTitle>
        <S.Item>
          <span className="label">공개 프로필</span>
          <span className="desc">
            회원님의 프로필을 방문하는 사용자에게 다음 정보가 표시됩니다.
          </span>
        </S.Item>
        <S.SubLabel>사진</S.SubLabel>
        <div
          style={{
            width: '72px',
            height: '72px',
            backgroundColor: 'pink',
            marginBottom: '30px',
          }}
        ></div>

        <Flex gap={20}>
          <InfoItem
            readOnly
            value={getMyProfileUrl()}
            labelName={'피둥 주소'}
            buttonName={'주소 복사'}
          />
          <InfoItem
            // TODO: 사용자 이름 값을 API로 따로 받아 노출해야 함.
            value={userProfile.name}
            labelName={'사용자 이름'}
            buttonName={'저장'}
          />
        </Flex>

        <S.BorderLine />

        <S.Item>
          <span className="label">계정 정보</span>
          <span className="desc">
            이 정보는 수정이 불가하며, 회원님의 프로필에 표시되지 않습니다.
          </span>
        </S.Item>

        <Flex gap={20}>
          <InfoItem
            readOnly
            value={userProfile.email}
            labelName={'로그인 계정'}
          />
          <InfoItem readOnly value={userProfile.name} labelName={'이름'} />
        </Flex>
        {/* <Flex
          align={'center'}
          justify={'between'}
          style={{ width: '315px', padding: '0 12px', marginBottom: '8px' }}
        >
          <S.SubLabel>피둥 주소</S.SubLabel>
          <S.CopyButton>주소 복사</S.CopyButton>
        </Flex> */}

        {/* <InfoRow title="로그인 계정" value={userProfile.email} />
        <div style={{ marginBottom: '60px' }}>
          <InfoRow title="이름" value={userProfile.name} />
        </div>
        <S.BorderLine />
        <S.ButtonWrap>
          <S.Button onClick={() => setIsOpenDeleteAccountModal(true)}>
            회원 탈퇴
          </S.Button>
          <S.Button onClick={() => logoutAction()}>로그아웃</S.Button>
        </S.ButtonWrap> */}
      </S.Contents>

      <Dialog isOpen={isOpenDeleteAccountModal}>
        <Dialog.Title>정말 탈퇴하시겠습니까?</Dialog.Title>
        <Dialog.Content>
          <p>
            탈퇴하시면 회원님의 모든 기록이 삭제됩니다.<br></br>삭제된 정보는
            복구할 수 없으니<br></br>신중하게 결정해주세요.
          </p>
        </Dialog.Content>
        <Dialog.Actions>
          <button onClick={() => setIsOpenDeleteAccountModal(false)}>
            취소
          </button>
          <button
            className="secondary"
            onClick={() => {
              deleteAccountAction()
              setIsOpenDeleteAccountModal(false)
            }}
          >
            회원탈퇴
          </button>
        </Dialog.Actions>
      </Dialog>
    </S.Container>
  )
}

export default MyPageContainer
