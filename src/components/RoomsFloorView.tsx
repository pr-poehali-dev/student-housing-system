
interface RoomsFloorViewProps {
  searchValue: string;
  filterStatus: string;
}

export const RoomsFloorView = ({ searchValue, filterStatus }: RoomsFloorViewProps) => {
  // В реальном приложении здесь должна быть логика фильтрации данных по searchValue и filterStatus
  
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="font-medium mb-4">Этаж 3</h3>
        <div className="grid grid-cols-5 gap-4">
          {Array.from({ length: 10 }).map((_, index) => {
            // Эта проверка должна быть заменена на реальную фильтрацию данных
            const shouldDisplay = true;
            
            if (!shouldDisplay) return null;
            
            const statusClass = index % 3 === 0 
              ? 'bg-green-50 border-green-200' 
              : index % 3 === 1 
                ? 'bg-yellow-50 border-yellow-200'
                : 'bg-red-50 border-red-200';
                
            return (
              <div 
                key={index} 
                className={`aspect-square rounded-md border flex items-center justify-center p-2 ${statusClass}`}
              >
                <div className="text-center">
                  <div className="font-medium">301{index}</div>
                  <div className="text-xs text-gray-500">
                    {index % 3 === 0 ? '0/2' : index % 3 === 1 ? '1/2' : '2/2'}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="flex justify-center gap-2 text-gray-500">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-sm">Свободно</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <span className="text-sm">Частично занято</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <span className="text-sm">Полностью занято</span>
        </div>
      </div>
    </div>
  );
};
