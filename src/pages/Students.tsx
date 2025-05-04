
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { StudentsHeader } from "@/components/StudentsHeader";
import { StudentsList } from "@/components/StudentsList";
import { StudentsStats } from "@/components/StudentsStats";

const Students = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  
  return (
    <div className="container mx-auto px-4 py-8">
      <StudentsHeader />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="col-span-1 md:col-span-3">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
              <div className="flex items-center w-full sm:w-auto gap-2">
                <Input
                  placeholder="Поиск студента..."
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
                    <SelectItem value="all">Все студенты</SelectItem>
                    <SelectItem value="active">Проживающие</SelectItem>
                    <SelectItem value="pending">Ожидают заселения</SelectItem>
                    <SelectItem value="archived">Архив</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Icon name="Download" className="mr-2" size={16} />
                  Экспорт
                </Button>
                <Button>
                  <Icon name="UserPlus" className="mr-2" size={16} />
                  Добавить студента
                </Button>
              </div>
            </div>

            <Tabs defaultValue="list">
              <TabsList className="mb-4">
                <TabsTrigger value="list">
                  <Icon name="List" className="mr-2" size={16} />
                  Список
                </TabsTrigger>
                <TabsTrigger value="cards">
                  <Icon name="CreditCard" className="mr-2" size={16} />
                  Карточки
                </TabsTrigger>
              </TabsList>

              <TabsContent value="list" className="m-0">
                <StudentsList searchValue={searchValue} filterStatus={filterStatus} />
              </TabsContent>
              
              <TabsContent value="cards" className="m-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-lg font-medium">
                            {String.fromCharCode(65 + index)}
                          </div>
                          <div>
                            <h3 className="font-medium">{
                              ["Иванов Иван", "Петрова Мария", "Сидоров Алексей", "Смирнова Елена", 
                              "Козлов Дмитрий", "Новикова Анна", "Морозов Сергей", "Волкова Ольга", "Лебедев Максим"][index]
                            }</h3>
                            <p className="text-xs text-gray-500">Комната {300 + index}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-y-2 text-sm">
                          <div className="text-gray-500">Факультет:</div>
                          <div>{["ИТ", "Экономический", "Юридический", "Медицинский", 
                                "Инженерный", "Филологический", "Исторический", "Химический", "Физический"][index]}</div>
                          <div className="text-gray-500">Курс:</div>
                          <div>{index % 4 + 1}</div>
                          <div className="text-gray-500">Статус:</div>
                          <div className={`text-xs px-2 py-0.5 rounded-full w-fit ${
                            index % 3 === 0 ? 'bg-green-100 text-green-800' : 
                            index % 3 === 1 ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'}`}>
                            {index % 3 === 0 ? 'Проживает' : index % 3 === 1 ? 'Ожидает' : 'Выселен'}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <StudentsStats />
      </div>
    </div>
  );
};

export default Students;
