
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export const StudentsStats = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="font-medium mb-4">Статистика студентов</h3>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm">Мужчины</span>
              <span className="text-sm font-medium">58%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: "58%" }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm">Женщины</span>
              <span className="text-sm font-medium">42%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-pink-500 h-2 rounded-full" style={{ width: "42%" }}></div>
            </div>
          </div>
          
          <Separator className="my-4" />
          
          <div>
            <div className="mb-2 font-medium text-sm">По курсам</div>
            <div className="space-y-2">
              {[1, 2, 3, 4, 5].map((year) => (
                <div key={year}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">{year} курс</span>
                    <span className="text-sm font-medium">
                      {[22, 25, 19, 18, 16][year-1]}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${[22, 25, 19, 18, 16][year-1]}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Separator className="my-4" />
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Всего студентов:</span>
              <span className="font-medium">582</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Иностранные:</span>
              <span className="font-medium">87</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Льготники:</span>
              <span className="font-medium">142</span>
            </div>
          </div>
          
          <Button variant="outline" className="w-full mt-4">
            <Icon name="BarChart2" className="mr-2" size={16} />
            Подробная аналитика
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
