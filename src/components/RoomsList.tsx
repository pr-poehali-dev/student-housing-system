
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface RoomsListProps {
  searchValue: string;
  filterStatus: string;
}

export const RoomsList = ({ searchValue, filterStatus }: RoomsListProps) => {
  // Демо-данные комнат
  const rooms = [
    { id: 1, number: "301", floor: 3, capacity: 2, occupied: 2, status: "occupied", residents: ["Иванов И.И.", "Петров П.П."] },
    { id: 2, number: "302", floor: 3, capacity: 3, occupied: 1, status: "available", residents: ["Сидоров С.С."] },
    { id: 3, number: "303", floor: 3, capacity: 2, occupied: 0, status: "available", residents: [] },
    { id: 4, number: "304", floor: 3, capacity: 2, occupied: 2, status: "occupied", residents: ["Козлов К.К.", "Николаев Н.Н."] },
    { id: 5, number: "305", floor: 3, capacity: 3, occupied: 3, status: "occupied", residents: ["Михайлов М.М.", "Алексеев А.А.", "Дмитриев Д.Д."] },
    { id: 6, number: "306", floor: 3, capacity: 2, occupied: 0, status: "maintenance", residents: [] },
    { id: 7, number: "307", floor: 3, capacity: 2, occupied: 1, status: "available", residents: ["Федоров Ф.Ф."] },
    { id: 8, number: "401", floor: 4, capacity: 3, occupied: 2, status: "available", residents: ["Борисов Б.Б.", "Глебов Г.Г."] },
    { id: 9, number: "402", floor: 4, capacity: 2, occupied: 2, status: "occupied", residents: ["Денисов Д.Д.", "Егоров Е.Е."] },
    { id: 10, number: "403", floor: 4, capacity: 2, occupied: 0, status: "available", residents: [] },
  ];

  // Фильтрация комнат
  const filteredRooms = rooms.filter(room => {
    const matchesSearch = room.number.includes(searchValue) || 
                          room.residents.some(resident => resident.toLowerCase().includes(searchValue.toLowerCase()));
    
    if (filterStatus === "all") return matchesSearch;
    return matchesSearch && room.status === filterStatus;
  });

  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">№ комнаты</TableHead>
            <TableHead>Этаж</TableHead>
            <TableHead>Вместимость</TableHead>
            <TableHead>Занято мест</TableHead>
            <TableHead>Статус</TableHead>
            <TableHead>Проживающие</TableHead>
            <TableHead className="text-right">Действия</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredRooms.length > 0 ? (
            filteredRooms.map((room) => (
              <TableRow key={room.id}>
                <TableCell className="font-medium">{room.number}</TableCell>
                <TableCell>{room.floor}</TableCell>
                <TableCell>{room.capacity}</TableCell>
                <TableCell>{room.occupied}/{room.capacity}</TableCell>
                <TableCell>
                  {room.status === "occupied" && <Badge variant="destructive">Занята</Badge>}
                  {room.status === "available" && (
                    room.occupied > 0 
                      ? <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Частично занята</Badge>
                      : <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">Свободна</Badge>
                  )}
                  {room.status === "maintenance" && <Badge variant="outline" className="bg-gray-100 text-gray-800 hover:bg-gray-100">На ремонте</Badge>}
                </TableCell>
                <TableCell>
                  {room.residents.length > 0 ? (
                    <div className="flex flex-col gap-1">
                      {room.residents.map((resident, index) => (
                        <span key={index} className="text-sm">{resident}</span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-gray-500 text-sm">Нет проживающих</span>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button size="sm" variant="ghost">
                      <Icon name="UserPlus" size={16} />
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
                Комнаты не найдены
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
