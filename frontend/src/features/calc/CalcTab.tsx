import CalcTabRow from './CalcTabRow';

function CalcTab({ tabs, activeTab, onClick }: any) {
  return (
    <div className="mr-4 flex w-full">
      {tabs.map((item: any) => (
        <CalcTabRow
          key={item.value}
          item={item}
          activeTab={activeTab}
          onClick={onClick}
        />
      ))}
    </div>
  );
}

export default CalcTab;
