import 'babel-polyfill';
import {expect} from 'chai';
import {mochaAsync} from './TestHelpers';
import request from "supertest-as-promised";
import makeServer from '../src/server';

describe('Basic server test', function() {
  this.timeout(1000);
  var server;
  beforeEach(mochaAsync(async () => {
    server = await makeServer(true /* silent */);
  }));

  afterEach(function (done) {
    server.close(done);
  });

  it('Server healthy', mochaAsync(async () => {
    await request(server).get('/')
      .expect(200);
  }));
});
