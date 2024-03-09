import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Input from '../../../ui/Input';
import Button from '../../../ui/Button';
import { useNavigate } from 'react-router-dom';

function SignupModal({ isOpenModal, openModal }: any) {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  function handleChange(e: any) {
    console.log('handleChange:', e);
  }

  function handleMoveAuth() {
    openModal(false);
    navigate('/auth');
  }
  return (
    <div
      className={`fixed left-0 top-0 z-30  h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90 px-4 py-5  ${
        isOpenModal ? 'flex' : 'hidden'
      }`}
    >
      <div className="relative w-full rounded bg-white py-8 sm:w-[550px] sm:rounded-[15px]">
        <XMarkIcon
          onClick={() => openModal(false)}
          className="absolute right-2 top-2 h-10 cursor-pointer text-red"
        />
        <div className="px-4 sm:px-12">
          <h2 className="mx-auto my-4 text-center text-2xl font-bold sm:text-3xl">
            Login to your personal account
          </h2>
          <Input label="Login" type="text" onChange={handleChange} />
          <Input label="Password" type="text" onChange={handleChange} />
          <div className="mb-8 flex flex-col items-center sm:flex-row sm:justify-between">
            <label className="mb-3 flex cursor-pointer select-none items-center">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="peer sr-only"
              />
              <div className="mr-[12px] flex h-5 w-5 items-center justify-center rounded border border-[#E2E9F2] bg-white peer-checked:border-[#15A524]">
                <span className={`${isChecked ? 'opacity-100' : 'opacity-0'}`}>
                  <svg
                    width="11"
                    height="8"
                    viewBox="0 0 11 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                      fill="#15A524"
                      stroke="#15A524"
                      strokeWidth="0.6"
                    ></path>
                  </svg>
                </span>
              </div>
              <span
                className={`${isChecked ? 'text-black' : 'text-extragray'}`}
              >
                Remember password
              </span>
            </label>
            <p className="font-bold text-red underline">Reset password</p>
          </div>
          <button className="h-[50px] w-full rounded bg-green text-white transition hover:shadow-[0px_4px_10px_0px_rgba(21,165,36,0.50)]">
            Sign In
          </button>

          <hr className="my-10 bg-[#E2E9F2]" />
          <div className="flex flex-col sm:flex-row">
            <Button onClick={handleMoveAuth} mode="info" className="mb-3">
              Registration
            </Button>
            <p className="text-[11px] text-extragray sm:ml-5 sm:max-w-[60%]">
              You will have access to managing mailings, using personal data,
              linking your profile to a social network account, etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupModal;
