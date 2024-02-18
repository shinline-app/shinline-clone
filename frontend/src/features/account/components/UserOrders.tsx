import ProfileTitle from './ProfileTitle';

function UserOrders() {
  return (
    <div className="w-full basis-[72%] border border-[#E2E9F2]">
      <ProfileTitle title="My purchases" />
      <div className="">
        {[1, 2, 3].map((order) => (
          <div
            key={order}
            className="flex flex-col justify-between space-y-4 border-b p-5 last:border-b-0 sm:flex-row sm:space-y-0"
          >
            <div className="">
              <p className="text-extragray">
                <b className="text-black">№0TRZ-157020</b> from 09.07.2022 19:24
              </p>
              <p className="font-bold text-green">In processing</p>
              {/* <p>On the way</p>
            <p>Delivered</p>
            <p>Canceled</p> */}
            </div>
            <div className="">
              <p className="text-extragray">ID:</p>
              <p>
                <b>40408</b>
              </p>
            </div>
            <div className="">
              <p className="text-extragray">Delivery:</p>
              <p>
                <b>Pickup</b>
              </p>
            </div>
            <div className="">
              <p className="text-extragray">Order price:</p>
              <p>
                <b>200$</b>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserOrders;
