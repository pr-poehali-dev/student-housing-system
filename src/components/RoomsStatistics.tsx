
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export const RoomsStatistics = () => {
  const occupancyStats = [
    { label: "Занятые комнаты", value: "65%", color: "red" },
    { label: "Частично занятые", value: "25%", color: "yellow" },
    { label: "Свободные комнаты", value: "10%", color: "green" }
  ];
  
  const infoStats = [
    { label: "Всего комнат:", value: "350" },
    { label: "Занято мест:", value: "543 / 700" },
    { label: "На ремонте:", value: "12" }
  ];
  
  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="font-medium mb-4">Статистика комнат</h3>
        
        <div className="space-y-4">
          {occupancyStats.map((stat, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm">{stat.label}</span>
                <span className="text-sm font-medium">{stat.value}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`bg-${stat.color}-500 h-2 rounded-full`} 
                  style={{ width: stat.value }}
                ></div>
              </div>
            </div>
          ))}
          
          <Separator className="my-4" />
          
          <div className="space-y-2">
            {infoStats.map((stat, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-sm">{stat.label}</span>
                <span className="font-medium">{stat.value}</span>
              </div>
            ))}
          </div>
          
          <Separator className="my-4" />
          
          <Button variant="outline" className="w-full">
            <Icon name="FileText" className="mr-2" size={16} />
            Подробный отчет
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
