import { useState, useEffect, useRef, useId } from 'react';
import type { DemoThreadEntry, ProjectId, ConversationId } from '../baseUxPresentationTypes';
import { DEMO_THREAD_HISTORY, DEMO_PROJECTS, DEMO_CONVERSATIONS } from '../baseUxDemoData';

type CommandThreadViewState = 'loading' | 'seeded' | 'empty' | 'unavailable';

// Maps each fixture conversation to its demo terminal view-state.
// Loading skeletons are shown briefly before transitioning to this state.
const CONV_TERMINAL_STATE: Partial<Record<string, CommandThreadViewState>> = {
  'conv-a1':  'seeded',
  'conv-a2':  'seeded',
  'conv-a2c': 'empty',
  'conv-b1':  'seeded',
  'conv-b2':  'unavailable',
};

export type CommandThreadPanelProps = {
  selectedProjectId: ProjectId | null;
  selectedConversationId: ConversationId | null;
  draftText: string;
  onDraftChange: (text: string) => void;
};

export function CommandThreadPanel({
  selectedProjectId,
  selectedConversationId,
  draftText,
  onDraftChange,
}: CommandThreadPanelProps) {
  // Local ephemeral state: lives in this component because it is thread-scoped
  // and not shared across panels. Will be hoisted to BaseUxDemoScreen at
  // integration time if cross-panel coordination is needed.
  const [viewState, setViewState] = useState<CommandThreadViewState>('seeded');
  const [sessionEntries, setSessionEntries] = useState<DemoThreadEntry[]>([]);

  const threadRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const statusId = useId();
  const kbdHintId = useId();

  const project = selectedProjectId
    ? (DEMO_PROJECTS.find(p => p.id === selectedProjectId) ?? null)
    : null;
  const conversation = selectedConversationId
    ? (DEMO_CONVERSATIONS.find(c => c.id === selectedConversationId) ?? null)
    : null;

  // When conversation changes: clear session, show loading, then settle to
  // the terminal state for that conversation (or 'seeded' if unknown).
  useEffect(() => {
    setSessionEntries([]);
    if (!selectedConversationId) {
      setViewState('seeded');
      return;
    }
    setViewState('loading');
    const terminal = CONV_TERMINAL_STATE[selectedConversationId] ?? 'seeded';
    const timer = setTimeout(() => setViewState(terminal), 650);
    return () => clearTimeout(timer);
  }, [selectedConversationId]);

  // Scroll thread to bottom after new session entries arrive.
  useEffect(() => {
    if (threadRef.current) {
      threadRef.current.scrollTop = threadRef.current.scrollHeight;
    }
  }, [sessionEntries]);

  const canSend =
    draftText.trim().length > 0 &&
    viewState !== 'loading' &&
    viewState !== 'unavailable';

  const handleSend = () => {
    const text = draftText.trim();
    if (!text) return;
    const ts = Date.now().toString();
    // Sending in an empty-state conversation transitions it to seeded so
    // the new entries are rendered rather than hidden by the state card.
    if (viewState === 'empty') setViewState('seeded');
    setSessionEntries(prev => [
      ...prev,
      {
        id: `su-${ts}`,
        role: 'user',
        body: text,
        labelTag: 'Demo entry — not sent',
      },
    ]);
    onDraftChange('');
    textareaRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Plain Enter sends; Shift+Enter inserts a newline.
    // Guard against IME composition (e.g. CJK input) so Enter only sends
    // once composition is committed, not during candidate selection.
    if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      handleSend();
    }
  };

  // Fixture history shown for seeded conversations; session sends appended on top.
  const baseEntries: readonly DemoThreadEntry[] = selectedConversationId
    ? DEMO_THREAD_HISTORY
    : [];
  const visibleEntries = [...baseEntries, ...sessionEntries];

  const sendHint = 'Enter to send  ·  Shift+Enter for new line';

  return (
    <div className="ct-root">

      {/* Compact IDE-style context breadcrumb */}
      <div className="ct-context-bar" aria-label="Thread context">
        {project ? (
          <span className="ct-context-project">{project.displayName}</span>
        ) : (
          <span className="ct-context-none">No project selected</span>
        )}
        {project && conversation && (
          <>
            <span className="ct-context-sep" aria-hidden="true">/</span>
            <span className="ct-context-conv">{conversation.displayName}</span>
          </>
        )}
      </div>

      {/* Persistent truthful status — always visible */}
      <div
        className="ct-status-strip"
        id={statusId}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        <span className="ct-status-dot" aria-hidden="true" />
        <span className="ct-status-text">
          UI preview — response engine not connected
        </span>
      </div>

      {/* Scrollable thread body */}
      <div
        className="ct-thread"
        ref={threadRef}
        role="log"
        aria-label="Command thread"
        aria-describedby={statusId}
        aria-busy={viewState === 'loading'}
      >
        {viewState === 'loading' && <LoadingSkeleton />}

        {viewState === 'empty' && (
          <p className="ct-state-card ct-state-empty" role="status">
            No commands in this demo conversation yet.
          </p>
        )}

        {viewState === 'unavailable' && (
          <p className="ct-state-card ct-state-unavailable" role="alert">
            Demo error state — no external action was attempted.
          </p>
        )}

        {viewState === 'seeded' && (
          visibleEntries.length === 0 ? (
            <p className="ct-state-card ct-state-empty" role="status">
              {selectedConversationId
                ? 'No commands in this demo conversation yet.'
                : 'Select a conversation to view its thread.'}
            </p>
          ) : (
            visibleEntries.map(entry => (
              <MessageCard key={entry.id} entry={entry} />
            ))
          )
        )}
      </div>

      {/* Composer — pinned at bottom of the panel */}
      <div className="ct-composer-wrap" aria-label="Command composer">
        <textarea
          ref={textareaRef}
          className="ct-composer"
          value={draftText}
          onChange={e => onDraftChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter a command…"
          rows={2}
          aria-label="Command input"
          aria-describedby={kbdHintId}
          disabled={viewState === 'unavailable'}
        />
        <div className="ct-composer-actions">
          <span className="ct-kbd-hint" id={kbdHintId}>
            {sendHint}
          </span>
          <button
            type="button"
            className="ct-send-btn"
            onClick={handleSend}
            disabled={!canSend}
            aria-label="Send command"
          >
            Send
          </button>
        </div>
      </div>

    </div>
  );
}

function MessageCard({ entry }: { entry: DemoThreadEntry }) {
  const isUser = entry.role === 'user';
  return (
    <div className={`ct-msg ${isUser ? 'ct-msg-user' : 'ct-msg-ack'}`}>
      <div className="ct-msg-label">{entry.labelTag}</div>
      <div className="ct-msg-body">{entry.body}</div>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="ct-skeletons" role="status" aria-label="Loading thread" aria-busy="true">
      {[0, 1, 2, 3].map(i => (
        <div key={i} className="ct-skeleton-card" aria-hidden="true">
          <div className="ct-skeleton-label" />
          <div className="ct-skeleton-line ct-skeleton-line-long" />
          <div className="ct-skeleton-line ct-skeleton-line-short" />
        </div>
      ))}
    </div>
  );
}
