import Logger from "../lib/Logger";
import Test from "./Test";

export default abstract class TestSuite {

    constructor(tests : Test[]){
        TestSuite.runAll(this.constructor.name,tests);
    }

    static async runAll(name: string, tests : Test[]) {

        const start = new Date().getTime();

        Logger.hardTitle("๐งช Running test suite " + name + " ๐งช");

        for(let i = 0; i < tests.length; i++) {
            
            const testResult = await tests[i].run();
            
            if(!testResult) {
                Logger.softTitle("๐ก Tests terminated with a failure ๐ก");
                return;
            }
        }

        const end = new Date().getTime();

        Logger.softTitle("๐ข All tests passed successfully ๐ข");
        Logger.rawlog("Test suite ran in " + (end-start) + "ms.\n");
        
    }

} 