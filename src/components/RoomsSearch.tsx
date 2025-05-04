
import { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

interface RoomsSearchProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  filterStatus: string;
  setFilterStatus: Dispatch<SetStateAction<string>>;
}

export const RoomsSearch = ({
  searchValue,
  setSearchValue,
  filterStatus,
  setFilterStatus
}: RoomsSearchProps) => {
  return (
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
  );
};
