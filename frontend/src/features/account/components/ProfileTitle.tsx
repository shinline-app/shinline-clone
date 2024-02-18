function ProfileTitle({ title }: { title: string }) {
  return (
    <div className="flex h-[55px] items-center border-b border-[#E2E9F2] px-10 sm:h-[79px]">
      <h2 className="text-base font-bold uppercase sm:text-xl">{title}</h2>
    </div>
  );
}

export default ProfileTitle;
