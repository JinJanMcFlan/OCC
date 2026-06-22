import type { ReactNode } from 'react';
import type { PanelId } from '../baseUxPresentationTypes';

export type PanelFocusContract = {
  focusedPanel: PanelId | null;
  onFocus: (panel: PanelId) => void;
  onExitFocus: () => void;
};

type PanelFrameProps = {
  panelId: PanelId;
  title: string;
  children: ReactNode;
  focus: PanelFocusContract;
  /** Grid-area placement class applied by the parent workspace layout. */
  className?: string;
};

export function PanelFrame({ panelId, title, children, focus, className }: PanelFrameProps) {
  const isFocused = focus.focusedPanel === panelId;
  const anyFocused = focus.focusedPanel !== null;

  const rootClass = ['pf-panel', isFocused ? 'pf-focused' : '', className ?? '']
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClass} data-panel-id={panelId}>
      <div className="pf-header">
        <span className="pf-title">{title}</span>
        <div className="pf-header-actions">
          <span className="pf-demo-badge">demo</span>
          {isFocused ? (
            <button className="pf-focus-btn" onClick={focus.onExitFocus} type="button">
              Exit focus
            </button>
          ) : (
            <button
              className="pf-focus-btn"
              onClick={() => focus.onFocus(panelId)}
              type="button"
              disabled={anyFocused}
            >
              Focus
            </button>
          )}
        </div>
      </div>
      <div className="pf-body">{children}</div>
    </div>
  );
}
