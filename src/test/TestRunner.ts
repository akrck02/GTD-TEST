import TestSuite from "../classes/TestSuite";
import Logger from "../lib/Logger";

const TEST_SUITES : any[] = [

];


TEST_SUITES.forEach(testSuite => {
    new testSuite();
});

console.log = Logger.log;