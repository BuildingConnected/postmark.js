import { ServerClient } from '../../../src/index'
import { expect } from 'chai';
import 'mocha';

const nconf = require('nconf');
const testingKeys = nconf.env().file({file: __dirname + '/../../../testing_keys.json'});

describe('Client - Click Statistics', () => {
    let client:ServerClient;
    const serverToken:string = testingKeys.get('SERVER_TOKEN');

    beforeEach(function () {
        client = new ServerClient(serverToken);
    });

    it('getClickCounts', async() => {
        const stats = await client.getClickCounts();
        expect(stats.Clicks).to.be.gte(0);
    });

    it('getClickBrowserUsage', async() => {
        const stats = await client.getClickBrowserUsage();
        expect(stats.Days.length).to.be.gte(0);
    });

    it('getEmailOpenPlatformUsage', async() => {
        const stats = await client.getEmailOpenPlatformUsage();
        expect(stats.Days.length).to.be.gte(0);
    });

    it('getClickLocation', async() => {
        const stats = await client.getClickLocation();
        expect(stats.Days.length).to.be.gte(0);
    });

});