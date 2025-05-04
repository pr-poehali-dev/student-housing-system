
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export const RecentNews = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Новости и объявления</CardTitle>
            <CardDescription>Последние обновления</CardDescription>
          </div>
          <Button variant="ghost" size="sm">
            Все новости
            <Icon name="ChevronRight" className="ml-1" size={16} />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-start">
            <h4 className="font-medium">Плановое отключение горячей воды</h4>
            <span className="text-xs text-muted-foreground">2 мая</span>
          </div>
          <p className="text-sm text-muted-foreground">
            С 5 по 7 мая будет проводиться плановое отключение горячей воды в связи с техническими работами.
          </p>
          <div className="flex items-center text-xs text-muted-foreground">
            <Icon name="Info" size={14} className="mr-1" /> Важно
          </div>
        </div>
        
        <Separator />
        
        <div className="space-y-2">
          <div className="flex justify-between items-start">
            <h4 className="font-medium">Собрание студсовета общежития</h4>
            <span className="text-xs text-muted-foreground">1 мая</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Приглашаем всех старост этажей на собрание студенческого совета общежития 4 мая в 18:00 в комнате отдыха.
          </p>
          <div className="flex items-center text-xs text-muted-foreground">
            <Icon name="Users" size={14} className="mr-1" /> Мероприятие
          </div>
        </div>
        
        <Separator />
        
        <div className="space-y-2">
          <div className="flex justify-between items-start">
            <h4 className="font-medium">Обновление правил проживания</h4>
            <span className="text-xs text-muted-foreground">28 апреля</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Обновлены правила проживания в общежитии. Ознакомиться с изменениями можно на информационном стенде.
          </p>
          <div className="flex items-center text-xs text-muted-foreground">
            <Icon name="FileText" size={14} className="mr-1" /> Документ
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
