export interface CategoryItemProps {
    name: string;
    iconName: string;
    iconSize?: number;
    isActive?: boolean;
    onClick: (name?: string) => void;
}

export type CategoriesConfig = Readonly<
    Omit<CategoryItemProps, "isActive" | "onClick">
>[];
