
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { RoomHeader } from "@/components/RoomHeader";
import { RoomsList } from "@/components/RoomsList";
import { RoomsSearch } from "@/components/RoomsSearch";
import { RoomsGrid } from "@/components/RoomsGrid";
import { RoomsFloorView } from "@/components/RoomsFloorView";
import { RoomsStatistics } from "@/components/RoomsStatistics";

const Rooms = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  
  return (
    <div className="container mx-auto px-4 py-8">
      <RoomHeader />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="col-span-1 md:col-span-3">
          <CardContent className="pt-6">
            <RoomsSearch 
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
            />

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
                <RoomsGrid searchValue={searchValue} filterStatus={filterStatus} />
              </TabsContent>
              
              <TabsContent value="floor" className="m-0">
                <RoomsFloorView searchValue={searchValue} filterStatus={filterStatus} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <RoomsStatistics />
      </div>
    </div>
  );
};

export default Rooms;
