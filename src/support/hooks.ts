import { AfterAll, BeforeAll, setDefaultTimeout } from 'cucumber'
import { driver } from './driver'

BeforeAll(async () => {
    return await driver.get('https://material.angular.io/components/categories');
})

AfterAll(async () => {
    return await driver.close();
})

setDefaultTimeout(20 * 1000);
