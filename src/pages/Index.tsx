
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sidebar } from "@/components/ui/sidebar";
import { MainHeader } from "@/components/MainHeader";
import { DashboardStats } from "@/components/DashboardStats";
import { RecentNews } from "@/components/RecentNews";
import { QuickActions } from "@/components/QuickActions";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[280px_1fr]">
      <aside className="hidden md:block border-r">
        <Sidebar />
      </aside>
      
      <div className="flex flex-col">
        <MainHeader />
        
        <main className="flex-1 p-6 pb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold">Панель управления</h1>
              <p className="text-muted-foreground">Добро пожаловать в систему управления общежитием</p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-2">
              <Button variant="outline">
                <Icon name="Download" className="mr-2" size={16} />
                Экспорт данных
              </Button>
              <Button>
                <Icon name="RefreshCcw" className="mr-2" size={16} />
                Обновить
              </Button>
            </div>
          </div>
          
          <DashboardStats />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="md:col-span-2">
              <RecentNews />
            </div>
            <QuickActions />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-md font-medium">Актуальные задачи</CardTitle>
                <Button variant="ghost" size="sm">
                  <Icon name="MoreHorizontal" size={16} />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    { title: "Проверка комнат на 3 этаже", deadline: "Сегодня", priority: "high" },
                    { title: "Заселение новых студентов", deadline: "Завтра", priority: "medium" },
                    { title: "Проверка пожарной безопасности", deadline: "18.05.2025", priority: "high" },
                    { title: "Собрание со студсоветом", deadline: "22.05.2025", priority: "low" }
                  ].map((task, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 border rounded-lg hover:bg-accent">
                      <div className={`w-2 h-2 rounded-full ${
                        task.priority === "high" ? "bg-red-500" : 
                        task.priority === "medium" ? "bg-yellow-500" : "bg-green-500"
                      }`}></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{task.title}</p>
                        <p className="text-xs text-muted-foreground">Срок: {task.deadline}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Icon name="CheckCircle" size={16} />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-md font-medium">Быстрый доступ</CardTitle>
                <Button variant="ghost" size="sm">
                  <Icon name="MoreHorizontal" size={16} />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Link to="/students">
                    <div className="border rounded-lg p-4 hover:bg-accent transition-colors flex flex-col items-center justify-center">
                      <Icon name="Users" size={32} className="mb-2 text-primary" />
                      <span className="text-sm font-medium">Студенты</span>
                    </div>
                  </Link>
                  <Link to="/rooms">
                    <div className="border rounded-lg p-4 hover:bg-accent transition-colors flex flex-col items-center justify-center">
                      <Icon name="DoorClosed" size={32} className="mb-2 text-primary" />
                      <span className="text-sm font-medium">Комнаты</span>
                    </div>
                  </Link>
                  <Link to="/incidents">
                    <div className="border rounded-lg p-4 hover:bg-accent transition-colors flex flex-col items-center justify-center">
                      <Icon name="AlertCircle" size={32} className="mb-2 text-primary" />
                      <span className="text-sm font-medium">Инциденты</span>
                    </div>
                  </Link>
                  <Link to="/payments">
                    <div className="border rounded-lg p-4 hover:bg-accent transition-colors flex flex-col items-center justify-center">
                      <Icon name="Receipt" size={32} className="mb-2 text-primary" />
                      <span className="text-sm font-medium">Платежи</span>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        
        <footer className="border-t py-4 px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © 2025 Система управления студенческим общежитием
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">
                <Icon name="HelpCircle" className="mr-2" size={14} />
                Помощь
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Mail" className="mr-2" size={14} />
                Поддержка
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
