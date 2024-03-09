import Select from '../../ui/Select';

function CalcBySettings() {
  return (
    <div className="flex w-full items-end">
      <div className="basis-1/3">
        <p className="mb-1 text-extragray">Width</p>
        <Select
          width={'100%'}
          height={'40px'}
          iconSize={'5'}
          dataSource={[
            { id: 1, name: '195' },
            { id: 2, name: '200' },
          ]}
        />
      </div>
      <p className="mx-3 h-[35px] text-[20px] text-[#191717] opacity-30">/</p>
      <div className="basis-1/3">
        <p className="mb-1 text-extragray">Profile</p>
        <Select
          width={'100%'}
          height={'40px'}
          iconSize={'5'}
          dataSource={[
            { id: 1, name: '195' },
            { id: 2, name: '200' },
          ]}
        />
      </div>
      <p className="mx-3 h-[35px] text-[20px] text-[#191717] opacity-30">R</p>
      <div className="basis-1/3">
        <p className="mb-1 text-extragray">Diametr</p>
        <Select
          width={'100%'}
          height={'40px'}
          iconSize={'5'}
          dataSource={[
            { id: 1, name: '195' },
            { id: 2, name: '200' },
          ]}
        />
      </div>
    </div>
  );
}

export default CalcBySettings;
