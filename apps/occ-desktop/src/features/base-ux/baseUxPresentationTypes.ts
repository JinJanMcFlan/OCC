// UI-only presentation types for Base UX Demo.
// Renderer-local shapes only — no routing, delegation, persistence, or provider semantics.
// Do not use final-architecture names: Task, Delegation, ResearchRecord,
// RouterPlan, CapabilityRegistry, ProviderRecord, or similar.

export type ProjectId = string;
export type ConversationId = string;
export type QueueItemId = string;

export type DemoProjectRecord = {
  id: ProjectId;
  displayName: string;
  conversationCount: number;
};

export type DemoConversationRecord = {
  id: ConversationId;
  projectId: ProjectId;
  displayName: string;
  /** Present when this conversation is a nested child of another. */
  parentId?: ConversationId;
  messageCount: number;
};

export type DemoThreadEntry = {
  id: string;
  role: 'user' | 'acknowledgment';
  body: string;
  labelTag: string;
};

export type QueueStatusLabel = 'Working' | 'Waiting' | 'Deferred' | 'Completed' | 'Attention';
export type QueueFilter = 'All' | QueueStatusLabel;

export type DemoQueueEntry = {
  id: QueueItemId;
  displayText: string;
  status: QueueStatusLabel;
  statusMeta: string;
};

export type PanelId = 'projects' | 'thread' | 'controls' | 'queue';

export type FloatWindowKind = 'cost-detail' | 'context-detail' | 'queue-item-detail';

export type FloatWindowDescriptor = {
  id: string;
  kind: FloatWindowKind;
  title: string;
  /** Opaque string payload (e.g., a queue item id). Not an infrastructure record. */
  payload?: string;
};

export type DemoControlSummary = {
  operatingMode: string;
  costSnapshotLabel: string;
  folderStatus: string;
  contextSummary: string;
  providerStatus: string;
  modelStatus: string;
};

export type DemoFloatDetailContent = {
  costDetail: string;
  contextDetail: string;
  queueItemDetail: string;
};

/** Prop contract that FloatingWindowLayer will consume when the float slice is implemented. */
export type FloatingWindowLayerProps = {
  openFloats: FloatWindowDescriptor[];
  onClose: (floatId: string) => void;
};
