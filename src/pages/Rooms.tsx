
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { RoomsList } from "@/components/RoomsList";
import { RoomHeader } from "@/components/RoomHeader";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Rooms = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  
  return (
    <div className="container mx-auto px-4 py-8">
      <RoomHeader />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="col-span-1 md:col-span-3">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
              <div className="flex items-center w-full sm:w-auto gap-2">
                <Input
                  placeholder="Поиск комнаты..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="w-full sm:w-80"
                  icon="Search"
                />
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Фильтр" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все комнаты</SelectItem>
                    <SelectItem value="occupied">Занятые</SelectItem>
                    <SelectItem value="available">Свободные</SelectItem>
                    <SelectItem value="maintenance">На ремонте</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Icon name="Download" className="mr-2" size={16} />
                  Экспорт
                </Button>
                <Button>
                  <Icon name="Plus" className="mr-2" size={16} />
                  Добавить комнату
                </Button>
              </div>
            </div>

            <Tabs defaultValue="list">
              <TabsList className="mb-4">
                <TabsTrigger value="list">
                  <Icon name="List" className="mr-2" size={16} />
                  Список
                </TabsTrigger>
                <TabsTrigger value="grid">
                  <Icon name="Grid" className="mr-2" size={16} />
                  Сетка
                </TabsTrigger>
                <TabsTrigger value="floor">
                  <Icon name="Layers" className="mr-2" size={16} />
                  По этажам
                </TabsTrigger>
              </TabsList>

              <TabsContent value="list" className="m-0">
                <RoomsList searchValue={searchValue} filterStatus={filterStatus} />
              </TabsContent>
              
              <TabsContent value="grid" className="m-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <Card key={index} className={`overflow-hidden ${index % 3 === 0 ? 'border-green-500' : index % 3 === 1 ? 'border-yellow-500' : 'border-red-500'}`}>
                      <div className={`h-2 ${index % 3 === 0 ? 'bg-green-500' : index % 3 === 1 ? 'bg-yellow-500' : 'bg-red-500'}`} />
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">Комната {301 + index}</h3>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            index % 3 === 0 ? 'bg-green-100 text-green-800' : 
                            index % 3 === 1 ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'}`}>
                            {index % 3 === 0 ? 'Свободна' : index % 3 === 1 ? 'Частично занята' : 'Занята'}
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
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="floor" className="m-0">
                <div className="flex flex-col gap-6">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="font-medium mb-4">Этаж 3</h3>
                    <div className="grid grid-cols-5 gap-4">
                      {Array.from({ length: 10 }).map((_, index) => (
                        <div 
                          key={index} 
                          className={`aspect-square rounded-md border flex items-center justify-center p-2 ${
                            index % 3 === 0 ? 'bg-green-50 border-green-200' : 
                            index % 3 === 1 ? 'bg-yellow-50 border-yellow-200' : 
                            'bg-red-50 border-red-200'
                          }`}
                        >
                          <div className="text-center">
                            <div className="font-medium">301{index}</div>
                            <div className="text-xs text-gray-500">{index % 3 === 0 ? '0/2' : index % 3 === 1 ? '1/2' : '2/2'}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center gap-2 text-gray-500">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-sm">Свободно</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <span className="text-sm">Частично занято</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <span className="text-sm">Полностью занято</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-medium mb-4">Статистика комнат</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Занятые комнаты</span>
                  <span className="text-sm font-medium">65%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Частично занятые</span>
                  <span className="text-sm font-medium">25%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "25%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Свободные комнаты</span>
                  <span className="text-sm font-medium">10%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "10%" }}></div>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Всего комнат:</span>
                  <span className="font-medium">350</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Занято мест:</span>
                  <span className="font-medium">543 / 700</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">На ремонте:</span>
                  <span className="font-medium">12</span>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <Button variant="outline" className="w-full">
                <Icon name="FileText" className="mr-2" size={16} />
                Подробный отчет
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Rooms;
