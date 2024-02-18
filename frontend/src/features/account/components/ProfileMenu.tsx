import {
  ShoppingBagIcon,
  UserIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

function ProfileMenu() {
  return (
    <div className="mb-5 w-full lg:mb-0 lg:basis-[28%]">
      <div className=" -mr-[1px] border border-[#E2E9F2]">
        <div className="flex items-center border-b border-[#E2E9F2] p-4 sm:p-6">
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-[2px] border-[#FBCC96] bg-[#FFDFBA] sm:min-h-[95px] sm:min-w-[95px]">
            {'' ? (
              <img
                className="h-full w-full object-cover"
                src="https://media.licdn.com/dms/image/C4D03AQGCsxbsZR3ZuA/profile-displayphoto-shrink_800_800/0/1658490145457?e=2147483647&v=beta&t=KUQVaEUrks_zp-F1Yq7HmjMMFYBzaFlPclv23_ha6Ow"
                alt=""
              />
            ) : (
              <span className="text-3xl font-medium text-white">BJ</span>
            )}
          </div>
          <div className="ml-3 sm:ml-5">
            <span className="sm:text-md text-sm text-extragray">
              jakhongir_v
            </span>
            <p className="sm:text-md whitespace-nowrap font-bold">
              Jahongir Bektemirov
            </p>
          </div>
        </div>
        <div className="">
          <NavLink
            to=""
            className="cabinet-link group [&.active>div>.icon]:text-black [&.active>p]:text-black [&.active]:after:w-full"
            end
          >
            <div className="relative z-10 flex h-full w-[50px] items-center justify-center bg-[#F5F8FC] sm:w-[70px]">
              <UserIcon className="icon h-6 text-gray-500  group-hover:text-black sm:h-8" />
            </div>
            <p className="relative z-10 ml-5 font-medium text-extragray group-hover:text-black">
              Personal data
            </p>
          </NavLink>
          <NavLink
            to="orders"
            className="cabinet-link group [&.active>div>.icon]:text-black [&.active>p]:text-black [&.active]:after:w-full"
            end
          >
            <div className="relative z-10 flex h-full w-[50px] items-center justify-center bg-[#F5F8FC] sm:w-[70px]">
              <ShoppingBagIcon className="icon h-6 text-gray-500  group-hover:text-black sm:h-8" />
            </div>
            <p className="relative z-10 ml-5 font-medium text-extragray group-hover:text-black">
              My purchases
            </p>
          </NavLink>
          <NavLink
            to="wishlist"
            className="cabinet-link group [&.active>div>.icon]:text-black [&.active>p]:text-black [&.active]:after:w-full"
            end
          >
            <div className="relative z-10 flex h-full w-[50px] items-center justify-center bg-[#F5F8FC] sm:w-[70px]">
              <HeartIcon className="icon h-6 text-gray-500  group-hover:text-black sm:h-8" />
            </div>
            <p className="relative z-10 ml-5 font-medium text-extragray group-hover:text-black">
              Featured Products
            </p>
          </NavLink>
          {/* <NavLink
            to="subscription"
            className="cabinet-link group [&.active>div>.icon]:text-black [&.active>p]:text-black [&.active]:after:w-full"
            end
          >
            <div className="relative z-10 flex h-full w-[50px] items-center justify-center bg-[#F5F8FC] sm:w-[70px]">
              <EnvelopeIcon className="icon h-6 text-gray-500 group-hover:text-black sm:h-8" />
            </div>
            <p className="relative z-10 ml-5 font-medium text-extragray group-hover:text-black ">
              Subscription settings
            </p>
          </NavLink> */}
        </div>
      </div>
    </div>
  );
}

export default ProfileMenu;
