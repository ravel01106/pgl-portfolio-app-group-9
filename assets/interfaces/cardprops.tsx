interface Urls {
    urlLinkedin:string,
    urlTwitter:string,
    urlGitHub:string,
}

export interface CardProps {
    title:string,
    description:string,
    fondo:string,
    avatar:string,
    urlsIcons: Urls
}
