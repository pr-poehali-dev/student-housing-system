
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface StudentsListProps {
  searchValue: string;
  filterStatus: string;
}

export const StudentsList = ({ searchValue, filterStatus }: StudentsListProps) => {
  // Демо-данные студентов
  const students = [
    { id: 1, name: "Иванов Иван Иванович", room: "301", faculty: "Информационные технологии", course: 3, status: "active", phoneNumber: "+7 (999) 123-45-67", email: "ivanov@example.com" },
    { id: 2, name: "Петрова Мария Сергеевна", room: "302", faculty: "Экономический", course: 2, status: "active", phoneNumber: "+7 (999) 234-56-78", email: "petrova@example.com" },
    { id: 3, name: "Сидоров Алексей Петрович", room: "303", faculty: "Юридический", course: 4, status: "active", phoneNumber: "+7 (999) 345-67-89", email: "sidorov@example.com" },
    { id: 4, name: "Смирнова Елена Алексеевна", room: "-", faculty: "Медицинский", course: 1, status: "pending", phoneNumber: "+7 (999) 456-78-90", email: "smirnova@example.com" },
    { id: 5, name: "Козлов Дмитрий Николаевич", room: "304", faculty: "Инженерный", course: 3, status: "active", phoneNumber: "+7 (999) 567-89-01", email: "kozlov@example.com" },
    { id: 6, name: "Новикова Анна Дмитриевна", room: "-", faculty: "Филологический", course: 2, status: "pending", phoneNumber: "+7 (999) 678-90-12", email: "novikova@example.com" },
    { id: 7, name: "Морозов Сергей Владимирович", room: "401", faculty: "Исторический", course: 5, status: "active", phoneNumber: "+7 (999) 789-01-23", email: "morozov@example.com" },
    { id: 8, name: "Волкова Ольга Сергеевна", room: "402", faculty: "Химический", course: 4, status: "active", phoneNumber: "+7 (999) 890-12-34", email: "volkova@example.com" },
    { id: 9, name: "Лебедев Максим Андреевич", room: "403", faculty: "Физический", course: 2, status: "active", phoneNumber: "+7 (999) 901-23-45", email: "lebedev@example.com" },
    { id: 10, name: "Соколова Екатерина Максимовна", room: "Архив", faculty: "Экономический", course: 3, status: "archived", phoneNumber: "+7 (999) 012-34-56", email: "sokolova@example.com" },
  ];

  // Фильтрация студентов
  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchValue.toLowerCase()) || 
                          student.email.toLowerCase().includes(searchValue.toLowerCase()) ||
                          student.room.includes(searchValue);
    
    if (filterStatus === "all") return matchesSearch;
    return matchesSearch && student.status === filterStatus;
  });

  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">ФИО</TableHead>
            <TableHead>Комната</TableHead>
            <TableHead>Факультет</TableHead>
            <TableHead>Курс</TableHead>
            <TableHead>Статус</TableHead>
            <TableHead>Контакты</TableHead>
            <TableHead className="text-right">Действия</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <TableRow key={student.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('').substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{student.name}</span>
                  </div>
                </TableCell>
                <TableCell>{student.room}</TableCell>
                <TableCell>{student.faculty}</TableCell>
                <TableCell>{student.course}</TableCell>
                <TableCell>
                  {student.status === "active" && <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">Проживает</Badge>}
                  {student.status === "pending" && <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Ожидает заселения</Badge>}
                  {student.status === "archived" && <Badge variant="outline" className="bg-gray-100 text-gray-800 hover:bg-gray-100">Архив</Badge>}
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="text-sm">{student.phoneNumber}</span>
                    <span className="text-xs text-muted-foreground">{student.email}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button size="sm" variant="ghost">
                      <Icon name="UserCog" size={16} />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Icon name="PencilLine" size={16} />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Icon name="MoreVertical" size={16} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} className="h-24 text-center">
                Студенты не найдены
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
