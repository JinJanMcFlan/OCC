import { useState, useRef, useCallback, KeyboardEvent } from 'react';

// ── Demo-only fixture types ───────────────────────────────────────────────────
// Names prefixed Demo* are presentation fixtures only.
// No routing, data persistence, or provider connection is implied.

type DemoProject = {
  id: string;
  label: string;
};

type DemoConversation = {
  id: string;
  projectId: string;
  label: string;
};

type DemoQueueState = 'running' | 'waiting' | 'deferred' | 'completed' | 'draft';

type DemoQueueItem = {
  id: string;
  text: string;
  state: DemoQueueState;
  meta: string;
};

type DemoMessage = {
  id: string;
  text: string;
};

type FocusRegion = 'all' | 'left' | 'center' | 'right' | 'bottom';

// ── Demo fixture data ─────────────────────────────────────────────────────────

const DEMO_PROJECTS: DemoProject[] = [
  { id: 'p1', label: 'DemoProject Alpha' },
  { id: 'p2', label: 'DemoProject Beta' },
];

const DEMO_CONVERSATIONS: DemoConversation[] = [
  { id: 'c1', projectId: 'p1', label: 'DemoConversation: Initial exploration' },
  { id: 'c2', projectId: 'p1', label: 'DemoConversation: Architecture review' },
  { id: 'c3', projectId: 'p2', label: 'DemoConversation: Feature planning' },
];

const INITIAL_QUEUE: DemoQueueItem[] = [
  { id: 'q1', text: 'DemoQueueItem: Analyze folder structure', state: 'running', meta: 'local demo · no provider' },
  { id: 'q2', text: 'DemoQueueItem: Summarize recent changes', state: 'waiting', meta: 'local demo · no provider' },
  { id: 'q3', text: 'DemoQueueItem: Draft component outline', state: 'deferred', meta: 'local demo · no provider' },
  { id: 'q4', text: 'DemoQueueItem: Review prior output', state: 'completed', meta: 'local demo · no provider' },
];

// ── Toggle component ──────────────────────────────────────────────────────────

function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <div className="toggle-row">
      <span className="toggle-label">{label}</span>
      <label className="toggle">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className="toggle-track" />
        <span className="toggle-thumb" />
      </label>
    </div>
  );
}

// ── Queue item component ──────────────────────────────────────────────────────

function QueueItemCard({ item }: { item: DemoQueueItem }) {
  return (
    <div className={`queue-item state-${item.state}`}>
      <div className="queue-item-header">
        <div className="queue-state-dot" />
        <span className="queue-state-label">{item.state}</span>
        <span className="demo-tag">demo</span>
      </div>
      <div className="queue-item-text">{item.text}</div>
      <div className="queue-item-meta">{item.meta}</div>
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────────────────────

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [selectedConvId, setSelectedConvId] = useState<string | null>(null);
  const [messages, setMessages] = useState<DemoMessage[]>([]);
  const [composerText, setComposerText] = useState('');
  const [queueItems, setQueueItems] = useState<DemoQueueItem[]>(INITIAL_QUEUE);
  const [focusRegion, setFocusRegion] = useState<FocusRegion>('all');

  // Autonomy controls — local UI state only, no effect on routing or providers
  const [autonomyAuto, setAutonomyAuto] = useState(false);
  const [autonomyBatch, setAutonomyBatch] = useState(false);
  const [autonomyReview, setAutonomyReview] = useState(true);

  const composerRef = useRef<HTMLTextAreaElement>(null);

  const visibleConvs = DEMO_CONVERSATIONS.filter(c => c.projectId === selectedProjectId);

  const submitCommand = useCallback(() => {
    const text = composerText.trim();
    if (!text) return;

    // Add as a local unsent demo message in the thread
    const msgId = `msg-${Date.now()}`;
    setMessages(prev => [...prev, { id: msgId, text }]);

    // Add as a local draft queue item — explicitly unsent, unrouted
    const queueId = `qdraft-${Date.now()}`;
    setQueueItems(prev => [
      {
        id: queueId,
        text: `DemoQueueItem: ${text}`,
        state: 'draft',
        meta: 'local draft · unsent · unrouted · no provider',
      },
      ...prev,
    ]);

    setComposerText('');
    composerRef.current?.focus();
  }, [composerText]);

  const handleComposerKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      submitCommand();
    }
  };

  const isVisible = (region: 'left' | 'center' | 'right' | 'bottom') =>
    focusRegion === 'all' || focusRegion === region;

  return (
    <>
      {/* Demo banner — persistent label per spec */}
      <div className="demo-banner">
        <span className="demo-banner-dot" />
        Local Base UX demo — no live routing or provider connection
        <span className="demo-banner-dot" />
      </div>

      <div className="shell">
        {/* Focus control bar */}
        <div className="focus-bar">
          <span className="focus-bar-label">Focus</span>
          {(['all', 'left', 'center', 'right', 'bottom'] as FocusRegion[]).map(r => (
            <button
              key={r}
              className={`focus-btn${focusRegion === r ? ' active' : ''}`}
              onClick={() => setFocusRegion(focusRegion === r && r !== 'all' ? 'all' : r)}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Main three-column area */}
        <div className="shell-main">

          {/* ── Left panel: projects + conversation tree ── */}
          <div className={`panel panel-left${isVisible('left') ? '' : ' collapsed'}`}>
            <div className="panel-header">
              <span className="panel-title">Projects</span>
            </div>
            <div className="panel-body">
              <div className="section-label">Demo projects</div>
              {DEMO_PROJECTS.map(p => (
                <div
                  key={p.id}
                  className={`project-item${selectedProjectId === p.id ? ' selected' : ''}`}
                  onClick={() => {
                    setSelectedProjectId(p.id);
                    setSelectedConvId(null);
                  }}
                >
                  <div className="project-dot" />
                  {p.label}
                  <span className="demo-tag">demo</span>
                </div>
              ))}

              {selectedProjectId && visibleConvs.length > 0 && (
                <>
                  <div className="section-label" style={{ marginTop: 8 }}>Conversations</div>
                  {visibleConvs.map(c => (
                    <div
                      key={c.id}
                      className={`conv-item${selectedConvId === c.id ? ' selected' : ''}`}
                      onClick={() => setSelectedConvId(c.id)}
                    >
                      {c.label}
                    </div>
                  ))}
                </>
              )}

              {!selectedProjectId && (
                <div className="placeholder-row">Select a project above</div>
              )}
            </div>
          </div>

          {/* ── Center panel: command thread + composer ── */}
          <div className={`panel panel-center${isVisible('center') ? '' : ' collapsed'}`}>
            <div className="panel-header">
              <span className="panel-title">Command thread</span>
              {selectedConvId && (
                <span style={{ fontSize: 10, color: 'var(--demo-badge-text)' }}>
                  {DEMO_CONVERSATIONS.find(c => c.id === selectedConvId)?.label}
                </span>
              )}
            </div>

            <div className="thread-body">
              {messages.length === 0 ? (
                <div className="thread-empty">
                  <span>No commands yet</span>
                  <span className="thread-empty-hint">Type a command below · Ctrl+Enter to submit</span>
                </div>
              ) : (
                messages.map(m => (
                  <div key={m.id} className="thread-message">
                    <div className="msg-label">Local demo entry · unsent · unrouted</div>
                    <div className="msg-text">{m.text}</div>
                  </div>
                ))
              )}
            </div>

            {/* Composer */}
            <div className="composer">
              <div className="composer-row">
                <textarea
                  ref={composerRef}
                  className="composer-input"
                  placeholder="Enter a command… (demo only — nothing is sent or routed)"
                  value={composerText}
                  onChange={e => setComposerText(e.target.value)}
                  onKeyDown={handleComposerKey}
                  rows={1}
                />
                <button
                  className="composer-submit"
                  disabled={!composerText.trim()}
                  onClick={submitCommand}
                >
                  Add to queue
                </button>
              </div>
              <div className="composer-note">
                Demo only · Ctrl+Enter · Commands appear as local draft queue items — no provider, no routing
              </div>
            </div>
          </div>

          {/* ── Right panel: controls, status, placeholders ── */}
          <div className={`panel panel-right${isVisible('right') ? '' : ' collapsed'}`}>
            <div className="panel-header">
              <span className="panel-title">Local controls</span>
            </div>
            <div className="panel-body">

              <div className="control-section">
                <div className="control-section-title">Autonomy</div>
                <Toggle
                  label="Auto-submit"
                  checked={autonomyAuto}
                  onChange={() => setAutonomyAuto(v => !v)}
                />
                <Toggle
                  label="Batch mode"
                  checked={autonomyBatch}
                  onChange={() => setAutonomyBatch(v => !v)}
                />
                <Toggle
                  label="Require review"
                  checked={autonomyReview}
                  onChange={() => setAutonomyReview(v => !v)}
                />
                <div style={{ fontSize: 10, color: 'var(--demo-badge-text)', marginTop: 5 }}>
                  Demo toggles · no effect on routing
                </div>
              </div>

              <div className="control-section">
                <div className="control-section-title">Budget / cost</div>
                <div className="status-row">
                  <span className="status-key">Session spend</span>
                  <span className="status-val demo-val">demo</span>
                </div>
                <div className="status-row">
                  <span className="status-key">Budget limit</span>
                  <span className="status-val demo-val">demo</span>
                </div>
                <div className="status-row">
                  <span className="status-key">Tokens used</span>
                  <span className="status-val demo-val">demo</span>
                </div>
              </div>

              <div className="control-section">
                <div className="control-section-title">Folder binding</div>
                <div className="placeholder-row">No folder bound · placeholder</div>
              </div>

              <div className="control-section">
                <div className="control-section-title">Context</div>
                <div className="placeholder-row">No context loaded · placeholder</div>
              </div>

              <div className="control-section">
                <div className="control-section-title">Provider / model</div>
                <div className="status-row">
                  <span className="status-key">Provider</span>
                  <span className="status-val demo-val">unconnected</span>
                </div>
                <div className="status-row">
                  <span className="status-key">Model</span>
                  <span className="status-val demo-val">unset</span>
                </div>
                <div className="status-row">
                  <span className="status-key">Status</span>
                  <span className="status-val demo-val">demo only</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── Bottom panel: queue ── */}
        <div className={`panel-bottom${isVisible('bottom') ? '' : ' collapsed'}`}>
          <div className="queue-header">
            <span className="queue-title">Queue</span>
            <div className="queue-legend">
              {(['running', 'waiting', 'deferred', 'completed', 'draft'] as DemoQueueState[]).map(s => (
                <div key={s} className="legend-item">
                  <div className={`legend-dot state-${s}`} style={{
                    background: s === 'running' ? 'var(--state-running)'
                      : s === 'waiting' ? 'var(--state-waiting)'
                      : s === 'deferred' ? 'var(--state-deferred)'
                      : s === 'completed' ? 'var(--state-completed)'
                      : 'var(--state-draft)'
                  }} />
                  {s}
                </div>
              ))}
            </div>
          </div>
          <div className="queue-body">
            {queueItems.length === 0 ? (
              <div className="queue-empty">No queue items</div>
            ) : (
              queueItems.map(item => <QueueItemCard key={item.id} item={item} />)
            )}
          </div>
        </div>
      </div>
    </>
  );
}
