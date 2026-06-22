import { useState, useEffect } from 'react';
import './baseUx.css';
import type {
  ProjectId,
  ConversationId,
  QueueItemId,
  QueueFilter,
  PanelId,
  FloatWindowDescriptor,
} from './baseUxPresentationTypes';
import { PanelFrame } from './components/PanelFrame';
import type { PanelFocusContract } from './components/PanelFrame';
import { FloatingWindowLayer } from './components/FloatingWindowLayer';

// State declared here is intentionally pre-wired ahead of panel slice integration.
// Setters without current callers will gain callers when panel slices are wired.
/* eslint-disable @typescript-eslint/no-unused-vars */

export function BaseUxDemoScreen() {
  // Sole owner of all ephemeral renderer state. Resets on reload or relaunch.
  const [selectedProjectId, setSelectedProjectId] = useState<ProjectId | null>(null);
  const [selectedConversationId, setSelectedConversationId] = useState<ConversationId | null>(null);
  const [selectedQueueItemId, setSelectedQueueItemId] = useState<QueueItemId | null>(null);
  const [queueFilter, setQueueFilter] = useState<QueueFilter>('All');
  const [focusedPanel, setFocusedPanel] = useState<PanelId | null>(null);
  const [draftText, setDraftText] = useState('');
  const [openFloats, setOpenFloats] = useState<FloatWindowDescriptor[]>([]);

  /* eslint-enable @typescript-eslint/no-unused-vars */

  // Esc priority: close topmost float first, then exit focus mode.
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setOpenFloats(prev => {
        if (prev.length > 0) {
          e.preventDefault();
          return prev.slice(0, -1);
        }
        return prev;
      });
      if (openFloats.length === 0 && focusedPanel !== null) {
        e.preventDefault();
        setFocusedPanel(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [openFloats.length, focusedPanel]);

  const closeFloat = (floatId: string) =>
    setOpenFloats(prev => prev.filter(f => f.id !== floatId));

  const focusContract: PanelFocusContract = {
    focusedPanel,
    onFocus: setFocusedPanel,
    onExitFocus: () => setFocusedPanel(null),
  };

  return (
    <div className="bux-root">
      {/* Application chrome — max 40px */}
      <div className="bux-chrome">
        <span className="bux-chrome-label">OCC</span>
        <span className="bux-demo-badge">Demo data — local only</span>
      </div>

      {/* Four-panel workspace */}
      <div className={`bux-workspace${focusedPanel ? ' bux-focus-mode' : ''}`}>

        <PanelFrame panelId="projects" title="Projects" focus={focusContract} className="bux-area-projects">
          <div className="bux-placeholder">
            <span className="bux-placeholder-label">Projects</span>
            <span className="bux-placeholder-note">
              Project tree — independent implementation slice
            </span>
          </div>
        </PanelFrame>

        <PanelFrame panelId="thread" title="Command Thread" focus={focusContract} className="bux-area-thread">
          <div className="bux-placeholder">
            <span className="bux-placeholder-label">Command Thread</span>
            <span className="bux-placeholder-note">
              Command thread panel — independent implementation slice
            </span>
          </div>
        </PanelFrame>

        <PanelFrame panelId="controls" title="Controls and Status" focus={focusContract} className="bux-area-controls">
          <div className="bux-placeholder">
            <span className="bux-placeholder-label">Controls and Status</span>
            <span className="bux-placeholder-note">
              Control inspector — independent implementation slice
            </span>
          </div>
        </PanelFrame>

        <PanelFrame panelId="queue" title="Queue" focus={focusContract} className="bux-area-queue">
          <div className="bux-placeholder">
            <span className="bux-placeholder-label">Queue</span>
            <span className="bux-placeholder-note">
              Queue panel — independent implementation slice
            </span>
          </div>
        </PanelFrame>

        {/* Float layer — renders null until the float slice is implemented */}
        <FloatingWindowLayer openFloats={openFloats} onClose={closeFloat} />

      </div>
    </div>
  );
}
