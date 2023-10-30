import { ImageBackgroundProps } from "react-native";
import { ImageProps } from "react-native";
import { CardData } from "./carddata";

export interface CardProps {
    data:CardData
}

export interface FrontCardProps {
    background:ImageBackgroundProps,
    avatar: ImageProps
}

export interface DescriptionProps {
    title:string,
    description:string,
    qr: string
}
export interface SkillListProps {
    skillList:string[]
}