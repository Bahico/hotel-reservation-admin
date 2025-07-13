export interface DashboardItem {
  name: string;
  icon?: string;
  route?: string;
  children?: Omit<DashboardItem, 'children' | 'icon'>[];
}
