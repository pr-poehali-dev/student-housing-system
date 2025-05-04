
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { DashboardStats } from "@/components/DashboardStats";
import { RecentNews } from "@/components/RecentNews";
import { QuickActions } from "@/components/QuickActions";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Шапка */}
      <header className="bg-primary text-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Building2" size={32} />
            <h1 className="text-2xl font-bold">Студенческое общежитие</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:bg-primary/90">
              <Icon name="Bell" className="mr-2" size={18} />
              Уведомления
            </Button>
            <Button variant="ghost" className="text-white hover:bg-primary/90">
              <Icon name="User" className="mr-2" size={18} />
              Войти
            </Button>
          </div>
        </div>
      </header>

      {/* Основной контент */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="dashboard">
              <Icon name="LayoutDashboard" className="mr-2" size={18} />
              Главная
            </TabsTrigger>
            <TabsTrigger value="rooms">
              <Icon name="DoorClosed" className="mr-2" size={18} />
              Комнаты
            </TabsTrigger>
            <TabsTrigger value="students">
              <Icon name="Users" className="mr-2" size={18} />
              Студенты
            </TabsTrigger>
            <TabsTrigger value="services">
              <Icon name="Settings" className="mr-2" size={18} />
              Сервисы
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <DashboardStats />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <QuickActions />
              <div className="md:col-span-2">
                <RecentNews />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="rooms">
            <Card>
              <CardHeader>
                <CardTitle>Управление комнатами</CardTitle>
                <CardDescription>Просмотр и управление комнатами общежития</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px] flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Icon name="Building" size={64} className="mx-auto mb-4" />
                  <p>Функционал управления комнатами будет доступен в следующем обновлении</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="students">
            <Card>
              <CardHeader>
                <CardTitle>Управление студентами</CardTitle>
                <CardDescription>Просмотр и управление данными студентов</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px] flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Icon name="Users" size={64} className="mx-auto mb-4" />
                  <p>Функционал управления студентами будет доступен в следующем обновлении</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services">
            <Card>
              <CardHeader>
                <CardTitle>Сервисы общежития</CardTitle>
                <CardDescription>Управление доступными сервисами</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px] flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Icon name="Settings" size={64} className="mx-auto mb-4" />
                  <p>Функционал управления сервисами будет доступен в следующем обновлении</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Подвал */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-semibold">Система управления общежитием</h2>
              <p className="text-gray-400 mt-2">© 2025 Все права защищены</p>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" className="text-white hover:bg-gray-700">
                <Icon name="HelpCircle" className="mr-2" size={18} />
                Помощь
              </Button>
              <Button variant="ghost" className="text-white hover:bg-gray-700">
                <Icon name="Mail" className="mr-2" size={18} />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
