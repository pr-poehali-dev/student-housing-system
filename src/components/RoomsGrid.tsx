
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface RoomsGridProps {
  searchValue: string;
  filterStatus: string;
}

export const RoomsGrid = ({ searchValue, filterStatus }: RoomsGridProps) => {
  // В реальном приложении здесь должна быть логика фильтрации данных по searchValue и filterStatus
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {Array.from({ length: 9 }).map((_, index) => {
        // Эта проверка должна быть заменена на реальную фильтрацию данных
        const shouldDisplay = true;
        
        if (!shouldDisplay) return null;
        
        const statusColor = index % 3 === 0 ? 'green' : index % 3 === 1 ? 'yellow' : 'red';
        const statusText = index % 3 === 0 ? 'Свободна' : index % 3 === 1 ? 'Частично занята' : 'Занята';
        
        return (
          <Card key={index} className={`overflow-hidden border-${statusColor}-500`}>
            <div className={`h-2 bg-${statusColor}-500`} />
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Комната {301 + index}</h3>
                <span className={`text-xs px-2 py-1 rounded-full bg-${statusColor}-100 text-${statusColor}-800`}>
                  {statusText}
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-2">Вместимость: {index % 2 === 0 ? 2 : 3} чел.</p>
              <p className="text-sm text-gray-500 mb-2">Этаж: {Math.floor(index / 3) + 3}</p>
              {index % 3 !== 0 && (
                <div className="mt-2">
                  <Separator className="my-2" />
                  <p className="text-xs text-gray-500">Проживают:</p>
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: index % 3 }).map((_, idx) => (
                      <div key={idx} className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs">
                        {String.fromCharCode(65 + idx)}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
