'use strict';

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var makeServer = function () {
  var ref = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee() {
    var silent = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
    var app, server;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            app = (0, _express2.default)();


            app.use(_bodyParser2.default.json());
            app.use(_bodyParser2.default.urlencoded({ extended: true }));

            // configure routes with node app
            require('./routes.js')(app);

            server = app.listen(5000, function () {
              if (!silent) {
                console.log('Listening on port %s...', server.address().port);
              }
            });
            return _context.abrupt('return', server);

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return function makeServer(_x) {
    return ref.apply(this, arguments);
  };
}();

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = makeServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs2REFNQTtBQUFBLFFBQTBCLE1BQTFCLHlEQUF5QyxLQUF6QztBQUFBLFFBQ1EsR0FEUixFQVNNLE1BVE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNRLGVBRFIsR0FDYyx3QkFEZDs7O0FBR0UsZ0JBQUksR0FBSixDQUFRLHFCQUFXLElBQVgsRUFBUjtBQUNBLGdCQUFJLEdBQUosQ0FBUSxxQkFBVyxVQUFYLENBQXNCLEVBQUMsVUFBVSxJQUFYLEVBQXRCLENBQVI7OztBQUdBLG9CQUFRLGFBQVIsRUFBdUIsR0FBdkI7O0FBRUksa0JBVE4sR0FTZSxJQUFJLE1BQUosQ0FBVyxJQUFYLEVBQWlCLFlBQVc7QUFDdkMsa0JBQUksQ0FBQyxNQUFMLEVBQWE7QUFDWCx3QkFBUSxHQUFSLENBQVkseUJBQVosRUFBdUMsT0FBTyxPQUFQLEdBQWlCLElBQXhEO0FBQ0Q7QUFDRixhQUpZLENBVGY7QUFBQSw2Q0FjUyxNQWRUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7a0JBQWUsVTs7Ozs7QUFKZjs7OztBQUNBOzs7Ozs7QUFvQkEsT0FBTyxPQUFQLEdBQWlCLFVBQWpCIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xuaW1wb3J0IFByb21pc2UgZnJvbSAnYmx1ZWJpcmQnO1xuXG5hc3luYyBmdW5jdGlvbiBtYWtlU2VydmVyKHNpbGVudDogYm9vbCA9IGZhbHNlKTogUHJvbWlzZTxPYmplY3Q+IHtcbiAgY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG4gIGFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuICBhcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7ZXh0ZW5kZWQ6IHRydWV9KSk7XG5cbiAgLy8gY29uZmlndXJlIHJvdXRlcyB3aXRoIG5vZGUgYXBwXG4gIHJlcXVpcmUoJy4vcm91dGVzLmpzJykoYXBwKTtcblxuICB2YXIgc2VydmVyID0gYXBwLmxpc3Rlbig1MDAwLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXNpbGVudCkge1xuICAgICAgY29uc29sZS5sb2coJ0xpc3RlbmluZyBvbiBwb3J0ICVzLi4uJywgc2VydmVyLmFkZHJlc3MoKS5wb3J0KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc2VydmVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1ha2VTZXJ2ZXI7XG4iXX0=