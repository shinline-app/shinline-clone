type PageTitleProps = {
  title: string;
};

function PageTitle({ title }: PageTitleProps) {
  return (
    <div className="my-4">
      <h2 className="mb-2 text-[18px] font-bold leading-tight tracking-tight text-gray-800 sm:mb-0 sm:text-2xl  md:text-3xl ">
        {title}
      </h2>
    </div>
  );
}

export default PageTitle;
