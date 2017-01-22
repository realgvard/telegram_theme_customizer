if (IS_PROD) {
	module.exports = require('./configureStore.prod');
} else {
	module.exports = require('./configureStore.dev');
}
