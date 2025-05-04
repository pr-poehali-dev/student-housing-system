
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

export const MainHeader = () => {
  const currentDate = new Date().toLocaleDateString('ru-RU', {
    weekday: 'long',
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
  });
  
  return (
    <header className="border-b bg-background">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="hidden md:block">
          <h2 className="text-lg font-medium">
            Система управления общежитием
          </h2>
          <p className="text-sm text-muted-foreground">{currentDate}</p>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="ml-auto h-8 gap-1">
            <Icon name="Plus" size={14} />
            <span className="sr-only sm:not-sr-only">Новый студент</span>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="relative h-8 w-8">
                <Icon name="Bell" size={16} />
                <Badge variant="destructive" className="absolute -right-1 -top-1 h-4 w-4 p-0 flex items-center justify-center">
                  3
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Уведомления</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-72 overflow-auto">
                {[1, 2, 3].map((item) => (
                  <DropdownMenuItem key={item} className="flex flex-col items-start py-2">
                    <div className="flex w-full items-center gap-2">
                      <div className={`rounded-full w-2 h-2 ${item !== 3 ? 'bg-red-500' : 'bg-blue-500'}`}></div>
                      <span className="font-medium">{
                        item === 1 ? "Заявка на заселение" : 
                        item === 2 ? "Инцидент в комнате 304" : 
                        "Плановая проверка"
                      }</span>
                      <div className="ml-auto text-xs text-muted-foreground">
                        {item === 1 ? "10 мин." : item === 2 ? "1 час" : "2 часа"}
                      </div>
                    </div>
                    <p className="pl-4 text-xs text-muted-foreground">
                      {
                        item === 1 ? "Новая заявка от Иванова Ивана" : 
                        item === 2 ? "Требуется вмешательство администратора" : 
                        "Назначена проверка на 18:00"
                      }
                    </p>
                  </DropdownMenuItem>
                ))}
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="justify-center">
                Показать все уведомления
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="relative h-8 gap-1">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" alt="Аватар" />
                  <AvatarFallback>АК</AvatarFallback>
                </Avatar>
                <span className="sr-only md:not-sr-only">Админ</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Мой аккаунт</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Icon name="User" className="mr-2" size={14} />
                Профиль
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Icon name="Settings" className="mr-2" size={14} />
                Настройки
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Icon name="LogOut" className="mr-2" size={14} />
                Выйти
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
