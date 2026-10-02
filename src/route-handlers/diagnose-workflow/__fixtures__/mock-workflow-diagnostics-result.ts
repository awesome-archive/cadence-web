import { type WorkflowDiagnosticsResult } from '../diagnose-workflow.types';

export const mockWorkflowDiagnosticsResult = {
  result: {
    Timeouts: null,
    Failures: {
      issues: [
        {
          issueId: 0,
          invariantType: 'Activity Failed',
          reason:
            'The failure is because of an error returned from the service code',
          metadata: {
            Identity: 'test-worker@test-host@test-domain@test-workflow@12345',
            ActivityType: 'main.helloWorldActivity',
            ActivityScheduledID: 43,
            ActivityStartedID: 156,
          },
        },
        {
          issueId: 1,
          invariantType: 'Activity Failed',
          reason:
            'The failure is because of an error returned from the service code',
          metadata: {
            Identity: 'test-worker@test-host@test-domain@test-workflow@12345',
            ActivityType: 'main.helloWorldActivity',
            ActivityScheduledID: 29,
            ActivityStartedID: 234,
          },
        },
        {
          issueId: 2,
          invariantType: 'Activity Failed',
          reason:
            'The failure is because of an error returned from the service code',
          metadata: {
            Identity: 'test-worker@test-host@test-domain@test-workflow@12345',
            ActivityType: 'main.helloWorldActivity',
            ActivityScheduledID: 82,
            ActivityStartedID: 234,
          },
        },
        {
          issueId: 3,
          invariantType: 'Activity Failed',
          reason:
            'The failure is because of an error returned from the service code',
          metadata: {
            Identity: 'test-worker@test-host@test-domain@test-workflow@12345',
            ActivityType: 'main.helloWorldActivity',
            ActivityScheduledID: 102,
            ActivityStartedID: 411,
          },
        },
        {
          issueId: 4,
          invariantType: 'Workflow Failed',
          reason:
            'The failure is because of an error returned from the service code',
          metadata: {
            Identity: 'test-worker@test-host@test-domain@test-workflow@12345',
            ActivityType: '',
            ActivityScheduledID: 0,
            ActivityStartedID: 0,
          },
        },
      ],
      rootCauses: [
        {
          issueId: 0,
          rootCauseType:
            'There is an issue in the worker service that is causing a failure. Check identity for service logs',
          metadata: null,
        },
        {
          issueId: 1,
          rootCauseType:
            'There is an issue in the worker service that is causing a failure. Check identity for service logs',
          metadata: null,
        },
        {
          issueId: 2,
          rootCauseType:
            'There is an issue in the worker service that is causing a failure. Check identity for service logs',
          metadata: null,
        },
        {
          issueId: 3,
          rootCauseType:
            'There is an issue in the worker service that is causing a failure. Check identity for service logs',
          metadata: null,
        },
        {
          issueId: 4,
          rootCauseType:
            'There is an issue in the worker service that is causing a failure. Check identity for service logs',
          metadata: null,
        },
      ],
      runbook:
        'https://cadenceworkflow.io/docs/workflow-troubleshooting/activity-failures/',
    },
    Retries: null,
  },
  completed: true,
} as const satisfies WorkflowDiagnosticsResult;
