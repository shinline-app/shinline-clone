import { useState } from 'react';
import Screen from '../../hooks/useScreenSize.ts';
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';
import SignupModal from '../../features/authentication/components/SignUpModal.tsx';
function Header() {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [isOpenModal, setModalOpen] = useState(false);

  function handleOpenModal(value: boolean) {
    setModalOpen(value);
  }

  return (
    <>
      <HeaderTop
        isMobile={Screen(768)}
        isOpenMenu={isOpenMenu}
        isOpenModal={isOpenModal}
        openMenu={setOpenMenu}
        openModal={handleOpenModal}
      />
      <HeaderBottom isMobile={Screen(768)} isOpenMenu={isOpenMenu} />
      <SignupModal isOpenModal={isOpenModal} openModal={handleOpenModal} />
    </>
  );
}
export default Header;
