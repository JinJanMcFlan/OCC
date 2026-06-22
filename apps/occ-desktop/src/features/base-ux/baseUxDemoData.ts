// Immutable presentation-only fixtures for the Base UX Demo.
// No Electron, infrastructure, API, storage, or router imports.

import type {
  DemoProjectRecord,
  DemoConversationRecord,
  DemoThreadEntry,
  DemoQueueEntry,
  DemoControlSummary,
  DemoFloatDetailContent,
  QueueFilter,
} from './baseUxPresentationTypes';

export const DEMO_PROJECTS: readonly DemoProjectRecord[] = [
  { id: 'proj-alpha', displayName: 'Demo Project Alpha', conversationCount: 3 },
  { id: 'proj-beta',  displayName: 'Demo Project Beta',  conversationCount: 2 },
];

export const DEMO_CONVERSATIONS: readonly DemoConversationRecord[] = [
  { id: 'conv-a1',  projectId: 'proj-alpha',                     displayName: 'Initial exploration',           messageCount: 4 },
  { id: 'conv-a2',  projectId: 'proj-alpha',                     displayName: 'Architecture review',           messageCount: 2 },
  { id: 'conv-a2c', projectId: 'proj-alpha', parentId: 'conv-a2', displayName: 'Sub-thread: component breakdown', messageCount: 1 },
  { id: 'conv-b1',  projectId: 'proj-beta',                      displayName: 'Feature planning',              messageCount: 3 },
  { id: 'conv-b2',  projectId: 'proj-beta',                      displayName: 'Integration notes',             messageCount: 2 },
];

export const DEMO_THREAD_HISTORY: readonly DemoThreadEntry[] = [
  {
    id: 'th-1',
    role: 'user',
    body: 'Draft an outline for the new component structure.',
    labelTag: 'Demo entry — not sent',
  },
  {
    id: 'th-2',
    role: 'acknowledgment',
    body: 'Demo only — no provider, router, task, file action, or external request was used.',
    labelTag: 'Demo acknowledgment',
  },
  {
    id: 'th-3',
    role: 'user',
    body: 'Review the existing interfaces for reuse opportunities.',
    labelTag: 'Demo entry — not sent',
  },
  {
    id: 'th-4',
    role: 'acknowledgment',
    body: 'Demo only — no provider, router, task, file action, or external request was used.',
    labelTag: 'Demo acknowledgment',
  },
];

export const DEMO_QUEUE_ITEMS: readonly DemoQueueEntry[] = [
  { id: 'q-1', displayText: 'Analyze folder structure for entry points',   status: 'Working',   statusMeta: 'Demo · no provider' },
  { id: 'q-2', displayText: 'Summarize recent design decisions',           status: 'Waiting',   statusMeta: 'Demo · no provider' },
  { id: 'q-3', displayText: 'Draft component outline for left panel',      status: 'Deferred',  statusMeta: 'Demo · no provider' },
  { id: 'q-4', displayText: 'Review prior architecture output',            status: 'Completed', statusMeta: 'Demo · no provider' },
  { id: 'q-5', displayText: 'Resolve naming conflict in type definitions', status: 'Attention', statusMeta: 'Demo · needs review' },
];

export const DEMO_CONTROL_SUMMARY: DemoControlSummary = {
  operatingMode:     'Human review required',
  costSnapshotLabel: '$0.00 · Demo session',
  folderStatus:      'No folder bound',
  contextSummary:    '0 items · 0 tokens · Demo',
  providerStatus:    'No providers connected in demo',
  modelStatus:       'No live model selected',
};

export const DEMO_FLOAT_CONTENT: DemoFloatDetailContent = {
  costDetail:      'Demo cost breakdown — no real spend tracked. All values are static fixtures.',
  contextDetail:   'Demo context summary — no files, tokens, or sources loaded. All values are static fixtures.',
  queueItemDetail: 'Demo queue item detail — no real work record, routing, or provider activity exists.',
};

export const QUEUE_FILTERS: readonly QueueFilter[] = [
  'All', 'Working', 'Waiting', 'Deferred', 'Completed', 'Attention',
];
