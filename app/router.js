import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('poll');
  this.route('results', { path: 'results/:poll_id' });
  this.route('overview', { path: 'overview/:answer_id' });
});

export default Router;
