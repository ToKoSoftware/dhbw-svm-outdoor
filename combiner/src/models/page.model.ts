export interface Page {
    name: string;
    file: string;
    title: string;
    description: string;
    siteName: string;
    keyWords: string;
    photoUrl: string;
    destination: string;
    children: Page[];
}
