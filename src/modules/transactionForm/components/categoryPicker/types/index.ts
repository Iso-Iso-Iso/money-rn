export interface CategoryItemProps {
    name: string;
    iconName: string;
    iconSize?: number;
    isActive?: boolean;
    onClick: ((type: string) => void) | (() => void);
}

export type CategoriesConfig = Readonly<
    Omit<CategoryItemProps, "isActive" | "onClick">
>[];
