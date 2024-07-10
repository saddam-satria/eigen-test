import AppService from 'src/services/AppService';
declare class AppController {
    private appService;
    constructor(appService: AppService);
    rootController(): string;
}
export default AppController;
