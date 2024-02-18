import Input from '../../../ui/Input';
import Button from '../../../ui/Button';
import ProfileTitle from './ProfileTitle';

function UserDetails() {
  return (
    <div className="w-full basis-[72%] border border-[#E2E9F2]">
      <ProfileTitle title="My data" />
      <div className="border-b border-[#E2E9F2] px-6 py-4 sm:px-10 sm:py-7">
        <h2 className="mb-3 font-medium sm:mb-4 sm:text-lg sm:font-bold">
          Personal data
        </h2>
        <div className="-mx-3 flex flex-wrap ">
          <div className="flex-shrink-0 flex-grow-0 basis-full px-3 sm:basis-1/2">
            <Input label="Login" type="text" />
          </div>
          <div className="flex-shrink-0 flex-grow-0 basis-full px-3 sm:basis-1/2">
            <Input label="FIO" type="text" />
          </div>
        </div>
      </div>
      <div className="border-b border-[#E2E9F2] px-6 py-4 sm:px-10 sm:py-7">
        <h2 className="mb-3 font-medium sm:mb-4 sm:text-lg sm:font-bold">
          Contacts
        </h2>
        <div className="-mx-3 flex flex-wrap ">
          <div className="flex-shrink-0 flex-grow-0 basis-full px-3 sm:basis-1/2">
            <Input label="E-mail" type="email" />
          </div>
          <div className="flex-shrink-0 flex-grow-0 basis-full px-3 sm:basis-1/2">
            <Input label="Phone" type="text" />
          </div>
        </div>
      </div>
      <div className="border-b border-[#E2E9F2] px-6 py-4 sm:px-10 sm:py-7">
        <h2 className="mb-3 font-medium sm:mb-4 sm:text-lg sm:font-bold">
          Address
        </h2>
        <div className="-mx-3 flex flex-wrap ">
          <div className="flex-shrink-0 flex-grow-0 basis-full px-3">
            <Input label="City" type="text" />
          </div>
          <div className="flex-shrink-0 flex-grow-0 basis-full px-3">
            <Input label="Delivery address" type="text" />
          </div>
        </div>
      </div>
      <div className="px-6 py-4 sm:px-10 sm:py-7">
        <h2 className="mb-3 font-medium sm:mb-4 sm:text-lg sm:font-bold">
          Changing the user's password
        </h2>
        <div className="-mx-3 flex flex-wrap ">
          <div className="flex-shrink-0 flex-grow-0 basis-full px-3">
            <Input label="Current password" type="password" />
          </div>
          <div className="flex-shrink-0 flex-grow-0 basis-full px-3">
            <Input label="New password" type="password" />
          </div>
          <div className="flex-shrink-0 flex-grow-0 basis-full px-3">
            <Input label="Confirm password" type="password" />
          </div>
        </div>
      </div>
      <p className="mb-5 px-6 sm:px-10">
        <Button type="success" className="w-full lg:w-2/4">
          Save
        </Button>
      </p>
    </div>
  );
}

export default UserDetails;
