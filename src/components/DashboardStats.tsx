
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Всего комнат</CardTitle>
          <Icon name="Home" className="text-primary" size={20} />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">350</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-green-500 flex items-center">
              <Icon name="ArrowUp" size={14} className="mr-1" /> 7% свободных комнат
            </span>
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Студентов</CardTitle>
          <Icon name="Users" className="text-primary" size={20} />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">658</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-blue-500 flex items-center">
              <Icon name="ArrowRight" size={14} className="mr-1" /> 42 заселились недавно
            </span>
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Заявки</CardTitle>
          <Icon name="FileText" className="text-primary" size={20} />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">24</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-orange-500 flex items-center">
              <Icon name="Clock" size={14} className="mr-1" /> Ожидают обработки
            </span>
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Платежи</CardTitle>
          <Icon name="Wallet" className="text-primary" size={20} />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">98%</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-green-500 flex items-center">
              <Icon name="Check" size={14} className="mr-1" /> Оплачено за месяц
            </span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
