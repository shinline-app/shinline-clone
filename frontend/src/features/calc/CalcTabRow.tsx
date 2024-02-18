function CalcTabRow({ item, activeTab, onClick }: any) {
  return (
    <div
      onClick={() => onClick(item.value)}
      className={`
      relative z-10 ml-[3px] flex h-[60px] w-1/4 skew-x-[20deg] cursor-pointer items-center justify-center p-2  transition-all after:absolute after:bottom-0  after:left-0 after:-z-10  after:h-2 after:w-full after:-translate-y-[-8px] after:bg-red after:opacity-0 after:content-[''] last:rounded-[0_10px_0_0] 
  ${
    activeTab === item.value
      ? 'h-[68px] -translate-x-[1px] -translate-y-2 bg-[rgba(0,0,0,1)] duration-300 after:-bottom-2 after:translate-y-0 after:opacity-100 [&>p]:-translate-y-1'
      : 'bg-[rgba(0,0,0,.5)] hover:bg-[rgba(0,0,0,.6)]'
  }
  `}
    >
      <p className="-skew-x-[20deg] text-xl font-medium text-white">
        {item.label}
      </p>
    </div>
  );
}

export default CalcTabRow;
