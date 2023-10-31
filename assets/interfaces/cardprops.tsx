import { ImageBackgroundProps } from "react-native";
import { ImageProps } from "react-native";
import { CardData } from "./carddata";

export interface CardProps {
    data:CardData
    isEnabled: boolean
}

export interface FrontCardProps {
    background:ImageBackgroundProps,
    avatar: ImageProps
}

export interface DescriptionProps {
    title:string,
    description:string,
    qr: string,
    isEnabled: boolean
}
export interface SkillListProps {
    skillList:string[]
}