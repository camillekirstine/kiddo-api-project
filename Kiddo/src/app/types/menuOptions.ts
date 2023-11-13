export type MenuOptions = {
    text: string;
    route: string | [string, Params];
    icon?: string;
    subMenu?: any;
}

type Params = {
    [key: string]: any;
};