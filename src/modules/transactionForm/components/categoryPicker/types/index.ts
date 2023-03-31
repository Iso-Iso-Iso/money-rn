export interface CategoryItemProps {
    name: string;
    iconName: string;
    iconSize?: number;
    isActive?: boolean;
}

export type CategoriesConfig = Readonly<Omit<CategoryItemProps, "isActive">>[];
