export interface Page {
    name: string;
    file: string;
    title: string;
    destination: string;
    children: Page[];
}
