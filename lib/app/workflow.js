'use strict';

var steps = [
  {code: 'begin-workflow', name: 'Begin Workflow', templates: {
    form: '<workorder-list-item workorder="workorder"></workorder-view-item>',
    view: '<workorder-list-item workorder="workorder"></workorder-view-item>',
    portal: {
      view: '<workorder-portal-view value="workorder"></workorder-portal-view>'
    }
  }},
  {code: 'appform-step', name: 'Some Appform', formId: '5602dcbf212b52816d2ab9d8'},
  {code: 'risk-assessment', name: 'Risk Assessment', templates: {
    form: '<risk-assessment-form></risk-assessment-form>',
    view: '<risk-assessment value="workorder.steps[\'risk-assessment\'].submission"></risk-assessment>',
    portal: {
      view: '<risk-assessment-portal-view value="workorder.steps[\'risk-assessment\'].submission"></risk-assessment-portal-view>'
    }
  }},
  {code: 'vehicle-inspection', name: 'Vehicle Inspection', templates: {
    form: '<vehicle-inspection-form></vehicle-inspection-form>',
    view: '<vehicle-inspection value="workorder.steps[\'vehicle-inspection\'].submission"></vehicle-inspection>',
    portal: {
      view: '<vehicle-inspection-portal-view value="workorder.steps[\'vehicle-inspection\'].submission"></vehicle-inspection-portal-view>'
    }
  }},
  {code: 'workflow-complete', name: 'Workflow Complete', templates: {
    form: '<workflow-step-summary workorder="workorder" steps="steps"></workflow-step-summary>',
    view: ''
  }}
];

module.exports = function(mediator) {
  console.log('Subscribing to mediator topic: workflow:steps:load');
  mediator.subscribe('workflow:steps:load', function() {
    setTimeout(function() {
      mediator.publish('workflow:steps:loaded', steps);
    }, 0);
  });
}