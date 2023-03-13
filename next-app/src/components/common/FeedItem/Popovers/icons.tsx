import Image from 'next/image'

import Icons from 'assets/icons'

export const PopoverIcons = {
  채널_상세: (
    <Image src={Icons.Folder} width={20} height={20} alt="채널 상세" priority />
  ),
  링크_복사: (
    <Image src={Icons.Link} width={20} height={20} alt="링크 복사" priority />
  ),
  채널_삭제: (
    <Image
      src={Icons.TrashCan}
      width={20}
      height={20}
      alt="채널 삭제"
      priority
    />
  ),
  옵션_메뉴: (
    <Image
      alt="옵션 메뉴"
      src={Icons.DotsVertical}
      width={16}
      height={16}
      style={{ cursor: 'pointer' }}
      priority
    />
  ),
}
