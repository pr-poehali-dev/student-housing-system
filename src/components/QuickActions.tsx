
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export const QuickActions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Быстрые действия</CardTitle>
        <CardDescription>Часто используемые функции</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button className="w-full justify-start" variant="outline">
          <Icon name="UserPlus" className="mr-2" size={18} />
          Заселить студента
        </Button>
        <Button className="w-full justify-start" variant="outline">
          <Icon name="ClipboardCheck" className="mr-2" size={18} />
          Принять заявку
        </Button>
        <Button className="w-full justify-start" variant="outline">
          <Icon name="Tool" className="mr-2" size={18} />
          Заявка на ремонт
        </Button>
        <Button className="w-full justify-start" variant="outline">
          <Icon name="FileSearch" className="mr-2" size={18} />
          Поиск студента
        </Button>
        <Button className="w-full justify-start" variant="outline">
          <Icon name="Printer" className="mr-2" size={18} />
          Отчеты
        </Button>
      </CardContent>
    </Card>
  );
};
