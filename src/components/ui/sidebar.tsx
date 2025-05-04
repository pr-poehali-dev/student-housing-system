
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface SidebarItemProps {
  icon: string;
  label: string;
  href: string;
  notification?: number;
}

const SidebarItem = ({ icon, label, href, notification }: SidebarItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all",
        isActive
          ? "bg-primary text-primary-foreground"
          : "hover:bg-accent text-muted-foreground hover:text-foreground"
      )}
    >
      <Icon name={icon} size={20} />
      <span>{label}</span>
      {notification ? (
        <span className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-foreground text-xs font-medium text-primary">
          {notification}
        </span>
      ) : null}
    </Link>
  );
};

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <div className="flex items-center gap-2 mb-6">
            <Icon name="Building2" size={28} className="text-primary" />
            <h2 className="text-lg font-semibold">Общежитие</h2>
          </div>
          <div className="space-y-1">
            <SidebarItem icon="LayoutDashboard" label="Главная" href="/" />
            <SidebarItem icon="Users" label="Студенты" href="/students" notification={2} />
            <SidebarItem icon="DoorClosed" label="Комнаты" href="/rooms" />
            <SidebarItem icon="CalendarClock" label="Бронирование" href="/booking" />
            <SidebarItem icon="BadgeAlert" label="Инциденты" href="/incidents" />
            <SidebarItem icon="Receipt" label="Платежи" href="/payments" />
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-xs font-semibold tracking-tight">Администрирование</h2>
          <div className="space-y-1">
            <SidebarItem icon="Settings" label="Настройки" href="/settings" />
            <SidebarItem icon="Users2" label="Персонал" href="/staff" />
            <SidebarItem icon="FileText" label="Отчеты" href="/reports" />
          </div>
        </div>
      </div>
    </div>
  );
}
