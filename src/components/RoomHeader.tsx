
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export const RoomHeader = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <Breadcrumb className="mb-2">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Главная</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/rooms">Комнаты</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-3xl font-bold mb-1">Управление комнатами</h1>
          <p className="text-gray-500">Управляйте комнатами и расселением студентов</p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <Button variant="outline">
            <Icon name="Filter" className="mr-2" size={16} />
            Фильтры
          </Button>
          <Button variant="outline">
            <Icon name="PanelLeft" className="mr-2" size={16} />
            Настройки
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="bg-green-50">
          <CardContent className="flex items-center p-4">
            <div className="mr-4 bg-green-100 p-2 rounded-full">
              <Icon name="DoorOpen" className="text-green-700" size={24} />
            </div>
            <div>
              <h2 className="font-medium">Свободные комнаты</h2>
              <p className="text-2xl font-bold">35</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-yellow-50">
          <CardContent className="flex items-center p-4">
            <div className="mr-4 bg-yellow-100 p-2 rounded-full">
              <Icon name="Users" className="text-yellow-700" size={24} />
            </div>
            <div>
              <h2 className="font-medium">Частично занятые</h2>
              <p className="text-2xl font-bold">87</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-red-50">
          <CardContent className="flex items-center p-4">
            <div className="mr-4 bg-red-100 p-2 rounded-full">
              <Icon name="DoorClosed" className="text-red-700" size={24} />
            </div>
            <div>
              <h2 className="font-medium">Полностью занятые</h2>
              <p className="text-2xl font-bold">228</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
